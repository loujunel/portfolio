# Portfolio Website Plan

## Task 1: Confirm public launch inputs

## Goal

The implementation has the exact public identity details needed to build and publish the portfolio without guessing. This matters because GitHub Pages URLs, LinkedIn/GitHub links, location wording, and education phrasing will appear publicly.

## Background

Design doc: `docs/portfolio-website/design.md`

Public-safe source: `03 - Portfolio/Public Portfolio Source.md`

Known direction:

- Repository name: `portfolio`
- Hosting: free GitHub Pages project site
- Public contact methods: Email, LinkedIn, GitHub, Facebook, and Instagram
- Homepage angle: versatile professional
- Cavite State University: Bachelor of Science in Information Technology studies, not a completed degree
- GitHub username: `loujunel`
- GitHub profile: `https://github.com/loujunel`
- LinkedIn profile: `https://www.linkedin.com/in/loujunel`
- Email: `loujunel@gmail.com`
- Facebook: `https://www.facebook.com/loujunel`
- Instagram: `https://www.instagram.com/loujunel`

## Acceptance criteria

- GitHub username is confirmed as `loujunel`.
- Exact GitHub profile URL is confirmed as `https://github.com/loujunel`.
- Exact LinkedIn profile URL is confirmed as `https://www.linkedin.com/in/loujunel`.
- Email is confirmed as `loujunel@gmail.com`.
- Facebook URL is confirmed as `https://www.facebook.com/loujunel`.
- Instagram URL is confirmed as `https://www.instagram.com/loujunel`.
- Cavite State University wording is set to `Bachelor of Science in Information Technology studies, Cavite State University, Indang` for preview.

## Verify

- Read the final launch inputs and confirm they are written into the implementation notes or README before publication.

## Must not change

- Do not publish phone number, full home address, references, salary, government IDs, raw scans, or private records.

## Task 2: Create the local portfolio project

## Goal

A local Vite React website project exists for a separate GitHub repository named `portfolio`, ready to be committed and pushed later. This gives the portfolio a clean boundary from the Obsidian/project planning folder.

## Background

The design recommends a Vite React website that builds to static files and can be hosted for free on GitHub Pages at `https://loujunel.github.io/portfolio/`.

## Acceptance criteria

- A local project folder named `portfolio` exists.
- The project can be versioned as its own Git repository.
- The project includes a README that explains the portfolio purpose, GitHub Pages target, and privacy/content source rules.
- The project structure supports Vite React development and static GitHub Pages deployment.

## Verify

- Run a directory listing and confirm the `portfolio` project exists.
- Run `git status` inside the project after initialization.
- Read the README and confirm it describes the GitHub Pages project-site target.

## Depends on

Task 1 for final public URL details, though local scaffolding can begin before all profile URLs are known.

## Task 3: Build the first React portfolio site

## Goal

The first version of the React site presents Lou-Junel as a versatile professional with diverse public/private-sector experience, artificial intelligence-assisted productivity habits, customer relationship management/data workflows, human resources compliance, operations support, finance administration, documentation, and technical support.

## Background

Use `03 - Portfolio/Public Portfolio Source.md` as the content base. The older resume website notes identify material that should not be copied directly, including full address, references, and private contact details.

Expected sections:

- Home
- About
- Experience
- Skills
- Projects
- Education
- Contact

## Acceptance criteria

- The homepage clearly presents Lou-Junel T. Velasco as a versatile professional across executive support, human resources compliance, operations, finance administration, technical support, customer relationship management/data workflows, and documentation.
- The layout uses a dashboard feel with gray and dark-green palettes plus light/dark mode.
- The visual direction feels modern and does not rely on the generated desk/skyline image as the hero treatment.
- The site includes email, LinkedIn, GitHub, Facebook, and Instagram contact links.
- Experience is grouped or presented in a way that supports the versatile-professional positioning.
- Education includes Cavite State University as Bachelor of Science in Information Technology studies, not as a completed degree.
- No private or excluded content appears on the site.
- The page is usable on desktop and mobile widths.

## Verify

- Open the site locally in a browser.
- Check every visible section against the acceptance criteria.
- Search the project for excluded terms or private content before launch.
- Resize the browser or use responsive testing to verify mobile layout.

## Must not change

- Do not introduce a backend, database, login, paid hosting dependency, or CMS in the first version.

## Depends on

Task 1 for final public profile links and wording.

## Task 4: Prepare GitHub Pages deployment

## Goal

The repository is ready to publish as a free GitHub Pages project site from the `portfolio` repository.

## Background

Because this is a project repository, the published URL will use the `/portfolio/` path at `https://loujunel.github.io/portfolio/`. Any build configuration, asset paths, or links must work under that path.

## Acceptance criteria

- The Vite React site builds to static assets that can be served as a GitHub Pages project site.
- Asset paths and internal links work with the `/portfolio/` base path.
- The README includes the expected public URL shape.
- Deployment instructions are clear enough to repeat.

## Verify

- Build or serve the site locally using the chosen stack.
- Confirm links and assets work when opened from the expected project-site base path or equivalent local preview.
- Review README deployment instructions.

## Depends on

Task 2

## Task 5: Review privacy, accuracy, and accessibility before publishing

## Goal

The site is checked before publication so it is safe, accurate, and polished enough for public viewing.

## Background

The design doc identifies the largest risks as accidental private information, overly broad positioning, GitHub Pages path handling, unverified claims, and Cavite State University being misread as completed.

## Acceptance criteria

- No excluded private content is present.
- Public claims match the approved source notes or confirmed inputs.
- The versatile-professional angle is clear on the first screen.
- LinkedIn and GitHub links work.
- The site has meaningful page title, meta description, heading hierarchy, readable contrast, keyboard-reachable links, and responsive layout.

## Verify

- Run local browser verification.
- Manually click all navigation and contact links.
- Search the project for private-content risk terms.
- Review the rendered Education section for the Cavite State wording.

## Depends on

Task 3

## Task 6: Publish the portfolio repository to GitHub Pages

## Goal

The portfolio is live from the separate `portfolio` GitHub repository using free GitHub Pages.

## Background

The design chooses a separate project repository named `portfolio`, not a `<github-username>.github.io` user site repository.

## Acceptance criteria

- A GitHub repository named `portfolio` exists under the `loujunel` GitHub account.
- Local code is pushed to the repository.
- GitHub Pages is enabled for the repository.
- The public GitHub Pages URL loads successfully.
- The live page matches the locally reviewed version.

## Verify

- Open `https://loujunel.github.io/portfolio/`.
- Confirm the page loads without broken styling or missing assets.
- Click LinkedIn and GitHub links from the live site.
- Re-run the privacy and accuracy spot check against the live page.

## Depends on

Task 5
