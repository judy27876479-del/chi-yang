import React, { useState } from 'react';
import { Destination, Attraction, Delicacy, BucketListItem } from '../types/travel';
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  Utensils,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  Share2,
  Check,
  Navigation,
  CloudSun,
  Bus
} from 'lucide-react';

interface DestinationDetailProps {
  destination: Destination | null;
  bucketList: BucketListItem[];
  onToggleBucketItem: (item: {
    destinationId: string;
    destinationName: string;
    title: string;
    type: 'city' | 'attraction' | 'custom';
    category?: string;
  }) => void;
  onOpenRandomModal: () => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  bucketList,
  onToggleBucketItem,
  onOpenRandomModal
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'attractions' | 'delicacies' | 'transport'>('attractions');

  if (!destination) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
          <Compass className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-1">請點選地圖或抽取目的地</h3>
        <p className="text-sm text-slate-500 max-w-sm mb-6">
          點擊地圖上的城市標記，即時查閱必訪私房景點、米其林在地美食與實用交通指南。
        </p>
        <button
          onClick={onOpenRandomModal}
          className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-sky-600 text-white font-medium text-sm rounded-xl shadow-sm hover:opacity-95 transition-opacity"
        >
          一鍵命運隨機抽籤
        </button>
      </div>
    );
  }

  // Check if whole city is already in bucket list
  const isCityInBucket = bucketList.some(
    item => item.destinationId === destination.id && item.type === 'city'
  );

  const isAttractionInBucket = (attractionName: string) => {
    return bucketList.some(
      item => item.destinationId === destination.id && item.title.includes(attractionName)
    );
  };

  const handleShare = () => {
    const text = `【台灣出遊靈感】我正在看《${destination.name} · ${destination.tagline}》！推薦景點：${destination.attractions.map(a => a.name).join('、')}。在地必吃：${destination.delicacies.map(d => d.name).join('、')}！`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openGoogleMaps = (query: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${destination.name} ${query}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden flex flex-col">
      {/* Header Banner */}
      <div className={`p-6 sm:p-7 bg-gradient-to-r ${destination.gradient} text-white relative`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-white/80 mb-1.5 tracking-wide">
              <span>{destination.regionName}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.englishName}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.durationText}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {destination.name}
            </h1>
            <p className="text-sm text-white/90 font-medium max-w-xl">
              {destination.tagline}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                onToggleBucketItem({
                  destinationId: destination.id,
                  destinationName: destination.name,
                  title: `暢遊 ${destination.name}（${destination.tagline}）`,
                  type: 'city',
                  category: '城市總覽'
                })
              }
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold backdrop-blur-md transition-all ${
                isCityInBucket
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isCityInBucket ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-teal-600" />
                  已加入願望清單
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  收藏整個城市
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all"
              title="複製出遊靈感摘要"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  已複製
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  分享
                </>
              )}
            </button>
          </div>
        </div>

        {/* Vibe Tags - Zero Pill Discipline: Clean unboxed metadata with bullet separators */}
        <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2 text-xs text-white/85">
          <span className="font-semibold text-white/95">城市風格：</span>
          {destination.vibeTags.map((vibe, idx) => (
            <React.Fragment key={vibe}>
              <span>{vibe}</span>
              {idx < destination.vibeTags.length - 1 && <span aria-hidden="true" className="opacity-60">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Travel Practical Metadata Banner */}
      <div className="bg-slate-50/90 px-6 py-3.5 border-b border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
        <div className="flex items-start gap-2">
          <Calendar className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-slate-900">推薦季節：</span>
            <span>{destination.recommendedSeason}</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CloudSun className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-slate-900">氣候叮嚀：</span>
            <span>{destination.climateTip}</span>
          </div>
        </div>
      </div>

      {/* Content Navigation Tabs (Interactive Buttons) */}
      <div className="px-6 pt-4 border-b border-slate-200/80 flex items-center gap-2">
        <button
          onClick={() => setActiveTab('attractions')}
          className={`flex items-center gap-2 pb-3 px-2 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'attractions'
              ? 'border-teal-600 text-teal-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>精選必訪景點 ({destination.attractions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('delicacies')}
          className={`flex items-center gap-2 pb-3 px-2 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'delicacies'
              ? 'border-teal-600 text-teal-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Utensils className="w-4 h-4" />
          <span>在地必吃美食 ({destination.delicacies.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('transport')}
          className={`flex items-center gap-2 pb-3 px-2 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'transport'
              ? 'border-teal-600 text-teal-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bus className="w-4 h-4" />
          <span>交通與行程叮嚀</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-6 flex-1 overflow-y-auto max-h-[520px]">
        {/* Attractions Tab */}
        {activeTab === 'attractions' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500">
              {destination.description}
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {destination.attractions.map((attraction, idx) => {
                const inBucket = isAttractionInBucket(attraction.name);
                return (
                  <div
                    key={attraction.id}
                    className="p-4 rounded-xl border border-slate-200/90 hover:border-teal-400 bg-white transition-all shadow-2xs hover:shadow-xs group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                          <span className="font-medium text-teal-700">{attraction.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{attraction.addressOrArea}</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {attraction.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Google Maps link */}
                        <button
                          onClick={() => openGoogleMaps(attraction.name)}
                          className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                          title="在 Google 地圖中查看路線"
                          aria-label={`在 Google 地圖查看 ${attraction.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>

                        {/* Add to bucket list */}
                        <button
                          onClick={() =>
                            onToggleBucketItem({
                              destinationId: destination.id,
                              destinationName: destination.name,
                              title: `${attraction.name}（${destination.name}）`,
                              type: 'attraction',
                              category: attraction.category
                            })
                          }
                          className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                            inBucket
                              ? 'bg-teal-50 text-teal-700'
                              : 'text-slate-400 hover:text-teal-600 hover:bg-slate-100'
                          }`}
                          title={inBucket ? '已在願望清單中' : '加入願望清單'}
                          aria-label={inBucket ? '已在願望清單中' : '加入願望清單'}
                        >
                          {inBucket ? (
                            <BookmarkCheck className="w-4 h-4 text-teal-600" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                      {attraction.description}
                    </p>

                    <div className="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-700 flex items-start gap-2">
                      <span className="font-semibold text-teal-700 shrink-0">特色亮點：</span>
                      <span>{attraction.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Delicacies Tab */}
        {activeTab === 'delicacies' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">老饕認證必吃口袋名單</h3>
              <span className="text-xs text-slate-500">走訪不可錯過的味覺記憶</span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {destination.delicacies.map((delicacy, idx) => {
                const inBucket = bucketList.some(
                  item => item.destinationId === destination.id && item.title.includes(delicacy.name)
                );

                return (
                  <div
                    key={delicacy.name}
                    className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-amber-300 transition-all shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-amber-600" />
                        {delicacy.name}
                      </h4>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openGoogleMaps(delicacy.name)}
                          className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                          title="在 Google 地圖搜尋此美食"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            onToggleBucketItem({
                              destinationId: destination.id,
                              destinationName: destination.name,
                              title: `品嚐 ${destination.name} ${delicacy.name}`,
                              type: 'custom',
                              category: '美食清單'
                            })
                          }
                          className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                            inBucket
                              ? 'bg-amber-50 text-amber-700'
                              : 'text-slate-400 hover:text-amber-600 hover:bg-slate-100'
                          }`}
                          title={inBucket ? '已加入美食清單' : '加入願望清單'}
                        >
                          {inBucket ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-600" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-2.5">
                      {delicacy.description}
                    </p>

                    {/* Tags without pill slop: subtle text with separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      {delicacy.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span className="text-amber-700">{tag}</span>
                          {tIdx < delicacy.tags.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Transport & Tips Tab */}
        {activeTab === 'transport' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-teal-600" />
                交通接駁與自駕指引
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.transportTips}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                建議出遊天數配置
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                推薦以【{destination.durationText}】進行探索。若時間充裕，建議搭配周邊特色鄉鎮（如鄰近山林、老街或海港）串聯成深度度假行程。
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/60">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CloudSun className="w-4 h-4 text-amber-600" />
                四季天氣與衣著建議
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.climateTip} 出發前請留意中央氣象署最新天氣預報，備妥隨身水壺與防曬用品。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Quick Action Bar */}
      <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="text-slate-500">
          心動了嗎？點擊願望清單或直接啟程
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => openGoogleMaps(destination.name)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300 font-medium transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Google 地圖搜尋
          </button>
          <button
            onClick={onOpenRandomModal}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors shadow-2xs"
          >
            換一個命運地點
          </button>
        </div>
      </div>
    </div>
  );
};
