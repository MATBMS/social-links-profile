# PR-001: Init Project

Prepare the Frontend Mentor starter for an AI-driven HTML/CSS/vanilla JavaScript workflow by organizing assets, separating private design material, and replacing generic documentation. The visual challenge remains at the starter stage.

## Goal and scope

The downloaded starter mixed design references with public files and included mentoring instructions that conflicted with the requested workflow, where the user provides outcomes and feedback and Codex handles implementation. This initialization establishes that workflow without adding dependencies or implementing the page.

There is no Git repository or `HEAD` baseline in this folder. Scope is established from the original files inspected during initialization, the recorded operations, and a fresh inventory of the current files. Staged, unstaged, and untracked classifications cannot be verified with Git.

All observed initialization changes are included below. No changes are excluded or ambiguous. The existing font files and licenses under `assets/fonts/` remain unchanged. This description is an additional private workflow artifact under `docs/commits/`.

## Changes and reasons

### Separate private design references

| Original path | New path |
| --- | --- |
| `figma/README.md` | `docs/design/figma/README.md` |
| `figma/social-links-profile.fig` | `docs/design/figma/social-links-profile.fig` |
| `design/active-states.jpg` | `docs/design/active-states.jpg` |
| `design/destkop-design.jpg` | `docs/design/destkop-design.jpg` |
| `design/mobile-design.jpg` | `docs/design/mobile-design.jpg` |
| `style-guide.md` | `docs/design/style-guide.md` |

Keeping these references together makes them easy to find and allows the entire `docs/` directory to be excluded from version control. Supplied filenames and contents are preserved, including the spelling of `destkop-design.jpg`. The original empty directories are removed.

### Organize public assets and preserve references

- Move `preview.jpg` to `images/preview.jpg` and point the README image to its new location.
- Move `assets/images/avatar-jessica.jpeg` to `images/avatar-jessica.jpeg` so page images share a root-level directory. The starter did not reference this avatar yet.
- Move `assets/images/favicon-32x32.png` to `icons/favicon-32x32.png` and update the favicon link in `index.html`, so browsers can still resolve it.
- Remove the empty `assets/images/` directory. Keep fonts in their existing location.

The favicon path is the only HTML change. No layout, styling, or interaction is implemented.

### Establish reusable agent guidance

Replace the default `AGENTS.md` with guidance that gives the agent ownership of implementation and calls for beginner-friendly explanations. It requires simple, responsive, accessible solutions using only HTML, CSS, and vanilla JavaScript, with JavaScript reserved for real interactivity and no added dependencies.

The guidance also requires preserving unrelated work, verifying layout and accessibility, and keeping secrets and private notes out of public files. Remove the generic `CLAUDE.md` pointer to consolidate the starter instruction files.

### Replace generic ignore rules

Rewrite `.gitignore` into grouped rules for private documentation and Figma files, dependencies, package caches, build/test output, environment files, macOS files, editor settings, and temporary files. The requested concise rules replace the broader starter list rather than retaining every previous pattern.

`docs/` covers both design references and local workflow documents. `.env.*` is ignored while `!.env.example` allows safe example configuration to be tracked. Package lockfiles are not ignored. These rules prepare future Git usage; they do not initialize Git or provide access control outside version control.

### Customize the README

Replace the generic README using `README-template.md`, then remove the separate template through the rename. Preserve the Social links profile title and the specific challenge URL found in the template.

- Retain the hover/focus requirement in the overview and state that this is still a starter.
- Add the AI-driven learning purpose and explain collaboration with Codex.
- Use the supplied preview with descriptive alt text, without presenting it as a completed implementation screenshot.
- Add the requested MATBMS GitHub and Netlify URLs, explicitly labeled as planned.
- Keep relevant plain HTML/CSS techniques as a planned approach; remove framework entries and template instructions.
- Leave “What I learned” empty and add the three adjacent “Extra feature” statements with Markdown line breaks.
- Remove the unused sections and align the table of contents with the remaining headings.

All changes serve starter preparation; there are no independent incidental fixes.

## Validation

### Performed

- Inventoried files with `rg --files --hidden` before and after initialization and again before this description.
- Compared SHA-256 hashes before and after each asset/design move: contents matched, including files inside the moved Figma directory.
- Re-read `.gitignore`, `AGENTS.md`, `README.md`, and `index.html` after editing and during documentation review.
- Searched for old asset references: no stale active references remained after initialization.
- Ran Python assertions confirming that every README table-of-contents anchor has a heading, local README/HTML references resolve, the three feature statements have adjacent lines with the required trailing spaces, and all intended source paths are gone.
- Checked the ignore-rule text for `docs/`, `*.fig`, and the absence of package-lockfile exclusions.
- Attempted `git status --short --untracked-files=all`: Git reported that the folder is not a repository. Git status and effective ignore behavior could not be validated.

### Reviewer checks to repeat

- Preview `README.md` and check the image, table of contents, and three adjacent feature lines.
- Open `index.html` in a browser and confirm the favicon loads from `icons/`.
- After separately initializing Git, run `git status --short --untracked-files=all` and `git status --ignored` to confirm public files are visible and `docs/` stays ignored.

## Decisions, limitations, and follow-up

- Keeping the original font files and supplied filenames limits this change to organization and documentation. Font selection and styling belong to implementation.
- No browser rendering or accessibility audit was performed; the page is still the original unfinished starter apart from its favicon path.
- Repository availability and deployment were not verified. The README URLs describe planned destinations.
- `.gitignore` does not untrack files already committed. There is no repository here to inspect for tracked private content.
- The concise ignore list omits some previous starter patterns, including `*.sketch` and `*.xd`; future private design material should be placed under `docs/`.
- No dependencies were installed, and no repository, commit, deployment, or remote pull request was created.

## Learning notes

Moving an asset changes its address, so any HTML or Markdown that points to it must be updated. Separating public assets from private references makes that distinction visible in the directory structure. Ignore rules control what Git considers for tracking; they do not make files inherently private. Labeling planned technology and URLs keeps documentation accurate before implementation and deployment.

## Reviewer checklist

- [x] Design references are present under `docs/design/` with their original filenames.
- [x] Preview, avatar, and favicon are in their new public directories; image and favicon links resolve.
- [x] Agent guidance matches the requested AI-driven workflow and plain HTML/CSS/JavaScript constraints.
- [x] Ignore rules cover `docs/` and local secrets while permitting safe environment examples and lockfiles.
- [x] README headings, planned URLs, preview label, and feature line breaks are correct.
- [x] Scope is limited to initialization, with the Git and browser-validation limitations understood.
