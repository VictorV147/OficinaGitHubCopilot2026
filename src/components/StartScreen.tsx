interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 text-slate-100 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(2,132,199,0.14),_transparent_20%),#05030d]">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#ec4899] to-[#22d3ee] mb-2 drop-shadow-[0_0_24px_rgba(124,58,237,0.75)]">
          Bingo Mixer
        </h1>
        <p className="text-lg text-cyan-200/80 mb-8">Find your people in a neon world.</p>

        <div className="bg-[#0c0720]/95 rounded-3xl p-6 shadow-[0_30px_60px_-30px_rgba(124,58,237,0.8)] border border-[#7c3aed]/20 mb-8">
          <h2 className="font-semibold text-cyan-100 mb-3">How to play</h2>
          <ul className="text-left text-slate-300 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#22d3ee] text-white font-semibold py-4 px-8 text-lg shadow-[0_16px_40px_-24px_rgba(124,58,237,0.85)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
