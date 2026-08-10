# StyleGraft

**Turn website inspiration into a design system made for your product.**

StyleGraft is an open-source, skills-only plugin for ChatGPT and Codex. Upload a full-page website screenshot, describe what you are building—or let Codex inspect the repository—and receive an original, product-specific `DESIGN.md`.

Website: [stylegraft.peerfix.dev](https://stylegraft.peerfix.dev/)

[npm package](https://www.npmjs.com/package/@blindspotlab/stylegraft) · [GitHub repository](https://github.com/mojeebdev/StyleGraft) · [MIT Licence](./LICENSE)

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

### npm / Codex

Install StyleGraft for your user account:

```bash
npx @blindspotlab/stylegraft install
```

Or add it only to the current repository so the team can share it:

```bash
npx @blindspotlab/stylegraft install --project
```

Verify it with `npx @blindspotlab/stylegraft doctor` (add `--project` for a repository install), then open Codex in the product repository and invoke `$stylegraft`.

### ChatGPT

The npm installer configures Codex; it cannot install a skill into the hosted ChatGPT interface. To use StyleGraft in ChatGPT:

1. Download or clone this repository.
2. Open **Plugins → Skills** in ChatGPT Work and import the `skills/stylegraft` folder if custom skill installation is enabled for your workspace.
3. Start a new chat, attach a full-page website screenshot and invoke `@stylegraft`:

> @stylegraft Turn this reference into an original design system for Arcapush, a discovery platform for serious solo builders.

### Codex

1. In your terminal, run `npx @blindspotlab/stylegraft install` for your user account, or add `--project` to keep the skill inside the current repository.
2. Open the product repository in Codex so it can inspect the real product context.
3. Attach the full-page reference and invoke `$stylegraft`:

> $stylegraft Inspect this repository, use the attached full-page reference, and create DESIGN.md before implementation.

ChatGPT uses `@` mentions and Codex uses `$` mentions for explicitly selecting a skill. ChatGPT installation and sharing controls depend on workspace settings. StyleGraft will move to one-click ChatGPT installation after directory approval.

## The origin

In early August 2026, I stepped away from X for the weekend and returned to learning about design systems. I had last studied them seriously around April or May, but this time something clicked: a design system is not merely colours, type sizes and reusable components. It is the reasoning beneath an interface—its rhythm, hierarchy, composition, imagery, constraints and character.

The next day, I encountered Claude's design workflow and saw the gap clearly. Claude users had a way to carry visual intent into a build, but I could not find an equivalent made for ChatGPT and Codex: something that could accept a complete website reference, understand the product being built, and give an AI coding agent an original system it could follow without producing generic AI design.

That was the blind spot. I built StyleGraft to fill it.

The first product I tested it on was StyleGraft itself. The aim was never to copy another website or sample a handful of tokens. It was to understand why a reference worked, translate those principles through the context of a different product, and preserve taste when the coding agent took over.

## About the founder

[Mojeeb Titilayo](https://mojeeb.xyz/) is a Product Engineer and Strategist, and the founder of [BlindspotLab](https://blindspotlab.xyz/), an independent product studio focused on finding overlooked problems and turning them into useful, thoughtfully built products. He created StyleGraft after recognising that ChatGPT and Codex builders needed a practical bridge between visual inspiration and implementation-ready design direction.

StyleGraft is a BlindspotLab product, founded and created by Mojeeb Titilayo.

## How to use it

You can also describe the task naturally after installation:

> Turn this into a design system for my build.

If the build is not already known, StyleGraft asks what you are building, what it is called and who it serves. In Codex, it inspects the repository before asking questions.

## Open Graph

The website includes a 1200×630 social preview at `assets/brand/stylegraft-social.png`, configured for Open Graph and X/Twitter cards in `index.html`. Update the absolute image URL and canonical URL if the production domain changes. Social networks cache previews, so use their sharing debugger or a versioned image URL after replacing the artwork.

## Publishing to npm

The `Publish to npm` GitHub Actions workflow tests the package, inspects the tarball, rejects duplicate versions and publishes with npm provenance.

For the first release:

1. Create an npm granular access token allowed to publish `@blindspotlab/stylegraft`.
2. Add it to the GitHub repository as an Actions secret named `NPM_TOKEN`.
3. Open **Actions → Publish to npm → Run workflow** and choose the `latest` tag.

For later releases, bump the version in `package.json` before running the workflow. After the first package exists on npm, configure npm Trusted Publishing for this repository and `.github/workflows/publish-npm.yml`, then remove the `NPM_TOKEN` secret.

## Principles

- Adapt visual principles to product context.
- Preserve intent, not protected expression.
- Capture composition, not only design tokens.
- Mark observation, inference and uncertainty.
- Give coding agents explicit anti-slop constraints.

## Status

Available publicly on [npm](https://www.npmjs.com/package/@blindspotlab/stylegraft). The skill and output schema are being evaluated across diverse website references before ChatGPT directory submission.

## Credits

A [BlindspotLab](https://blindspotlab.xyz/) product founded and created by [Mojeeb Titilayo](https://mojeeb.xyz/).

## License

MIT
