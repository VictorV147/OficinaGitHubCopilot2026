---
name: design-guide
description: Use this skill when the user asks for a visual design direction or theme update in the Bingo Mixer app.
---

Use this guide for any frontend design request in this repository.

## Design Intent
- Commit fully to an aesthetic. Choose a distinctive theme and build around it.
- Avoid timid, generic UI. This repo should feel polished and intentionally styled.
- Respect the existing app structure: style the current screens and components rather than adding new pages or features.
- Use Tailwind v4 utilities together with `@theme` tokens in `src/index.css`.

## Visual Principles
- Color & theme: choose a strong base, highlight color, and accent glow. Use CSS variables for palette consistency.
- Backgrounds: layer gradients, atmospheric glows, and subtle texture to create depth.
- Typography: favor expressive headings and readable body text. Avoid ordinary system-only typography if the theme calls for more character.
- Motion: use subtle CSS transitions and reveal animations, especially for buttons, cards, and modal entrances.
- Contrast: keep text legible and interactive controls visible against the chosen background.

## Component Focus
Prioritize styling these files first:
- `src/components/StartScreen.tsx`
- `src/components/GameScreen.tsx`
- `src/components/BingoSquare.tsx`
- `src/components/BingoModal.tsx`
- `src/components/BingoBoard.tsx`

## Implementation Guidance
- Put theme tokens in `src/index.css` via `@theme`.
- Use Tailwind utilities instead of custom config when possible.
- Use border glows, gradients, and shadowed cards for visual hierarchy.
- Keep the game board readable and interactive: the square text must remain easy to scan.
- Avoid overly generic UI patterns like plain gray cards, bland buttons, or default system styling.

## If the theme is specified
- Neon / cyberpunk: dark surfaces, violet/cyan/pink accents, glowing borders, and atmospheric background lighting.
- Retro / arcade: saturated colors, glassy buttons, bold headings, and playful iconography.
- Minimal / refined: restrained spacing, subtle texture, elegant color pops, and clean typography.

## When in doubt
- Choose a design direction that feels immersive and appropriate for a social bingo game.
- Make the UI feel intentional and unique, not simply utilitarian.
