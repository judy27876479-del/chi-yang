import React, { useState } from 'react';
import { BucketListItem, Destination } from '../types/travel';
import {
  BookmarkCheck,
  CheckCircle,
  Circle,
  Trash2,
  Plus,
  Share2,
  X,
  MapPin,
  Calendar,
  Sparkles,
  ClipboardCheck,
  Filter
} from 'lucide-react';

interface BucketListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BucketListItem[];
  destinations: Destination[];
  onToggleComplete: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onAddNewCustomItem: (item: {
    destinationId: string;
    destinationName: string;
    title: string;
    note?: string;
  }) => void;
  onSelectDestinationById: (id: string) => void;
}

export const BucketListDrawer: React.FC<BucketListDrawerProps> = ({
  isOpen,
  onClose,
  items,
  destinations,
  onToggleComplete,
  onDeleteItem,
  onAddNewCustomItem,
  onSelectDestinationById
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');
  const [customDestId, setCustomDestId] = useState<string>(destinations[0]?.id || 'taipei');
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const totalCount = items.length;
  const completedCount = items.filter(i => i.isCompleted).length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredItems = items.filter(item => {
    if (filter === 'pending') return !item.isCompleted;
    if (filter === 'completed') return item.isCompleted;
    return true;
  });

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const matchedDest = destinations.find(d => d.id === customDestId);
    onAddNewCustomItem({
      destinationId: customDestId,
      destinationName: matchedDest ? matchedDest.name : '自訂地點',
      title: customTitle.trim(),
      note: customNote.trim() ? customNote.trim() : undefined
    });

    setCustomTitle('');
    setCustomNote('');
    setShowAddForm(false);
  };

  const handleExportText = () => {
    if (items.length === 0) return;
    const lines = [
      '【我的台灣出遊願望清單 & 踩點筆記】',
      `完成進度：${completedCount}/${totalCount} (${completionPercentage}%)`,
      '--------------------------------',
      ...items.map(
        (item, idx) =>
          `${idx + 1}. [${item.isCompleted ? '✓ 已打卡' : '待出發'}] ${item.destinationName} - ${item.title}${
            item.note ? `（筆記：${item.note}）` : ''
          }`
      )
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">出遊願望清單 & 私房筆記</h2>
              <p className="text-xs text-slate-500">已踩點打卡 {completedCount} / {totalCount} 個地點</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="關閉願望清單"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar Strip */}
        <div className="px-5 py-3 bg-white border-b border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-600">台灣踩點成就率</span>
            <span className="text-teal-700 font-bold tabular-nums">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-500 to-sky-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Filters and Add Button */}
        <div className="p-4 border-b border-slate-200/80 bg-white flex items-center justify-between gap-2">
          {/* Segmented Controls for Filter (Interactive buttons) */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部 ({totalCount})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filter === 'pending'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              待出發 ({totalCount - completedCount})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filter === 'completed'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              已踩點 ({completedCount})
            </button>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1 px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-medium transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>新增筆記</span>
          </button>
        </div>

        {/* Add Custom Note Form */}
        {showAddForm && (
          <form
            onSubmit={handleCreateCustom}
            className="p-4 bg-teal-50/60 border-b border-teal-100 space-y-3 animate-in fade-in duration-150"
          >
            <div className="text-xs font-semibold text-teal-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              自訂私房想去的景點或美食備忘
            </div>

            <div>
              <label className="block text-[11px] text-slate-600 mb-1 font-medium">所在縣市：</label>
              <select
                value={customDestId}
                onChange={e => setCustomDestId(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                {destinations.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.regionName})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-slate-600 mb-1 font-medium">名稱（如：阿里山日落秘境、台南隱藏甜點）：</label>
              <input
                type="text"
                value={customTitle}
                onChange={e => setCustomTitle(e.target.value)}
                placeholder="輸入地點或想做的事"
                required
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-600 mb-1 font-medium">私人備忘筆記（可選）：</label>
              <input
                type="text"
                value={customNote}
                onChange={e => setCustomNote(e.target.value)}
                placeholder="例如：朋友推薦要早起排隊、營業時間要注意"
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700"
              >
                儲存筆記
              </button>
            </div>
          </form>
        )}

        {/* Bucket List Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4">
              <BookmarkCheck className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-700 mb-1">
                {filter === 'completed'
                  ? '尚無已打卡的紀錄'
                  : filter === 'pending'
                  ? '所有願望皆已達成！'
                  : '願望清單目前是空的'}
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                瀏覽地圖或城市詳細資訊時，點擊「加入願望清單」，或在此新增你的專屬私房景點！
              </p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 group ${
                  item.isCompleted
                    ? 'bg-slate-50/80 border-slate-200 text-slate-500'
                    : 'bg-white border-slate-200 hover:border-teal-300 shadow-2xs'
                }`}
              >
                {/* Toggle Completion Checkbox */}
                <button
                  onClick={() => onToggleComplete(item.id)}
                  className="mt-0.5 text-slate-400 hover:text-teal-600 transition-colors shrink-0"
                  title={item.isCompleted ? '標記為未完成' : '標記為已踩點'}
                  aria-label={item.isCompleted ? '標記為未完成' : '標記為已踩點'}
                >
                  {item.isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-0.5">
                    <button
                      onClick={() => {
                        onSelectDestinationById(item.destinationId);
                        onClose();
                      }}
                      className="font-semibold text-teal-700 hover:underline inline-flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3" />
                      {item.destinationName}
                    </button>
                    {item.category && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.category}</span>
                      </>
                    )}
                  </div>

                  <h4
                    className={`text-sm font-medium leading-snug break-words ${
                      item.isCompleted ? 'line-through text-slate-400' : 'text-slate-800'
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.note && (
                    <p className="text-xs text-slate-500 mt-1 bg-slate-50 p-1.5 rounded-md border border-slate-100">
                      筆記：{item.note}
                    </p>
                  )}
                </div>

                {/* Delete Item */}
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="opacity-40 group-hover:opacity-100 p-1 text-slate-400 hover:text-rose-600 transition-all shrink-0"
                  title="刪除此項目"
                  aria-label="刪除"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-2">
          <button
            onClick={handleExportText}
            disabled={items.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 bg-white rounded-lg transition-colors disabled:opacity-40"
          >
            {copiedSuccess ? (
              <>
                <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600" />
                已複製清單文字
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                匯出複製行程
              </>
            )}
          </button>

          <span className="text-[11px] text-slate-400">
            自動同步儲存至瀏覽器
          </span>
        </div>
      </div>
    </div>
  );
};
