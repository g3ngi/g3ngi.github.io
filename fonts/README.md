# Fonts

## Atlas Grotesk (licensed — you must supply the files)

Atlas Grotesk is a commercial typeface from [Commercial Type](https://commercialtype.com/catalog/atlas).
It is **not** available on Google Fonts or any free CDN, so it cannot be bundled here.

If you own a licence, drop the `.woff2` files into this folder with these names:

```
fonts/AtlasGrotesk-Light.woff2       (300)
fonts/AtlasGrotesk-Regular.woff2     (400)
fonts/AtlasGrotesk-Medium.woff2      (500)
fonts/AtlasGrotesk-Bold.woff2        (700)
```

The `@font-face` block in `index.html` already references exactly these paths,
with `font-display: swap`. Nothing else needs changing — add the files, reload,
and the site uses Atlas Grotesk automatically.

If the files are absent the browser silently falls through to the next family
in the stack (currently **Schibsted Grotesk**), so the site never breaks.

## Fallback stack

```
"Atlas Grotesk", "Schibsted Grotesk", ui-sans-serif, system-ui, sans-serif
```

Schibsted Grotesk is a free neo-grotesque with similar proportions and a
comparable x-height, chosen because it is the closest open substitute.

## Mono

JetBrains Mono, loaded from Google Fonts. Used only for small labels,
code and metadata — never for body text.
