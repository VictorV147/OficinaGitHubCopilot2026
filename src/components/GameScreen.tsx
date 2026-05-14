import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-[#05030d] text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-[#09070f]/90 border-b border-[#7c3aed]/20 shadow-[0_0_40px_-20px_rgba(124,58,237,0.6)]">
        <button
          onClick={onReset}
          className="text-cyan-200 text-sm px-3 py-1.5 rounded-full border border-cyan-400/20 hover:border-cyan-300/50 transition-all"
        >
          ← Back
        </button>
        <h1 className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#22d3ee] tracking-tight">
          Bingo Mixer
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-cyan-200/70 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-4 rounded-3xl border border-[#facc15]/40 bg-[#facc15]/10 text-[#fde68a] text-center py-2 font-semibold text-sm shadow-[0_0_20px_rgba(250,204,21,0.2)]">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
