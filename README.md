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

## Try the skill locally

Package the repository as a skills-only plugin or point a local plugin marketplace at this directory. Then attach a full-page website screenshot and ask:

> Turn this into a design system for my build.

If the build is not already known, StyleGraft asks what you are building, what it is called and who it serves. In Codex, it inspects the repository before asking questions.

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
