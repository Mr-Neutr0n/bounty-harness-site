# BountyHarness Site - Design Direction

Updated 2026-08-27 after reviewing the deployed site and aurva.ai. This is a direction for a serious open-source security operations tool, not a startup landing-page template.

## Position

BountyHarness is an execution and evidence system for authorized AI-assisted security research. The homepage must explain the control loop: initialize scope, select registered workflows, gate execution, record traces, verify impact, and package evidence.

The audience is a researcher or engineer who can read a shell command and a directory tree. Show the system they are getting. Do not sell an abstract agent or claim outcomes the repository cannot prove.

## Reference Review

Aurva's quality comes from information design, not from a dark background. Its homepage uses a quiet editorial shell, a real runtime map as the hero artifact, thin rules, figure labels, sparse color, and dense but legible inventories. Each section answers a concrete operational question.

The previous BountyHarness page failed this test. It used a canonical badge, oversized slogan, two-button hero, pill chips, rounded icon cards, decorative orbs, and a terminal mockup in place of the architecture. Its copy also leaned on generic phrases such as "Your agent doesn't guess" and "One harness. Every bug class." Those patterns are removed.

## Homepage Structure

1. A compact masthead with a typeset BountyHarness wordmark and a small source/install action.
2. A factual hero: category statement, precise description, install command, and four verified repository facts.
3. A large system figure showing `target + scope` through `recon`, `domain-model`, `planner`, skill execution, `impact-verifier`, and reporting. Show the tool registry, safety tiers, circuit breaker, traces, and local evidence as connected control surfaces.
4. A ledger of what the harness controls: context, workflow selection, governance, and evidence.
5. A real command/output specimen that supports the diagram without becoming the hero.
6. A safety and evidence section with explicit tier behavior and artifact paths.
7. A restrained install and source footer.

## Visual System

- Near-black field, warm white text, cool gray secondary text, and one muted green accent used for active state and selected flow only.
- No gradients, blurred orbs, glow effects, decorative glyphs, emoji, or stock imagery.
- Thin 1px rules carry structure. Corners are square or lightly eased at 2px to 6px. No pill-shaped UI except where a real status needs it.
- Use a sans display face for hierarchy and a mono face for labels, commands, paths, counts, and evidence. The wordmark is typeset in HTML/CSS, with a compact `BH` mark and differentiated weights for `Bounty` and `Harness`.
- Use figure numbers, section codes, field labels, and small units to create information density. Whitespace separates systems instead of rounded containers.
- The architecture diagram is the primary visual. HTML/CSS nodes and rules must remain readable and collapse into a vertical flow on mobile.

## Content Rules

- Use facts from the repository: 46 skill packages, 99 registered tools, four safety tiers, MIT license, local-only evidence, and macOS/Linux support.
- Use the real commands `bb-init`, `bb-validate`, `bb-run`, `bb-hunt`, `bb-tools`, and reporting workflows.
- State authorization and scope requirements plainly. Never imply that automation creates valid findings without impact verification.
- Avoid AI-startup language, empty superlatives, slogans, customer claims, performance claims, and repetitive "one X / every Y" constructions.
- Never use em dashes in site copy.

## Responsive Rules

- Desktop uses a wide editorial frame with an asymmetric text and system-map hero.
- Mobile keeps the same order and hierarchy, turns the map into a readable vertical sequence, and allows only inner code specimens to scroll horizontally.
- The document itself must never create horizontal overflow.
- Every interactive control needs visible focus, a meaningful label, and a usable touch target.
