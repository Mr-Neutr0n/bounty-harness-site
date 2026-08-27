# BountyHarness Site - Design System

Locked 2026-08-26. One aesthetic, enforced everywhere. If a change contradicts this file, the file wins.

## Brand
Operator equipment, not SaaS marketing. Dark, precise, evidence-disciplined. Audience lives in terminals and editors at 2am. The site must feel like it was built by someone who runs bounty loops, not someone who prompted "dark hacker site with green neon."

## Color (3 hues max, 60/30/10)

| Token | Hex | Use | Forbidden |
|-------|-----|-----|-----------|
| `--void` | `#070B18` | Page background | Never pure `#000` |
| `--bg` | `#0A1220` | Section wash |  |
| `--surface` | `#0F1D32` | Cards, nav |  |
| `--surface-2` | `#162845` | Hover, table header |  |
| `--border` | `#1C3352` | Hairline 1px only | Never `border-slate-200` flat gray |
| `--ink` | `#E8EEF6` | Headings, primary text | Never pure `#FFF` |
| `--text-2` | `#8A9AB8` | Body, lede |  |
| `--accent` | `#2DD4BF` | Active nav, one stat per viewport, copy success | Max once per viewport. Never `from-blue-600 to-indigo-700` |
| `--amber` | `#F59E0B` | Warn callouts only |  |
| `--red` | `#F43F5E` | Danger callouts only |  |

Neutrals derived from void hue via HSL. No hue 200-290 as primary. No pure `#fff`/`#000`. No Tailwind blue-* defaults. Flat color, no gradients.

## Typography

| Role | Family | Size / Leading | Weight | Tracking |
|------|--------|----------------|--------|----------|
| Display H1 | Geist Sans, system-ui | clamp 2rem-3rem / 1.05 | 800 | -0.04em |
| H2 section | Geist Sans | 1.75rem / 1.1 | 700 | -0.03em |
| Body | Geist Sans | 15px / 1.65 | 400 | 0 |
| Code / stats | JetBrains Mono | 13px / 1.6 | 400 | 0 |
| Eyebrow | JetBrains Mono caps | 0.68rem | 600 | 0.1em |

One display (Geist Sans) + one mono (JetBrains Mono). No third face. `text-wrap: balance` on H1, `pretty` on body. Body max 60ch.

## Spacing & Layout

- 8pt grid. Section padding: hero 56, features 64, CTA 48. Never uniform `py-20` everywhere.
- Card radius 10px, button 7px, code block 8px, pill 20px. Not `rounded-2xl` everywhere. Two radii that disagree.
- Bento: 4-col grid where used, hero cell 2x width. Otherwise 5fr/3fr asymmetric proof layout.
- Elevation: surface steps (#070B18 → #0F1D32 → #162845) + 1px hairline. No `shadow-md` pile-up.

## Components

- **Nav**: sticky, blur(20px), hairline border. Active page: subtle surface-2 bg, not glow.
- **Buttons**: Primary is ink-on-void (white on dark), not accent fill. Ghost is transparent + border. No gradient, no scale-105.
- **Cards**: borderless first (whitespace + surface lift). 1px hairline only if needed. No colored left strip.
- **Terminal**: Deep code-bg `#060A14`, chrome bar with traffic lights, mono 0.78rem. Copy button is surface-2, not accent.
- **Motion**: color 150ms, transform 400ms, separate. Every transition honors `prefers-reduced-motion`.

## Voice

Specific, measured, operator-grade. No "effortlessly," "seamlessly," "unlock," "AI-powered," "supercharge." Headlines must fail the cover-logo test (swap logo, still makes sense? Rewrite). One sentence carries pitch: category + audience + outcome.

## Anti-Patterns (lint before ship)

- [ ] No hue 200-290 primary
- [ ] No pure #fff/#000
- [ ] No grid-cols-3 equal feature row (use asymmetric)
- [ ] No badge+H1+subhead+2 buttons canonical hero without variation
- [ ] No rounded-2xl on every card
- [ ] No bg-gradient-to-r from-blue-600
- [ ] No 3-dot terminal mockup without real content (ours shows real bb-hunt output)
- [ ] No Inter as sole face
- [ ] No em dashes in copy
- [ ] No green favicon (void bg, accent glyph)
