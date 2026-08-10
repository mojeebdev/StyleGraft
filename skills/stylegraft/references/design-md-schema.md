# StyleGraft DESIGN.md schema

Use this order. Omit a section only when it truly does not apply.

## Front matter

```yaml
---
name: "[Product] Design System"
product: "[Product name]"
source: "Adapted from user-supplied visual reference"
status: "draft"
confidence: "high | medium | low"
generated_by: "StyleGraft"
---
```

## Required sections

1. **Product Context** — purpose, audience, primary action, trust and emotional target.
2. **Translation Summary** — a table with reference principle, preserve/adapt/exclude decision, and product-specific expression.
3. **Design Intent** — the compact north star and three to six operating principles.
4. **Colour System** — primitive and semantic roles, contrast cautions and usage ratios. Distinguish observed from selected values.
5. **Typography** — roles, characteristics, scale, line height, measure and fallback guidance. Do not invent exact source fonts.
6. **Layout and Rhythm** — containers, grids, spacing, density, section cadence, alignment and controlled grid breaks.
7. **Composition Grammar** — repeatable page-level rules, image/text relationships, overlap, asymmetry, transitions and variation.
8. **Imagery and Art Direction** — subject, crop, treatment, texture, illustration and prohibited source assets.
9. **Shape and Material Language** — borders, radii, shadow, texture, decorative motif and intentional imperfection.
10. **Components** — navigation, buttons, fields, cards only when needed, content modules and states.
11. **Responsive Behaviour** — desktop, tablet and mobile transformations; define what stacks, crops, scrolls, simplifies or disappears.
12. **Motion and Interaction** — purposeful states and reduced-motion behaviour. Mark as inferred when motion was not visible.
13. **Accessibility** — contrast, focus, semantic structure, type minimums, targets and image alternatives.
14. **Anti-Slop Constraints** — at least six specific prohibitions tied to this product and reference.
15. **Do / Don't** — concise paired examples.
16. **Implementation Guidance** — CSS token suggestions, component boundaries and agent instructions without assuming a framework unless known.
17. **Uncertain Decisions** — evidence gaps and questions that need human confirmation.

## Writing rules

- Use design vocabulary, then translate it into implementation consequences.
- Prefer actionable rules over adjectives such as "modern," "clean," or "premium."
- State the reason behind unusual decisions.
- Never include source branding or copyrighted content in the target specification.
- Ensure the file is useful when read without the original screenshot.
