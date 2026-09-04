# sandbox

A scratch space for static web experiments. No build step, no dependencies.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Markup, plus a pre-paint script that applies the saved theme |
| `styles.css` | Styling and the light/dark color tokens |
| `main.js` | Click counter and theme-toggle behavior |

## Theming

Light is the base palette. Dark applies when the OS asks for it, and the toggle
in the header overrides that either way. The choice is saved to `localStorage`
under `sandbox-theme`, so it survives a reload; until you pick one, the page
follows the system setting and updates live if you change it.

Colors are CSS custom properties defined in three places in `styles.css` —
`:root` for light, a `prefers-color-scheme: dark` block for the OS default, and
`:root[data-theme="dark"]` so the toggle wins. Add a new color by defining it in
all three.

## Running it

Open the file directly:

```sh
open index.html
```

Or serve it locally, which you'll want once you start using `fetch` or ES modules:

```sh
npx serve .
```
