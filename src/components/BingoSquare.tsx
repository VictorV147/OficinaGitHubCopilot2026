import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded-2xl transition-all duration-150 select-none min-h-[60px] text-[0.72rem] leading-tight shadow-[inset_0_0_0_1px_rgba(148,163,184,0.1)]';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#312e56] border-[#facc15] text-[#fde68a] shadow-[0_0_18px_rgba(250,204,21,0.35)]'
      : 'bg-[#081c28] border-[#22d3ee] text-[#7dd3fc] shadow-[0_0_15px_rgba(34,211,238,0.28)]'
    : 'bg-[#0c0720] border-[#2e1a4d] text-slate-100 hover:bg-[#120c24] active:bg-[#171127]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm text-[#c4b5fd]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-[#22d3ee] text-xs">✓</span>
      )}
    </button>
  );
}
