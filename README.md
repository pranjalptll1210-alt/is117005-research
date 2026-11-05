# IS117005 Research — AI Career Atlas

A VitePress research website exploring growing AI careers, emerging job titles, responsibilities, skills, and student career pathways.

**Website:** [AI Career Atlas — GitHub Pages](https://pranjalptll1210-alt.github.io/is117005-research/)

**Repository:** [pranjalptll1210-alt/is117005-research](https://github.com/pranjalptll1210-alt/is117005-research)

## Real NY/NJ job research

[Search the 21 researched job postings](https://pranjalptll1210-alt.github.io/is117005-research/jobs.html) · [Findings](https://pranjalptll1210-alt.github.io/is117005-research/local-findings.html)

Reviewed in Chrome on November 5, 2026: 20 employer descriptions with visible Apply controls, plus one employer-board listing with a secondary description. Covers internships, entry-level, mid-level, senior, and unclassified roles across FDE, security, systems, IT, agent development, operations, governance, and research. Includes six NJ and sixteen NY location matches (one overlaps).

See [methodology and exclusions](docs/job-methodology.md), [title map](docs/title-map.md), and [structured research data](docs/public/jobs.json). This is a dated sample, not an exhaustive or live job feed.

## Lessons from the research

AI careers span deployment, infrastructure, security, governance, and adoption. The sample demonstrates breadth, not title-level growth rates. The [student entry guide](https://pranjalptll1210-alt.github.io/is117005-research/student-routes.html) compares actual eligibility and skills; [review findings and next questions](https://pranjalptll1210-alt.github.io/is117005-research/local-findings.html#what-this-review-changes) explain the evidence limits. Employer title seniority is stored separately from the directory’s research experience group.

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

Occupational forecasts do not guarantee jobs and should not be assigned to emerging titles without evidence. Background career summaries and project ideas are educational synthesis. The separate local directory contains researched employer postings with explicit verification dates and limitations.
