# Lausanne Font Integration

The ASET College website is configured to use the **Lausanne** (and **TWK Lausanne**) font superfamily across the entire website and the monumental hero banner.

### How it works:
1. **Local System Font:** If you have **Lausanne** or **TWK Lausanne** installed on your operating system (Windows, macOS, or Linux), the website will detect and render it immediately via CSS `local(...)`.
2. **Web Font Files (Self-Hosted):** If you have webfont files (`.woff2`, `.woff`, `.otf`, or `.ttf`), simply place them in this `public/fonts/` folder with any of the following standard filenames:
   - `Lausanne-400.woff2` (or `Lausanne-Regular.woff2`, `Lausanne.woff2`, `TWKLausanne-400.woff2`)
   - `Lausanne-300.woff2` (or `Lausanne-Light.woff2`, `TWKLausanne-300.woff2`)
   - `Lausanne-500.woff2` (or `Lausanne-Medium.woff2`, `TWKLausanne-500.woff2`)
   - `Lausanne-600.woff2` (or `Lausanne-SemiBold.woff2`, `TWKLausanne-600.woff2`)
   - `Lausanne-700.woff2` (or `Lausanne-Bold.woff2`, `TWKLausanne-700.woff2`)
   - `Lausanne-800.woff2` (or `Lausanne-ExtraBold.woff2`, `TWKLausanne-800.woff2`)
   - `Lausanne-900.woff2` (or `Lausanne-Black.woff2`, `TWKLausanne-900.woff2`)
3. **High-Fidelity Neo-Grotesque Fallback:** If neither a local install nor webfont file is present, the website automatically falls back to **Plus Jakarta Sans** / **Inter** / system sans-serif with matching optical x-height and clean proportions so the site always looks balanced and responsive.
