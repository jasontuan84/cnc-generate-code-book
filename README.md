# From Vector to Machine Code

> **Author:** Jason Tuan · [tuanquynh.com](https://tuanquynh.com)
> **Version:** English `v1.0.0` · Vietnamese `v1.0.2`

A technical book explaining the **decisions, logic, and algorithms** behind turning a 2-D vector drawing into the motion commands a laser, cutter, engraver, or pen plotter can execute — independent of any specific machine model or programming language.

## Contents

13 chapters: the Chain model → architecture & pipeline → geometry foundations → fill algorithms & auto selector → outline & contour → single-stroke (centerline) text → pattern & shade fill → toolpath ordering → machine-code emission → raster engraving → curve fidelity & continuity → performance → inputs, units & edge cases. Roughly 68 illustrations drawn in pure SVG.

## Structure

```
html/           HTML edition (read directly in a browser)
  en/           English edition — open html/en/index.html
  vi/           Vietnamese edition — open html/vi/index.html
  CHANGELOG.md  Version history
export/         Exported PDF & EPUB (EN + VI)
```

## Reading

- **HTML:** open `html/en/index.html` or `html/vi/index.html`.
- **PDF / EPUB:** see the `export/` directory.

## Versioning

Follows [Semantic Versioning](https://semver.org). The version is declared in a single place per language in `*/assets/book.js` (`BOOK_VERSION`, `BOOK_UPDATED`) and injected automatically into every page. See [`html/CHANGELOG.md`](html/CHANGELOG.md) for details.

## License

[MIT](LICENSE) © 2026 Jason Tuan
