# AI Agent Guide for Bingo Mixer

This repository is a frontend-only React + TypeScript + Tailwind v4 app for an interactive social bingo game.

## What this project is
- A single-page workshop app for `Bingo Mixer`.
- Uses Vite + React + TypeScript + Tailwind CSS v4.
- No backend or API surface.
- Includes workshop docs in `workshop/` for learning exercises.

## Quick commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Key files and folders
- `src/App.tsx` — root app wiring and modal state.
- `src/hooks/useBingoGame.ts` — game state, board generation, and interactions.
- `src/components/` — UI split across `StartScreen`, `GameScreen`, `BingoBoard`, `BingoSquare`, and `BingoModal`.
- `src/utils/bingoLogic.ts` — standalone bingo rules, check logic, and helpers.
- `src/data/questions.ts` — question pool used to generate the bingo board.
- `src/index.css` — Tailwind v4 entry point and CSS tokens via `@theme`.
- `vite.config.ts` — Vite plugin config, including React and Tailwind plugins and base path logic.
- `.devcontainer/devcontainer.json` — development container config and forwarded port 5173.

## Project conventions
- Use `@tailwindcss/vite` rather than a `tailwind.config.js` file.
- Styling should rely on Tailwind v4 with CSS token definitions in `src/index.css`.
- Prefer component decomposition for UI and keep game logic in hooks/util files.
- Maintain the current workshop-friendly structure: start screen, game screen, board, square, and modal.
- Tests are in Vitest and cover bingo rule logic; preserve or extend them when changing game behavior.

## Useful references
- `README.md` — main project overview and commands.
- `workshop/GUIDE.md` — workshop flow and exercise context.
- `.github/instructions/frontend-design.instructions.md` — frontend styling guidance.
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 conventions.

## Agent behavior
- Focus on clean, idiomatic React + TypeScript changes.
- Keep the app lightweight and consistent with the current bingo interaction model.
- Avoid introducing backend concepts or unrelated architecture.
- Prefer small, testable enhancements over broad rewrites.
