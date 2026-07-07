# Portfolio Website

**Status:** Draft
**Author:** Lou-Junel T. Velasco  **Date:** 2026-07-07

## Summary

Create a public dashboard-style portfolio website for Lou-Junel T. Velasco in a separate GitHub repository named `portfolio` under the `loujunel` GitHub account. The site will be published as a free GitHub Pages project site at `https://loujunel.github.io/portfolio/`. The implementation should use Vite with React for a modern, component-based interface while remaining fully static and easy to deploy. The content should position Lou-Junel as a versatile professional across executive support, human resources compliance, operations, finance administration, technical support, customer relationship management/data workflows, documentation, stakeholder coordination, and artificial intelligence-assisted productivity.

## Goals

- Build a modern React portfolio website in a separate local repository named `portfolio`.
- Publish through free GitHub Pages without a backend, database, paid hosting, or CMS.
- Configure the site for the `/portfolio/` GitHub Pages project path.
- Use only public-safe profile content and avoid private records, full address, phone number, references, IDs, salary, and raw documents.
- Present a versatile professional angle supported by artificial intelligence-assisted drafting, summarization, customer relationship management tracking, stakeholder coordination, human resources compliance, documentation, finance administration, technical support, and technical/web learning.
- Include public contact links for email (`loujunel@gmail.com`), GitHub (`https://github.com/loujunel`), LinkedIn (`https://www.linkedin.com/in/loujunel`), Facebook (`https://www.facebook.com/loujunel`), and Instagram (`https://www.instagram.com/loujunel`).
- Frame Cavite State University as Bachelor of Science in Information Technology studies, not a completed degree.

## Non-goals

- Do not build a job board, blog CMS, login system, database, or admin dashboard in the first version.
- Do not publish private documents, scans, full home address, phone number, references, or unconfirmed personal details.
- Do not use the generated desk/skyline image as the hero treatment; the visual direction should feel cleaner and more modern.
- Do not claim metrics, dates, credentials, or degrees that still need confirmation.

## Proposed design

Use Vite with React as a static site. The repository should include `package.json`, `vite.config.js`, `src/`, and public metadata files. Vite must set `base: "/portfolio/"` so assets and routes work when hosted at `https://loujunel.github.io/portfolio/`.

The first version should be a single-page dashboard portfolio rather than a traditional resume page. The interface should use a gray and dark-green palette, dashboard cards, side navigation, proof-point metrics, compact social/contact panels, and a light/dark mode toggle. Avoid a large photographic hero background. The dashboard should feel energetic and specific rather than templated.

Recommended sections:

- Overview dashboard: name, versatile professional positioning, proof points, and primary contact actions.
- Capabilities: artificial intelligence-assisted drafting, summarization, follow-up tracking, HubSpot/Airtable workflows, email/calendar coordination, documentation habits, human resources compliance, finance administration, and technical support.
- Experience lanes: selected public roles grouped by executive operations, human resources/labor compliance, programs/finance administration, and technical/customer support.
- Operating range: skill clusters for human resources compliance, operations support, documentation, customer relationship management/data workflows, technical support, and web/digital productivity.
- Education and training: completed Bachelor of Science in Business Administration degree, Refocus web-development coursework, and Cavite State University Bachelor of Science in Information Technology studies.
- Contact: email, LinkedIn, GitHub, Facebook, and Instagram.

Content should be sourced from `03 - Portfolio/Public Portfolio Source.md`, not from the older resume website directly. The older resume website notes identify private/public-boundary risks such as full address, named references, phone details, and social links that may not belong on a public professional site.

## Alternatives and tradeoffs

Plain HTML/CSS/JavaScript would be the lowest-dependency path and easy to host on GitHub Pages. It loses here because the requested direction is a more modern React implementation and the portfolio will benefit from reusable section components.

Vite with React is the chosen path. It keeps the app static, modern, and lightweight while making the interface easier to extend later with project cards, filters, or additional sections. The tradeoff is dependency management and a build step before GitHub Pages deployment.

Next.js would be more powerful for a larger content site, but it adds routing and export complexity that is unnecessary for this first GitHub Pages version.

## Risks

- Private information could be accidentally republished from older resume material. Mitigation: use `Public Portfolio Source.md` as the content base and search the project for excluded terms before launch.
- The portfolio could feel too broad because the background spans government, education, BPO, finance, executive support, and web learning. Mitigation: intentionally position the site around versatile professional value and group experience by transferable strengths.
- GitHub Pages project sites use a `/portfolio/` path. Mitigation: configure Vite `base` and verify the built site before publishing.
- Cavite State University could be misread as a completed degree. Mitigation: label it as Bachelor of Science in Information Technology studies rather than a completed credential.

## Rollout

1. Create the local `portfolio` React project.
2. Build the first modern single-page portfolio using public-safe content.
3. Verify responsive layout, accessibility basics, links, and privacy boundaries locally.
4. Initialize Git for the local repository.
5. Create the remote `loujunel/portfolio` GitHub repository when ready.
6. Push the local repository and enable free GitHub Pages.
7. Confirm the live URL at `https://loujunel.github.io/portfolio/`.

## Open questions

- Confirm whether `Bachelor of Science in Information Technology studies, Cavite State University, Indang` should remain the final education wording after preview.

## Decision
