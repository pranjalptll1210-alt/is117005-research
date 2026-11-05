# IS117005 Research — AI Career Atlas

A VitePress research website exploring growing AI careers, emerging job titles, responsibilities, skills, and student career pathways.

**Website:** [AI Career Atlas — GitHub Pages](https://pranjalptll1210-alt.github.io/is117005-research/)

**Repository:** [pranjalptll1210-alt/is117005-research](https://github.com/pranjalptll1210-alt/is117005-research)

## Research contents

- Ten career profiles covering data science, ML engineering, AI agents, MLOps, evaluation, security, governance, product, data engineering, and research.
- Official U.S. growth projections, clearly separated from global employer expectations and emerging specialties.
- Career comparison, learning pathways, portfolio ideas, and a linked source register.

Research reviewed November 5, 2026. Numerical evidence comes from BLS; additional sources include WEF, NIST, Google Cloud, and Anthropic. See [sources](docs/sources.md).

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run docs:dev
```

## Build and preview

```sh
npm run docs:build
npm run docs:preview
```

## Publish to GitHub Pages

Create a public repository named `is117005-research`, push this project's contents to `main`, and select **Settings → Pages → Source → GitHub Actions**. The included workflow builds and deploys the site on pushes to `main`.

The VitePress base path is `/is117005-research/`. If the repository name changes, update `docs/.vitepress/config.mts` and the README site link together.

## Project structure

- `docs/` — research pages
- `docs/.vitepress/` — configuration and theme
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Research integrity

Occupational forecasts do not guarantee jobs and should not be assigned to emerging titles without evidence. Career summaries and project ideas are educational synthesis; they are not live job postings.
