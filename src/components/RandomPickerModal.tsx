import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Destination, RegionType, TravelStyle, TripDuration } from '../types/travel';
import { soundEffects } from '../utils/audio';
import {
  Sparkles,
  Dice5,
  X,
  Volume2,
  VolumeX,
  MapPin,
  Compass,
  ArrowRight,
  RotateCcw,
  Utensils,
  CheckCircle2
} from 'lucide-react';

interface RandomPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinations: Destination[];
  onDestinationChosen: (dest: Destination) => void;
  onAddToBucketList: (item: {
    destinationId: string;
    destinationName: string;
    title: string;
    type: 'city' | 'attraction' | 'custom';
    category?: string;
  }) => void;
}

export const RandomPickerModal: React.FC<RandomPickerModalProps> = ({
  isOpen,
  onClose,
  destinations,
  onDestinationChosen,
  onAddToBucketList
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('all');
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>('all');
  const [selectedDuration, setSelectedDuration] = useState<TripDuration>('all');
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [currentDisplayDest, setCurrentDisplayDest] = useState<Destination | null>(null);
  const [winnerDest, setWinnerDest] = useState<Destination | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(soundEffects.getMuted());
  const [hasAddedToBucket, setHasAddedToBucket] = useState<boolean>(false);

  const rollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter pool based on selected options
  const candidatePool = destinations.filter(d => {
    if (selectedRegion !== 'all' && d.region !== selectedRegion) return false;
    if (selectedStyle !== 'all' && !d.styles.includes(selectedStyle)) return false;
    if (selectedDuration !== 'all' && d.durationCategory !== selectedDuration) return false;
    return true;
  });

  const effectivePool = candidatePool.length > 0 ? candidatePool : destinations;

  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    soundEffects.setMuted(nextState);
  };

  const startRolling = () => {
    if (isRolling || effectivePool.length === 0) return;

    setIsRolling(true);
    setWinnerDest(null);
    setHasAddedToBucket(false);

    let count = 0;
    const maxSteps = 24 + Math.floor(Math.random() * 8); // 24-32 rapid iterations
    let currentInterval = 50; // starts very fast

    // Pick a final winner ahead of time
    const finalWinner = effectivePool[Math.floor(Math.random() * effectivePool.length)];

    const step = () => {
      count++;
      // Random display during roll
      const randomCandidate = effectivePool[Math.floor(Math.random() * effectivePool.length)];
      setCurrentDisplayDest(randomCandidate);
      soundEffects.playTick(500 + (count % 8) * 40);

      if (count >= maxSteps) {
        // Land on winner
        setCurrentDisplayDest(finalWinner);
        setWinnerDest(finalWinner);
        setIsRolling(false);
        soundEffects.playVictory();

        // Fire full-screen celebratory confetti
        triggerConfettiCelebration();
      } else {
        // Slow down toward the end for dramatic tension
        if (count > maxSteps - 10) {
          currentInterval += 35;
        } else if (count > maxSteps - 5) {
          currentInterval += 70;
        }
        rollTimerRef.current = setTimeout(step, currentInterval);
      }
    };

    rollTimerRef.current = setTimeout(step, currentInterval);
  };

  const triggerConfettiCelebration = () => {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#0d9488', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6']
    });

    // Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#0d9488', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6']
    });

    // Starburst center
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#10b981', '#38bdf8', '#facc15', '#fb7185']
      });
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (rollTimerRef.current) clearTimeout(rollTimerRef.current);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-teal-50 to-sky-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
              <Dice5 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">命運出遊隨機抽籤</h3>
              <p className="text-xs text-slate-500">解決選擇障礙，這週末出發！</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleMute}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title={isMuted ? '開啟音效' : '靜音'}
              aria-label={isMuted ? '開啟音效' : '靜音'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              disabled={isRolling}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50"
              aria-label="關閉"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Optional Filter Controls */}
          {!winnerDest && (
            <div className="space-y-3.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="text-xs font-semibold text-slate-700">抽籤條件自訂（可選）：</div>

              {/* Region Filter */}
              <div>
                <label className="block text-[11px] text-slate-500 mb-1 font-medium">偏好地區：</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: '全台灣' },
                    { id: 'north', label: '北部' },
                    { id: 'central', label: '中部' },
                    { id: 'south', label: '南部' },
                    { id: 'east', label: '東部' },
                    { id: 'islands', label: '外島離島' }
                  ].map(reg => (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedRegion(reg.id as RegionType)}
                      disabled={isRolling}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                        selectedRegion === reg.id
                          ? 'bg-teal-700 text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {reg.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Style Filter */}
              <div>
                <label className="block text-[11px] text-slate-500 mb-1 font-medium">出遊風格：</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: '不拘' },
                    { id: 'food', label: '美食巡禮' },
                    { id: 'nature', label: '自然山海' },
                    { id: 'urban', label: '城市漫步' },
                    { id: 'culture', label: '歷史古蹟' },
                    { id: 'island', label: '海島慢活' }
                  ].map(style => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id as TravelStyle)}
                      disabled={isRolling}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                        selectedStyle === style.id
                          ? 'bg-sky-600 text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-slate-500">
                目前符合條件的城市目的地共 <span className="font-semibold text-slate-900">{effectivePool.length}</span> 個
              </div>
            </div>
          )}

          {/* Random Slot Display Container */}
          <div className="relative min-h-[220px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-6 text-white text-center flex flex-col items-center justify-center border border-slate-700 shadow-inner overflow-hidden">
            {/* Background subtle animated glow */}
            <div className="absolute inset-0 bg-radial from-teal-500/20 via-transparent to-transparent pointer-events-none" />

            {isRolling && currentDisplayDest ? (
              <div className="space-y-2 animate-pulse">
                <div className="text-xs uppercase tracking-widest text-teal-400 font-medium">
                  DESTINY ROLLING · 命運抽取中
                </div>
                <div className="text-4xl font-extrabold tracking-tight text-white scale-110 transition-transform">
                  {currentDisplayDest.name}
                </div>
                <div className="text-sm text-slate-300">
                  {currentDisplayDest.tagline}
                </div>
                <div className="text-xs text-teal-300">
                  {currentDisplayDest.regionName} · {currentDisplayDest.durationText}
                </div>
              </div>
            ) : winnerDest ? (
              <div className="space-y-3 z-10 animate-in zoom-in-90 duration-300">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  命運選中！這週末就出發
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {winnerDest.name}
                </div>
                <div className="text-xs text-teal-300 font-medium">
                  {winnerDest.regionName} · {winnerDest.englishName} · {winnerDest.durationText}
                </div>
                <p className="text-sm text-slate-200 max-w-sm font-medium">
                  {winnerDest.tagline}
                </p>

                {/* Quick Winner Highlights */}
                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/80 text-left text-xs space-y-1.5 mt-2">
                  <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>必去景點：</span>
                    <span className="text-white font-normal truncate">
                      {winnerDest.attractions.slice(0, 2).map(a => a.name).join('、')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>特色美食：</span>
                    <span className="text-white font-normal truncate">
                      {winnerDest.delicacies.slice(0, 2).map(d => d.name).join('、')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-white/10 text-teal-300 flex items-center justify-center mx-auto mb-2">
                  <Compass className="w-6 h-6 animate-spin-slow" />
                </div>
                <h4 className="text-xl font-bold text-white">放假不知道去哪玩？</h4>
                <p className="text-xs text-slate-300 max-w-xs">
                  點擊下方按鈕，讓命運替你隨機決定下一個難忘的旅行目的地！
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Controls */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          {winnerDest ? (
            <>
              <button
                onClick={startRolling}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:text-slate-900 font-medium text-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                再抽一次
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAddToBucketList({
                      destinationId: winnerDest.id,
                      destinationName: winnerDest.name,
                      title: `命運選中：暢遊 ${winnerDest.name}`,
                      type: 'city',
                      category: '命運抽籤'
                    });
                    setHasAddedToBucket(true);
                  }}
                  disabled={hasAddedToBucket}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all ${
                    hasAddedToBucket
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {hasAddedToBucket ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      已收進願望清單
                    </>
                  ) : (
                    '加入願望清單'
                  )}
                </button>

                <button
                  onClick={() => {
                    onDestinationChosen(winnerDest);
                    onClose();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
                >
                  <span>立即查看詳情</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                disabled={isRolling}
                className="px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                取消
              </button>

              <button
                onClick={startRolling}
                disabled={isRolling}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Dice5 className="w-4 h-4 animate-bounce" />
                <span>{isRolling ? '命運抽取中...' : '開始命運隨機抽籤！'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
