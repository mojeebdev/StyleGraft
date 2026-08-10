# StyleGraft

**Turn website inspiration into a design system made for your product.**

StyleGraft is an open-source, skills-only plugin for ChatGPT and Codex. Upload a full-page website screenshot, describe what you are building—or let Codex inspect the repository—and receive an original, product-specific `DESIGN.md`.

Website: [stylegraft.peerfix.dev](https://stylegraft.peerfix.dev/)

It translates composition, hierarchy, rhythm, colour logic, typography character, imagery and intentional imperfections. It does not copy source branding, content or proprietary assets.

## Repository structure

```text
.codex-plugin/plugin.json   Plugin manifest
skills/stylegraft/          ChatGPT and Codex workflow
evals/prompts.md            Positive and negative activation tests
index.html                  Product website
privacy.html                Privacy notice
terms.html                  Terms
```

## Configure StyleGraft

StyleGraft is skills-only. It does not require an API key, external account or hosted backend.

### ChatGPT

1. Download or clone this repository.
2. Import `skills/stylegraft` through Skills if your workspace supports custom skill installation.
3. Attach a full-page website screenshot and invoke `@stylegraft`:

> @stylegraft Turn this reference into an original design system for Arcapush, a discovery platform for serious solo builders.

### Codex

1. Clone the repository and install the included `skills/stylegraft` skill.
2. Open the product repository so Codex can inspect its context.
3. Attach the reference and invoke `$stylegraft`:

> $stylegraft Inspect this repository, use the attached full-page reference, and create DESIGN.md before implementation.

ChatGPT uses `@` mentions and Codex uses `$` mentions for explicitly selecting a skill. Installation and sharing controls may depend on workspace settings. StyleGraft will move to one-click installation after plugin-directory approval.

## How to use it

You can also describe the task naturally after installation:

> Turn this into a design system for my build.

If the build is not already known, StyleGraft asks what you are building, what it is called and who it serves. In Codex, it inspects the repository before asking questions.

## Open Graph

The website includes a 1200×630 social preview at `assets/brand/stylegraft-social.png`, configured for Open Graph and X/Twitter cards in `index.html`. Update the absolute image URL and canonical URL if the production domain changes. Social networks cache previews, so use their sharing debugger or a versioned image URL after replacing the artwork.

## Principles

- Adapt visual principles to product context.
- Preserve intent, not protected expression.
- Capture composition, not only design tokens.
- Mark observation, inference and uncertainty.
- Give coding agents explicit anti-slop constraints.

## Status

Early public build. The skill and output schema are being evaluated across diverse website references before plugin-directory submission.

## Credits

A [BlindspotLab](https://blindspotlab.xyz/) product by [Mojeeb Titilayo](https://mojeeb.xyz/).

## License

MIT
