import React, { useState, useEffect } from 'react';
import {
  TAIWAN_DESTINATIONS,
  REGIONS_META
} from './data/taiwanData';
import { Destination, RegionType, BucketListItem } from './types/travel';
import { TaiwanMap } from './components/TaiwanMap';
import { DestinationDetail } from './components/DestinationDetail';
import { RandomPickerModal } from './components/RandomPickerModal';
import { BucketListDrawer } from './components/BucketListDrawer';
import { getStoredBucketList, saveStoredBucketList } from './utils/storage';
import {
  MapPin,
  Dice5,
  BookmarkCheck,
  Search,
  Compass,
  Sparkles,
  Layers,
  ChevronRight,
  Share2
} from 'lucide-react';

export default function App() {
  const [destinations] = useState<Destination[]>(TAIWAN_DESTINATIONS);
  const [selectedDestination, setSelectedDestination] = useState<Destination>(
    TAIWAN_DESTINATIONS.find(d => d.id === 'tainan') || TAIWAN_DESTINATIONS[0]
  );
  const [activeRegion, setActiveRegion] = useState<RegionType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isRandomModalOpen, setIsRandomModalOpen] = useState<boolean>(false);
  const [isBucketDrawerOpen, setIsBucketDrawerOpen] = useState<boolean>(false);
  const [bucketList, setBucketList] = useState<BucketListItem[]>(getStoredBucketList);
  const [highlightedMapId, setHighlightedMapId] = useState<string | null>(null);

  // Mobile active tab view
  const [mobileTab, setMobileTab] = useState<'map' | 'details'>('map');

  // Sync bucket list to localStorage
  useEffect(() => {
    saveStoredBucketList(bucketList);
  }, [bucketList]);

  // Filtered destination list based on region and search query
  const filteredDestinations = destinations.filter(dest => {
    const matchesRegion = activeRegion === 'all' || dest.region === activeRegion;
    if (!matchesRegion) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const matchesName =
      dest.name.toLowerCase().includes(q) ||
      dest.englishName.toLowerCase().includes(q) ||
      dest.tagline.toLowerCase().includes(q);
    const matchesAttraction = dest.attractions.some(
      a => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    );
    const matchesDelicacy = dest.delicacies.some(
      d => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
    );

    return matchesName || matchesAttraction || matchesDelicacy;
  });

  // Handle adding/removing whole city or attraction in bucket list
  const handleToggleBucketItem = (itemToAdd: {
    destinationId: string;
    destinationName: string;
    title: string;
    type: 'city' | 'attraction' | 'custom';
    category?: string;
  }) => {
    const existingIndex = bucketList.findIndex(
      item =>
        item.destinationId === itemToAdd.destinationId &&
        item.title === itemToAdd.title &&
        item.type === itemToAdd.type
    );

    if (existingIndex >= 0) {
      // Remove
      setBucketList(prev => prev.filter((_, idx) => idx !== existingIndex));
    } else {
      // Add
      const newItem: BucketListItem = {
        id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        destinationId: itemToAdd.destinationId,
        destinationName: itemToAdd.destinationName,
        title: itemToAdd.title,
        type: itemToAdd.type,
        category: itemToAdd.category,
        isCompleted: false,
        addedAt: Date.now()
      };
      setBucketList(prev => [newItem, ...prev]);
    }
  };

  const handleToggleBucketComplete = (id: string) => {
    setBucketList(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
              completedAt: !item.isCompleted ? Date.now() : undefined
            }
          : item
      )
    );
  };

  const handleDeleteBucketItem = (id: string) => {
    setBucketList(prev => prev.filter(item => item.id !== id));
  };

  const handleAddCustomBucketItem = (custom: {
    destinationId: string;
    destinationName: string;
    title: string;
    note?: string;
  }) => {
    const newItem: BucketListItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      destinationId: custom.destinationId,
      destinationName: custom.destinationName,
      title: custom.title,
      type: 'custom',
      category: '私房備忘',
      note: custom.note,
      isCompleted: false,
      addedAt: Date.now()
    };
    setBucketList(prev => [newItem, ...prev]);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setHighlightedMapId(dest.id);
    setMobileTab('details');
  };

  const handleSelectDestinationById = (id: string) => {
    const found = destinations.find(d => d.id === id);
    if (found) {
      setSelectedDestination(found);
      setHighlightedMapId(found.id);
      setMobileTab('details');
    }
  };

  const totalBucketCount = bucketList.length;
  const completedBucketCount = bucketList.filter(b => b.isCompleted).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Top Bar Contract: 3 zones separated by gap-8: [Brand wordmark] - [4-5 single line nav links] - [1 primary action] */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          {/* Zone 1: Single element wordmark */}
          <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
              台灣去哪玩？
            </span>
          </div>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => {
                setActiveRegion('all');
                setMobileTab('map');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                activeRegion === 'all' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              全台地圖
            </button>
            <button
              onClick={() => {
                setActiveRegion('north');
                setMobileTab('map');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                activeRegion === 'north' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              北部漫步
            </button>
            <button
              onClick={() => {
                setActiveRegion('central');
                setMobileTab('map');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                activeRegion === 'central' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              中部森活
            </button>
            <button
              onClick={() => {
                setActiveRegion('south');
                setMobileTab('map');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                activeRegion === 'south' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              南部古城
            </button>
            <button
              onClick={() => {
                setActiveRegion('east');
                setMobileTab('map');
              }}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
                activeRegion === 'east' ? 'text-teal-700 font-semibold' : ''
              }`}
            >
              東部大山大海
            </button>
          </nav>

          {/* Zone 3: Actions (Bucket List trigger & 1 Primary Action: Random Pick) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setIsBucketDrawerOpen(true)}
              className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all whitespace-nowrap shrink-0"
              title="查看我的願望清單"
            >
              <BookmarkCheck className="w-4 h-4 text-teal-600" />
              <span className="hidden sm:inline">願望清單</span>
              <span className="bg-teal-600 text-white text-[10px] px-1.5 py-0.2 rounded-full tabular-nums">
                {completedBucketCount}/{totalBucketCount}
              </span>
            </button>

            <button
              onClick={() => setIsRandomModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <Dice5 className="w-3.5 h-3.5 animate-spin-slow" />
              <span>隨機決定出遊地</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Hero Concept & Search Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 text-balance">
              台灣出遊決策地圖 · 探索山海與城市美味
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              選擇障礙救星！點選互動地圖探索各大縣市特色，或一鍵交給命運隨機抽籤。
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="搜尋城市、景點或美食..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-teal-500 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Region Filter Segmented Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {REGIONS_META.map(reg => (
            <button
              key={reg.id}
              onClick={() => setActiveRegion(reg.id as RegionType)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeRegion === reg.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {reg.name}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline whitespace-nowrap pl-2">
            共 {filteredDestinations.length} 個縣市地標
          </span>
        </div>

        {/* Mobile View Toggle Tabs (Visible on small screens) */}
        <div className="flex md:hidden items-center bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setMobileTab('map')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              mobileTab === 'map' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
            }`}
          >
            互動地圖
          </button>
          <button
            onClick={() => setMobileTab('details')}
            className={`flex-1 py-1.5 rounded-lg transition-all ${
              mobileTab === 'details' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
            }`}
          >
            {selectedDestination ? `${selectedDestination.name} 詳情` : '景點指南'}
          </button>
        </div>

        {/* Split Grid Layout (Desktop: 2 Columns, 1440px baseline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Taiwan Map & Quick Destination Selector (5 cols) */}
          <div
            className={`lg:col-span-5 space-y-4 ${
              mobileTab === 'map' ? 'block' : 'hidden lg:block'
            }`}
          >
            <TaiwanMap
              destinations={filteredDestinations}
              selectedDestination={selectedDestination}
              onSelectDestination={handleSelectDestination}
              activeRegion={activeRegion}
              highlightedId={highlightedMapId}
            />

            {/* Quick List of Filtered Cities */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2.5">
                <span>快速選擇目的地 ({filteredDestinations.length})</span>
                <span className="text-[11px] text-slate-400 font-normal">點擊切換地圖</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[190px] overflow-y-auto pr-1">
                {filteredDestinations.map(d => {
                  const isCurrent = selectedDestination?.id === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => handleSelectDestination(d)}
                      className={`flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs transition-all ${
                        isCurrent
                          ? 'bg-teal-50 border border-teal-300 text-teal-800 font-bold'
                          : 'bg-slate-50/80 hover:bg-slate-100 border border-slate-200/70 text-slate-700'
                      }`}
                    >
                      <span className="truncate">{d.name}</span>
                      <ChevronRight className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Destination Details, Attractions, Delicacies (7 cols) */}
          <div
            className={`lg:col-span-7 ${
              mobileTab === 'details' ? 'block' : 'hidden lg:block'
            }`}
          >
            <DestinationDetail
              destination={selectedDestination}
              bucketList={bucketList}
              onToggleBucketItem={handleToggleBucketItem}
              onOpenRandomModal={() => setIsRandomModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Floating Bottom Quick Bar for Mobile */}
      <div className="md:hidden fixed bottom-4 right-4 left-4 z-30 flex items-center justify-between gap-2 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-800">
        <div className="text-xs">
          <span className="text-slate-400">目前選擇：</span>
          <span className="font-bold text-teal-300 ml-1">{selectedDestination?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRandomModalOpen(true)}
            className="flex items-center gap-1 px-3 py-1.5 bg-teal-600 text-white text-xs font-bold rounded-xl shadow-xs"
          >
            <Dice5 className="w-3.5 h-3.5" />
            <span>命運抽籤</span>
          </button>
        </div>
      </div>

      {/* Quiet Footer */}
      <footer className="mt-auto border-t border-slate-200/80 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">台灣去哪玩？</span>
            <span aria-hidden="true">·</span>
            <span>Taiwan Travel Explorer</span>
          </div>
          <div className="text-slate-400">
            純前端靜態建置 · 本地儲存無須登入 · 祝你每趟旅程皆有美好回憶
          </div>
        </div>
      </footer>

      {/* Random Picker Destiny Modal */}
      <RandomPickerModal
        isOpen={isRandomModalOpen}
        onClose={() => setIsRandomModalOpen(false)}
        destinations={destinations}
        onDestinationChosen={dest => {
          handleSelectDestination(dest);
        }}
        onAddToBucketList={handleToggleBucketItem}
      />

      {/* Bucket List & Custom Notes Drawer */}
      <BucketListDrawer
        isOpen={isBucketDrawerOpen}
        onClose={() => setIsBucketDrawerOpen(false)}
        items={bucketList}
        destinations={destinations}
        onToggleComplete={handleToggleBucketComplete}
        onDeleteItem={handleDeleteBucketItem}
        onAddNewCustomItem={handleAddCustomBucketItem}
        onSelectDestinationById={handleSelectDestinationById}
      />
    </div>
  );
}
