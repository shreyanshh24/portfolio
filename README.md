# Shreyansh Saroj — Portfolio

A responsive, single-page portfolio built with semantic HTML, CSS and vanilla JavaScript. The visual direction is a warm, modular miniature world with a little F1, sport and builder energy.

## Run locally

Open `index.html` directly, or serve the folder with a local static server such as:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Assets

- `profile.png` is the existing profile image.
- `hero-world.png` is the generated brick-built scene used in the homepage hero.
- The resume PDF was not present when the site was rebuilt. Add the real PDF as `resume.pdf` before enabling the resume links in `index.html`.
- `favicon.svg` is the site mark.

## Deploy

This is a static site and can be deployed directly to Vercel, Netlify or GitHub Pages. There is no build step or dependency installation required. Google Fonts are loaded remotely; the page falls back to local sans-serif fonts if they are unavailable.
