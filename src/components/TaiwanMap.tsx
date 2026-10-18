import React, { useState } from 'react';
import { Destination, RegionType } from '../types/travel';
import { Compass, ZoomIn, ZoomOut, RotateCcw, MapPin, Sparkles } from 'lucide-react';

interface TaiwanMapProps {
  destinations: Destination[];
  selectedDestination: Destination | null;
  onSelectDestination: (dest: Destination) => void;
  activeRegion: RegionType;
  highlightedId?: string | null;
}

export const TaiwanMap: React.FC<TaiwanMapProps> = ({
  destinations,
  selectedDestination,
  onSelectDestination,
  activeRegion,
  highlightedId
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(0.85, prev + delta), 1.6));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className="relative w-full h-[580px] lg:h-[660px] bg-gradient-to-b from-sky-50/70 via-slate-50 to-teal-50/40 rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between p-4">
      {/* Top Map Header Controls */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600/10 text-teal-700 flex items-center justify-center font-medium">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">台灣探索地圖</h2>
            <p className="text-xs text-slate-500">點擊地圖標記或自訂地區探索</p>
          </div>
        </div>

        {/* Map Zoom Controls */}
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm p-1 rounded-lg border border-slate-200/80 shadow-xs">
          <button
            onClick={() => handleZoom(0.15)}
            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
            title="放大地圖"
            aria-label="放大地圖"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom(-0.15)}
            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
            title="縮小地圖"
            aria-label="縮小地圖"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
            title="重設大小"
            aria-label="重設大小"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
        <div
          className="transition-transform duration-300 ease-out origin-center select-none"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            viewBox="0 0 540 680"
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-auto drop-shadow-md"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Land Gradients */}
              <linearGradient id="mainIslandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="45%" stopColor="#ccfbf1" />
                <stop offset="100%" stopColor="#dcfce7" />
              </linearGradient>

              <linearGradient id="mountainRidge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#0f766e" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.08" />
              </linearGradient>

              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Sea Grid & Water Accent Lines */}
            <g opacity="0.4" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3,6">
              <line x1="40" y1="120" x2="500" y2="120" />
              <line x1="40" y1="280" x2="500" y2="280" />
              <line x1="40" y1="460" x2="500" y2="460" />
              <line x1="160" y1="40" x2="160" y2="640" />
              <line x1="360" y1="40" x2="360" y2="640" />
            </g>

            {/* Marine Typography */}
            <text x="35" y="440" fill="#94a3b8" fontSize="11" fontWeight="500" letterSpacing="3">
              台灣海峽 TAIWAN STRAIT
            </text>
            <text x="415" y="380" fill="#94a3b8" fontSize="11" fontWeight="500" letterSpacing="3">
              太平洋 PACIFIC OCEAN
            </text>
            <text x="320" y="55" fill="#94a3b8" fontSize="10" fontWeight="500" letterSpacing="2">
              東海 EAST CHINA SEA
            </text>
            <text x="180" y="650" fill="#94a3b8" fontSize="10" fontWeight="500" letterSpacing="2">
              巴士海峽 LUZON STRAIT
            </text>

            {/* TAIWAN MAIN ISLAND VECTOR */}
            {/* Realistic stylized path of Taiwan island */}
            <path
              d="M 390 85
                 C 405 90, 428 92, 432 105
                 C 436 122, 430 148, 420 178
                 C 410 205, 400 240, 396 280
                 C 390 325, 375 375, 345 425
                 C 320 465, 290 500, 265 535
                 C 245 560, 230 585, 218 615
                 C 210 622, 198 620, 192 608
                 C 185 595, 175 560, 170 520
                 C 165 470, 155 430, 160 380
                 C 165 350, 175 320, 190 290
                 C 205 260, 225 230, 248 190
                 C 270 160, 305 135, 335 115
                 C 360 100, 378 82, 390 85 Z"
              fill="url(#mainIslandGrad)"
              stroke="#0d9488"
              strokeWidth="2.2"
              className="transition-all duration-300"
            />

            {/* Central Mountain Range Ridge (中央山脈脊樑) */}
            <path
              d="M 380 150
                 C 370 190, 360 230, 350 270
                 C 338 315, 320 365, 300 415
                 C 280 460, 255 510, 230 565"
              fill="none"
              stroke="#0f766e"
              strokeWidth="14"
              strokeLinecap="round"
              strokeOpacity="0.18"
            />
            <path
              d="M 380 150
                 C 370 190, 360 230, 350 270
                 C 338 315, 320 365, 300 415
                 C 280 460, 255 510, 230 565"
              fill="none"
              stroke="#0f766e"
              strokeWidth="4"
              strokeDasharray="4,8"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />

            {/* Outlying Islands */}
            {/* Turtle Island (龜山島) */}
            <g className="cursor-pointer">
              <ellipse cx="445" cy="160" rx="9" ry="5" fill="#14b8a6" stroke="#0f766e" strokeWidth="1.2" />
              <text x="445" y="152" fill="#0f766e" fontSize="9" fontWeight="600" textAnchor="middle">龜山島</text>
            </g>

            {/* Penghu Archipelago (澎湖群島) */}
            <g className="cursor-pointer" onClick={() => {
              const p = destinations.find(d => d.id === 'penghu');
              if (p) onSelectDestination(p);
            }}>
              <ellipse cx="75" cy="335" rx="14" ry="18" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              <ellipse cx="70" cy="320" rx="7" ry="10" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.2" />
              <ellipse cx="85" cy="348" rx="8" ry="9" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.2" />
              <circle cx="62" cy="350" r="4" fill="#38bdf8" />
              <circle cx="92" cy="322" r="3" fill="#38bdf8" />
            </g>

            {/* Kinmen (金門) */}
            <g className="cursor-pointer" onClick={() => {
              const k = destinations.find(d => d.id === 'kinmen');
              if (k) onSelectDestination(k);
            }}>
              <path
                d="M 45 160 C 55 158, 62 165, 58 172 C 50 175, 42 168, 45 160 Z"
                fill="#fde68a"
                stroke="#d97706"
                strokeWidth="1.5"
              />
              <circle cx="38" cy="168" r="4" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
            </g>

            {/* Matsu (連江縣馬祖) */}
            <g className="cursor-pointer" onClick={() => {
              const m = destinations.find(d => d.id === 'matsu');
              if (m) onSelectDestination(m);
            }}>
              <circle cx="92" cy="55" r="7" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.4" />
              <circle cx="104" cy="48" r="5" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.2" />
            </g>

            {/* Green Island & Orchid Island (綠島、蘭嶼) */}
            <g>
              <ellipse cx="338" cy="485" rx="6" ry="7" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.2" />
              <text x="352" y="488" fill="#0f766e" fontSize="9" fontWeight="500">綠島</text>
              <ellipse cx="318" cy="565" rx="8" ry="10" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.2" />
              <text x="334" y="568" fill="#0f766e" fontSize="9" fontWeight="500">蘭嶼</text>
            </g>

            {/* INTERACTIVE CITY PINS */}
            {destinations.map(dest => {
              const isSelected = selectedDestination?.id === dest.id;
              const isHovered = hoveredDest?.id === dest.id;
              const isHighlighted = highlightedId === dest.id;
              const isRegionMatch = activeRegion === 'all' || dest.region === activeRegion;

              const pinOpacity = isRegionMatch ? 1 : 0.35;
              const scale = isSelected || isHighlighted ? 1.25 : isHovered ? 1.15 : 1;

              return (
                <g
                  key={dest.id}
                  transform={`translate(${dest.mapCoords.x}, ${dest.mapCoords.y})`}
                  className="cursor-pointer group"
                  opacity={pinOpacity}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDestination(dest);
                  }}
                  onMouseEnter={() => setHoveredDest(dest)}
                  onMouseLeave={() => setHoveredDest(null)}
                >
                  {/* Active Selected Pulse Rings */}
                  {(isSelected || isHighlighted) && (
                    <g>
                      <circle r="18" fill={dest.accentColor} opacity="0.25">
                        <animate
                          attributeName="r"
                          values="12;24;12"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.35;0.05;0.35"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle r="10" fill="none" stroke={dest.accentColor} strokeWidth="1.5" opacity="0.6" />
                    </g>
                  )}

                  {/* Marker Pin Base */}
                  <g transform={`scale(${scale})`}>
                    {/* Shadow */}
                    <ellipse cx="0" cy="5" rx="5" ry="2.5" fill="#0f172a" opacity="0.2" />

                    {/* Pin Outer Capsule */}
                    <circle
                      cx="0"
                      cy="0"
                      r="6.5"
                      fill={isSelected || isHighlighted ? '#ffffff' : dest.accentColor}
                      stroke={isSelected || isHighlighted ? dest.accentColor : '#ffffff'}
                      strokeWidth="2.2"
                      className="transition-colors duration-200"
                    />

                    {/* Pin Center Core */}
                    <circle
                      cx="0"
                      cy="0"
                      r="2.5"
                      fill={isSelected || isHighlighted ? dest.accentColor : '#ffffff'}
                    />
                  </g>

                  {/* City Label Badge */}
                  <g
                    transform={`translate(${
                      dest.id === 'yilan' || dest.id === 'hualien' || dest.id === 'keelung' || dest.id === 'new-taipei'
                        ? 12
                        : dest.id === 'penghu' || dest.id === 'kinmen'
                        ? -38
                        : dest.id === 'tainan' || dest.id === 'kaohsiung' || dest.id === 'changhua' || dest.id === 'yunlin'
                        ? -36
                        : 10
                    }, ${dest.id === 'taipei' ? -10 : 3})`}
                  >
                    <rect
                      x="-3"
                      y="-9"
                      width={dest.name.length * 13 + 6}
                      height="17"
                      rx="4"
                      fill={isSelected || isHighlighted ? '#0f172a' : '#ffffff'}
                      stroke={isSelected || isHighlighted ? '#0f172a' : '#e2e8f0'}
                      strokeWidth="1"
                      className="shadow-xs transition-colors duration-200"
                    />
                    <text
                      x="0"
                      y="3.5"
                      fontSize="10"
                      fontWeight={isSelected || isHighlighted ? '700' : '600'}
                      fill={isSelected || isHighlighted ? '#ffffff' : '#1e293b'}
                      letterSpacing="0.5"
                    >
                      {dest.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating Quick Tooltip on Hover */}
        {hoveredDest && hoveredDest.id !== selectedDestination?.id && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-700 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-semibold text-xs tracking-wide text-teal-300">
                {hoveredDest.name} · {hoveredDest.englishName}
              </span>
              <span className="text-[10px] text-slate-300">
                {hoveredDest.durationText}
              </span>
            </div>
            <p className="text-xs text-slate-200 line-clamp-1">{hoveredDest.tagline}</p>
          </div>
        )}
      </div>

      {/* Bottom Map Legend */}
      <div className="relative z-10 pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
            都會探訪
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
            山海自然
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
            歷史古道
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>全台共有 {destinations.length} 座精彩城市供探索</span>
        </div>
      </div>
    </div>
  );
};
