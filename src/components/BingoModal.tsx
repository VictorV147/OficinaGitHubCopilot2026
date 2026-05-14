interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#0b0817]/95 rounded-[2rem] p-6 max-w-xs w-full text-center border border-[#7c3aed]/20 shadow-[0_0_40px_rgba(124,58,237,0.35)] animate-[bounce_0.5s_ease-out]">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-black text-[#facc15] mb-2 drop-shadow-[0_0_18px_rgba(250,204,21,0.45)]">BINGO!</h2>
        <p className="text-slate-300 mb-6">You completed a line in neon style.</p>
        
        <button
          onClick={onDismiss}
          className="w-full rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#22d3ee] text-white font-semibold py-3 px-6 shadow-[0_18px_40px_-24px_rgba(124,58,237,0.9)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
