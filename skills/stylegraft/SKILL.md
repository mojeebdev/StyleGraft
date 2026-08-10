---
name: stylegraft
description: Turn one or more full-page website screenshots or visual website references into an original, product-specific DESIGN.md for the user's build. Use when someone asks to adapt, translate, graft, or derive a design system or visual direction from a website screenshot for a new or existing product. Also use in Codex when a repository should be visually redirected from attached references. Do not use for literal website cloning, isolated image editing, logo copying, or generic design advice without a supplied visual reference.
---

# StyleGraft

Translate the reference's design logic into an original system appropriate for the user's product. Preserve principles, not protected expression.

## Required inputs

1. At least one readable website screenshot or visual website reference.
2. Enough product context to understand what is being built.

When operating in Codex, inspect the repository first: read the README, product documentation, existing pages, styles, tokens, framework, and relevant components. Preserve working functionality. Ask only for product information that the repository does not reveal.

When operating in ChatGPT without a codebase, ask one concise question if needed:

> What are you building, what is it called, and who is it for?

Do not ask when the conversation already contains the answer.

## Workflow

### 1. Read the reference

Analyse the full page rather than sampling only the hero. Record:

- visual personality and intended feeling;
- hierarchy, density, rhythm, grid and intentional grid breaks;
- colour roles and relationships, not just sampled hex values;
- typography roles and characteristics; never claim an exact font without evidence;
- imagery, cropping, overlays, texture and illustration direction;
- shapes, borders, radii, shadows, materials and decorative motifs;
- section transitions, repetition and variation;
- interaction or motion only when it is visible or supplied separately;
- likely desktop-to-mobile transformations.

Separate direct observations from inferences and mark confidence as high, medium, or low.

### 2. Read the product

Determine the product's name, purpose, audience, primary action, content types, trust requirement, device priorities and existing technical constraints.

### 3. Translate

For every meaningful reference principle, decide whether to:

- **preserve** it because it serves the new product;
- **adapt** it to fit the new audience or trust level;
- **exclude** it because it belongs to the source brand or harms usability.

Never reproduce source logos, copy, illustrations, photographs, mascots, branded icons, proprietary components or distinctive page compositions. Do not describe the result as a clone, replica or pixel-perfect reproduction.

### 4. Generate the artifact

Read [references/design-md-schema.md](references/design-md-schema.md) before writing the output. Create a complete `DESIGN.md` as a downloadable artifact in ChatGPT or at the repository root in Codex.

The system must be specific enough that a coding agent can make decisions without falling back to generic SaaS conventions. Include exact values only when supported or intentionally selected for the new product. Label inferred values.

### 5. Hand off

Return:

1. the completed `DESIGN.md`;
2. a three-to-five sentence summary of what was preserved, adapted and excluded;
3. any decisions requiring human confirmation.

In Codex, do not implement the redesign unless the user also asks for implementation.

## Quality bar

- The output must name and serve the user's product, not document the source website.
- Composition rules must be more detailed than tokens.
- Include mobile behaviour, accessibility and content-density guidance.
- Include an explicit anti-slop section derived from the reference and product.
- Avoid arbitrary gradients, glows, floating blobs, oversized empty heroes, repetitive rounded cards and generic dashboards unless the reference and product genuinely require them.
- Do not invent inaccessible colour combinations; flag unverified contrast.
- When references conflict, explain the chosen synthesis instead of averaging everything.
