# sandbox

A scratch space for static web experiments. No build step, no dependencies.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Markup and page structure |
| `styles.css` | Styling, with light and dark theme variables |
| `main.js` | Behavior |

## Running it

Open the file directly:

```sh
open index.html
```

Or serve it locally, which you'll want once you start using `fetch` or ES modules:

```sh
npx serve .
```

## Publishing

The repo is private. To put it on GitHub Pages, make it public, then enable
Pages under **Settings → Pages** with the source set to the `main` branch.
