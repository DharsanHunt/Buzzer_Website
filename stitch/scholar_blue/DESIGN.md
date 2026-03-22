# Design System: The Academic Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Academic Curator."** 

We are moving away from the "gamified" quiz aesthetic of loud colors and heavy borders. Instead, we are building a high-end, editorial experience that feels like a digital concierge for knowledge. The system achieves a "custom" feel by leaning into **Atmospheric Depth**—using soft, layered surfaces and generous negative space to guide the user’s focus. By favoring tonal shifts over structural lines, we create an environment that feels expensive, trustworthy, and calm, even during high-stakes competitive moments.

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, authoritative `primary` (#004493) supported by a sophisticated range of cool grays and architectural whites.

### The "No-Line" Rule
To maintain a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a quiz question container (`surface-container-low`) should sit directly on the `background` (#f8f9fa), using color contrast rather than a stroke to define its edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create "nested" depth:
*   **Base Layer:** `surface` (#f8f9fa) for the main application canvas.
*   **Secondary Layer:** `surface-container-low` (#f3f4f5) for sidebar navigation or inactive content areas.
*   **Interactive Layer:** `surface-container-lowest` (#ffffff) for primary cards and quiz question containers to make them "pop" against the darker base.

### Signature Textures & Glass
*   **The Glass Rule:** For floating navigation or modal overlays, use a background blur (20px+) paired with `surface` at 80% opacity. This prevents the UI from feeling "pasted on" and allows the brand's blues to bleed through.
*   **Tonal Gradients:** For high-impact areas like the Hero section or the "Buzzer," use a subtle linear gradient (Top-Left to Bottom-Right) transitioning from `primary` (#004493) to `primary_container` (#005bc0). This adds "soul" and dimension that flat hex codes cannot achieve.

## 3. Typography
We utilize a dual-sans-serif approach to balance authority with modern readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern weight. Use `display-lg` (3.5rem) for score announcements and `headline-md` (1.75rem) for quiz questions. The tight tracking and bold weights convey a sense of editorial importance.
*   **Body & Labels (Inter):** The industry standard for legibility. Use `body-lg` (1rem) for answer choices and `label-md` (0.75rem) for metadata (e.g., "Question 4 of 20").
*   **Hierarchy Note:** High-contrast sizing is encouraged. A large `display-sm` heading paired with a small, wide-tracked `label-sm` in `on_surface_variant` (#424654) creates a sophisticated, "designed" look.

## 4. Elevation & Depth
We eschew traditional material shadows in favor of **Ambient Tonalism.**

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` section. The slight shift from #ffffff to #f3f4f5 provides all the separation necessary.
*   **Ambient Shadows:** If an element must float (like a "Correct Answer" toast), use an ultra-diffused shadow: `box-shadow: 0 12px 40px rgba(0, 68, 147, 0.06)`. Note the use of a blue tint (`primary`) in the shadow rather than pure black to keep the light theme feeling "airy."
*   **The Ghost Border:** If accessibility requires a stroke, use `outline-variant` (#c3c6d6) at 20% opacity. It should be felt, not seen.

## 5. Components

### The Buzzer (Signature Component)
The buzzer is the heart of the experience. It must feel "prominent but professional."
*   **Style:** Large, circular (`rounded-full`), using the `primary` to `primary_container` gradient.
*   **Elevation:** Use an ambient shadow with a 12% opacity of the `primary` color.
*   **Interaction:** On press, scale the button down to 0.95 and shift the background to `primary_fixed_dim`.

### Quiz Cards
*   **Structure:** No borders. Use `surface-container-lowest` with a `lg` (1rem) corner radius.
*   **Spacing:** Use `spacing-8` (2rem) internal padding to give the text "room to breathe."
*   **States:** Hovering over an answer choice should transition the background color to `secondary_container` (#bed9ff) smoothly (300ms ease-in-out).

### Input Fields
*   **Style:** Minimalist. Underline-only or subtle `surface-container-high` backgrounds. 
*   **Focus:** Transition the background to `white` and add a `ghost-border` of `primary` at 40% opacity.

### Progress Indicators
*   **Style:** Thick, `rounded-full` bars. Use `surface-variant` (#e1e3e4) for the track and `primary` (#004493) for the fill. Avoid "stripes" or "glows"; keep it architectural.

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place the question on the left and a large, decorative "Question Number" (using `display-lg` at 5% opacity) overlapping in the background.
*   **Embrace White Space:** Use `spacing-16` or `spacing-20` between major sections to signal a change in context.
*   **Use Tonal Shifts:** Rely on the difference between `surface` and `surface-container` to group related items.

### Don’t:
*   **Don't use 100% Black:** Always use `on_surface` (#191c1d) for text to maintain the soft, premium feel.
*   **Don't use Dividers:** Avoid horizontal rules (`<hr>`). Use vertical space (`spacing-10`) or a background color change to separate content.
*   **Don't use Sharp Corners:** Nothing in this system should be `none` or `sm` roundedness unless it's a tiny tag. Stick to `md` (0.75rem) and `lg` (1rem) for a friendly, trustworthy "hand-feel."