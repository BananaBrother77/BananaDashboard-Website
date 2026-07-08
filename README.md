# BananaDashboard Website

Landing page and download portal for [BananaDashboard](https://github.com/BananaBrother77/BananaDashboard), a cross-platform desktop system dashboard.

## Deployment

Deployed via Cloudflare Pages. Each push to `main` deploys automatically.

## Development

No build step. Open `index.html` in a browser or use a local static server:

```bash
python -m http.server 8000
```

## Structure

- `index.html` — main landing page
- `style.css` — all styles
- `meow.js` — download logic, Linux install modal, platform detection
- `assets/js/reveal.js` — scroll reveal and nav highlight animations
- `404.html` — custom error page
- `assets/banana-icon.svg` — app logo
