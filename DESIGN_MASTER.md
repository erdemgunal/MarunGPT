# MarunGPT Master Design Document (v2.0)

## 1. Core Identity & Philosophy
MarunGPT is the "Computational Layer" for Marmara University. It is not a soft, friendly SaaS product; it is a high-velocity, raw, and precise tool.

* **Keywords:** Brutalist Tech, Digital Organic, High Contrast, Raw Data, Pixel-Perfect.
* **Aesthetic:** "Retro-Futurism meets Academic Rigor."
* **Anti-Patterns:** No gradients, no drop shadows, no rounded "pill" buttons, no blur effects.

---

## 2. Logo Design Brief
The logo must function as a stamp of intelligence. It should feel like a hardware component or a piece of executable code.

### Construction Rules
1.  **Geometry:** Use **Hard Edges** combined with **Quarter Circles**.
    * *Reference:* The UI uses strictly 90-degree angles or perfect quarter-circle arcs (border-radius matching height).
2.  **Style:** 1-bit or 2-bit pixel aesthetic. It should look crisp at 16x16px (favicon) and 1000x1000px.
3.  **Composition:** Dense and structural. Avoid "floating" elements; everything should feel anchored to a grid.

### Visual Motifs to Explore
* **The "M" Monogram:** Constructed from pixel blocks or circuit traces.
* **The "Inference" Spark:** A pixelated spark or "glitch" shape (referencing the Volt Yellow/Aether Cyan accents).
* **The Quarter-Circle Block:** A square with one rounded corner (referencing the footer's `CurvedTopEdge`).

---

## 3. Color Palette (The "Inference" System)

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas** | Void Black | `#050505` | Primary background. Deep, infinite. |
| **Surface** | Paper White | `#F3F4F6` | Light mode base, text on dark. |
| **Structure** | Grid Gray | `#E5E5E5` | Borders, grid lines (0.5px stroke). |
| **Action** | **Aether Cyan** | `#40E0D0` | Data flow, primary accents, active states. |
| **Highlight** | **Volt Yellow** | `#CCFF00` | Warnings, markers, high-value text. |
| **Depth** | Deep Indigo | `#4B0082` | Dithering patterns, background layers. |
| **Link** | Hyper Blue | `#3B82F6` | Technical vectors, hyperlinks. |

---

## 4. Typography
* **Headings / Display:** `Space Grotesk` or `Inter Tight`.
    * *Traits:* Tight tracking, high weight (600-800), brutalist.
* **Code / Data:** `JetBrains Mono`.
    * *Traits:* Monospaced, technical, legible terminal text.

---

## 5. Graphic Elements & Decorations

### The "Airy" Circuitry
We use decorations that mimic hardware but with plenty of whitespace (negative space).
* **Dithering:** Used sparingly (e.g., simplified 4x4 pixel grids) to show depth without using opacity gradients.
* **Data Lines:** Single, thin lines (`1px` or `2px`) that terminate in pixel blocks. No complex tangles.
* **Terminal Dots:** The "Traffic Light" dots (Red/Yellow/Green) are used as a recurring UI motif for containers.

### The "Curved Edge"
A signature layout element used in the Footer.
* **Rule:** A rectangle where the `border-radius` equals the `height` (e.g., `h-[60px] rounded-t-[60px]`).
* **Effect:** Creates a perfect mechanical arc, contrasting with the sharp pixels elsewhere.

---

## 6. Prompt Engineering Context (For AI Generation)
When generating assets or logos, use this prompt structure:

> *"Vector logo for a brutalist AI tool. Monochromatic black and white with neon cyan and yellow accents. Geometric shapes, hard edges, pixel art influence but vector quality. No gradients. Minimalist circuit board aesthetics. Grid-based layout. Sharp, technical, precise."*