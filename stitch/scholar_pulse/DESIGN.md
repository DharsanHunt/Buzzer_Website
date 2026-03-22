# Design System Document: The Academic Precision Framework

## 1. Overview & Creative North Star: "The Distinguished Scholar"
This design system moves away from the generic "tech startup" aesthetic to embrace a "High-End Editorial" experience. The Creative North Star is **The Distinguished Scholar**. 

The goal is to evoke the feeling of a premium, physical academic journal or a high-stakes competition stage. We achieve this by breaking the rigid, boxed-in layouts of standard quiz apps. Instead of grids and borders, we use **intentional asymmetry**, **heroic typography scales**, and **layered tonal depth**. The interface should feel authoritative yet breathable—prioritizing the "moment of the buzz" with cinematic focus.

## 2. Colors & Surface Architecture
The palette is rooted in a deep, institutional blue, supported by a sophisticated range of "cool" neutrals that provide atmospheric depth.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` sidebar sitting against a `background` main stage provides a sophisticated, "borderless" division.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, similar to stacked sheets of high-grade vellum or frosted glass.
- **Base:** `background` (#faf8ff)
- **Primary Sectioning:** `surface-container-low` (#f3f3fd)
- **Interactive Cards:** `surface-container-lowest` (#ffffff)
- **Elevated Modals/Popovers:** `surface-container-high` (#e8e7f2)

### The "Glass & Gradient" Rule
To elevate the "Buzzer" experience from a button to a "Moment," use **Glassmorphism**. Floating elements (like a "Waiting for Players" toast) should use semi-transparent surface colors with a `backdrop-blur` of 12px-20px. 

### Signature Textures
Avoid flat `primary` fills for large CTAs. Use a subtle linear gradient (Top-Left to Bottom-Right) transitioning from `primary` (#003aaa) to `primary_container` (#2352cc). This creates a "light-catching" effect that feels expensive and intentional.

## 3. Typography: Editorial Authority
We utilize a pairing of **Barlow Condensed** and **Barlow** to create a rhythmic hierarchy that feels both modern and historically grounded.

*   **Display & Headlines (Barlow Condensed):** Used for question text and player scores. The condensed nature allows for high-impact "Display-LG" (3.5rem) headers that feel like news headlines.
*   **Body & Labels (Barlow):** Used for instructional text and metadata. The standard width ensures maximum legibility during high-speed interactions.

**Hierarchy Note:** Always lead with high contrast. A `display-lg` question should sit near a `label-md` category tag to create an editorial, asymmetrical balance.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often messy. We use **Tonal Layering** and **Ambient Light** to define space.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural "lift" that mimics physical paper without the need for a shadow.
*   **Ambient Shadows:** If a floating element (like the Buzzer itself) requires a shadow, it must be ultra-diffused. 
    *   *Spec:* `0px 20px 40px rgba(26, 27, 35, 0.06)`. The shadow color is a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use the `outline-variant` (#c4c5d6) at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use `surface_bright` at 80% opacity with a blur to create "frosted" layers that allow the deep blue primary brand colors to bleed through from the background.

## 5. Components

### The Buzzer (Primary Action)
- **Style:** Large, circular (`rounded-full`). 
- **Fill:** Gradient from `primary` to `primary_container`.
- **States:** 
    - **Active:** `surface_tint` with a white `on-primary` icon. 
    - **Disabled/Locked:** `surface_variant` with `outline` text.
- **Interaction:** Upon press, trigger a subtle "ripple" that expands using the `secondary_container` color.

### Quiz Cards
- **Construction:** Use `surface-container-lowest`. 
- **Corners:** Fixed at `12px` (`DEFAULT` scale).
- **Rules:** No dividers. Use `spacing-6` (1.5rem) to separate the question from the answer choices.
- **Selection State:** Use a 2px `primary` "Ghost Border" (at 20% opacity) and shift the background to `primary_fixed`.

### Input Fields
- **Style:** Underlined or subtle "Surface-on-Surface" fill. 
- **Active State:** The label (using `label-sm`) floats above, while the underline transforms into a 2px `primary` bar.
- **Error:** Use `error` text and a `error_container` subtle background glow.

### Player Chips
- **Style:** Pill-shaped (`rounded-full`) using `secondary_container`.
- **Context:** Place the player's avatar on the left, with their name in `label-md`.

### Tooltips & Toasts
- **Style:** Glassmorphic. Semi-transparent `inverse_surface` with `backdrop-blur`. 
- **Text:** `inverse_on_surface` (Barlow, 0.75rem).

## 6. Do's and Don'ts

### Do:
- **Do** use whitespace as a structural element. If you think you need a line, try adding `spacing-8` instead.
- **Do** use `tertiary` (#7a2b00) sparingly for "Warning" or "Last 10 Seconds" states to create high-stakes urgency.
- **Do** lean into the "Condensed" headers for data-heavy views (Leaderboards) to maximize horizontal space.

### Don't:
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#1a1b23) for a softer, more professional reading experience.
- **Don't** use standard "Drop Shadows." Only use the Ambient Shadows defined in Section 4.
- **Don't** use 100% opacity backgrounds for modals. Use the "Glass & Gradient" rule to maintain a sense of environmental depth.
- **Don't** mix rounded corner values. Stick strictly to `12px` for cards and `9999px` for interactive pills/buttons.