# ECOR 2027 website — GitHub Pages upload package

This is a static, bilingual website package prepared from the ECOR 2027 site (version 16).

## Files

- `index.html` — Japanese homepage
- `en/index.html` — English homepage
- `styles.css`, `script.js` — shared styles and mobile navigation
- `assets/` — site logo and background images

## Upload to GitHub Pages

1. Create a GitHub repository for the website.
2. Upload the **contents of this folder** to the repository root. `index.html` should be at the root, with `en/` and `assets/` beside it.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and `/(root)`, then save.
5. GitHub Pages will show the site URL in the same settings page after deployment completes.

This package excludes Git history, Sites credentials, and the private Sites project configuration. It contains no server-side features; it is intended for static hosting.
