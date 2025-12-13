# MarunGPT Design System & Visual Identity (v1.0)

**Philosophy:** MarunGPT is not just a chatbot; it is a **computational layer**. The visual identity should feel raw, calculated, and high-velocity. We reject "soft" SaaS trends (gradients, rounded corners, drop shadows) in favor of **structure, pixel-perfect precision, and high contrast.**

---

## 1. Color Palette
Our colors are electric and unmuted. They stand out starkly against monochrome backgrounds.

### Primary Backgrounds
* **Void Black:** `#050505` (Dark Mode Base)
* **Paper White:** `#F3F4F6` (Light Mode Base - slightly gray, never pure #FFF)
* **Grid Gray:** `#E5E5E5` (Borders, Dividers)

### Accent Colors (The "Inference" Palette)
Derived from the provided reference assets.

* **Aether Cyan:** `#40E0D0` 
    * *Usage:* Active states, data flow, "Thinking" indicators.
* **Volt Yellow:** `#CCFF00` 
    * *Usage:* Text highlighting (marker style), primary CTAs, alerts.
* **Deep Indigo:** `#4B0082` 
    * *Usage:* Secondary buttons, hero shapes, deep depth layers.
* **Hyper Blue:** `#3B82F6`
    * *Usage:* Links, technical diagrams, vectors.

---

## 2. Typography
Typography is the primary interface. It must be bold and legible.

### Headlines: **Grotesque Sans**
* **Font Family:** `Inter Tight` (Google Fonts) or `Space Grotesk`.
* **Weight:** 600 (SemiBold) to 800 (ExtraBold).
* **Tracking:** Tight (`-0.02em` or `-0.04em`).
* **Case:** Sentence case for readability, UPPERCASE for labels.

### Data & Code: **Monospace**
* **Font Family:** `JetBrains Mono` or `Fira Code`.
* **Weight:** 400 (Regular).
* **Usage:** Used for "Latency" numbers, code snippets, RAG citations, and the search input text.

---

## 3. Graphic Language (The "Vibe")
This is the core differentiator. We use **"Digital Organic"** shapes.

### The "Pixel-Blob" Aesthetic
As seen in reference images, vectors should not be smooth. They should mimic low-resolution digital artifacts.
* **Hard Edges:** No anti-aliasing on decorative shapes.
* **Dithering:** Use dot-matrix or stippling patterns instead of opacity gradients.
* **Pixelation:** Shapes should look like they were upscaled from a 64px canvas.

### Prompting Style for Assets (Midjourney / FLUX)
When generating new assets, use these keywords:
> *"1-bit pixel art, monochromatic dithering, anti-aliasing off, geometric organic shapes, retro computer interface, neon palette, bitmap aesthetic."*

---

## 4. UI Components

### Buttons
* **Shape:** Sharp corners or minimal radius (`0px` or `4px`). No pill shapes.
* **Style:** * *Primary:* Solid Black background (`#000`) with White text. Hover: Translate Y `-2px` (hard snap).
    * *Secondary:* 1px Solid Border (`#000`). Transparent background.

### Cards & Containers
* **Borders:** Thin, technical borders (`1px solid #E5E5E5`).
* **Shadows:** **None.** We use borders and layout to define hierarchy.
* **Hover:** On hover, the border color snaps to **Hyper Blue** or **Volt Yellow**.

### The "Marun" Chat Bubble
* **User:** Gray background (`#F3F4F6`), sharp edges.
* **AI (Marun):** Transparent background, Monospace font, blinking cursor.

---

## 5. Layout & Spacing
* **The Grid:** The layout should feel like a technical document or a newspaper. Visible grid lines are encouraged.
* **Density:** High. Information is dense but structured.
* **Whitespace:** Used intentionally to frame the "Inference" areas.

---

## 6. CSS / Tailwind Config Snippet
Add this to your `tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      colors: {
        'void-black': '#050505',
        'paper-white': '#F3F4F6',
        'aether-cyan': '#40E0D0',
        'volt-yellow': '#CCFF00',
        'deep-indigo': '#4B0082',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
      }
    },
  },
}