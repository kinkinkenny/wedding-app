import React from 'react';

interface PlayingCardProps {
  rank: 'K' | 'Q';
  suit: 'heart' | 'diamond' | 'club' | 'spade';
  name: string;
}

const PlayingCard: React.FC<PlayingCardProps> = ({ rank, name }) => {
  return (
    <div className="relative w-48 h-72 md:w-56 md:h-80 bg-white rounded-2xl shadow-2xl border-4 border-rose-50 overflow-hidden group hover:scale-105 transition-transform duration-500">
      <div className="absolute top-4 left-4 flex flex-col items-center leading-none text-rose-600">
        <span className="text-2xl font-serif-luxury font-bold">{rank}</span>
        <span className="text-xl">♥</span>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col items-center leading-none text-rose-600 rotate-180">
        <span className="text-2xl font-serif-luxury font-bold">{rank}</span>
        <span className="text-xl">♥</span>
      </div>
      <div className="absolute inset-8 border border-rose-100 rounded-lg flex flex-col items-center justify-center bg-[#fffcfc]">
        <div className="text-rose-600 mb-4 opacity-80">
            {rank === 'K' ? (
                <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                    <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                    <circle cx="12" cy="11" r="2" fill="white" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                    <path d="M12,1L9,5L12,9L15,5L12,1M12,23L15,19L12,15L9,19L12,23M5,12L1,9L5,12L1,15L5,12M19,12L23,15L19,12L23,9L19,12Z" />
                    <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
            )}
        </div>
        <div className="text-center">
            <p className="text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-1">Hearts Edition</p>
            <p className="font-serif-luxury font-bold text-slate-800 text-lg">{name}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PlayingCard;
