# SEASPIRE DEVELOPMENT HANDBOOK

Version: 1.0
Last Updated: 2026-07-30

---

# 1. BEFORE STARTING ANY NEW SPRINT

Before proposing a solution or changing code, review these documents in order:

1. Project-Specification-v2.2.md
2. SEASPIRE-DEVELOPMENT-HANDBOOK.md
3. PROJECT-HISTORY.md
4. CHANGELOG.md

The Project Specification is the primary technical reference.

The Handbook records how this project should be approached and how the user and AI work together.

The Project History records major development milestones and decisions.

The Changelog records concise release-level changes.

Do not propose a solution before understanding the existing architecture, hosting environment, deployment workflow and previous decisions.

Core principle:

> Understand the project before proposing the solution.

---

# 2. PROJECT IDENTITY

Project

SEASPIRE PHUKET v2

Project Type

Premium B2B Seafood Corporate Website

Primary Positioning

- Premium
- Professional
- Trustworthy
- International
- Clean
- Modern
- B2B

Technology

Next.js / React / TypeScript

Architecture

Next.js App Router + Static Export

Production Hosting

Network Solutions Shared Hosting

Production Deployment

Build → out/ → SFTP → Network Solutions

Backend

PHP contact.php for the website contact form

Important:

The production hosting environment is a simple shared hosting environment.

Do not assume a Node.js runtime is available in production.

Do not introduce server-side Next.js architecture unless the hosting model and project requirements have first been reconsidered.

For complete technical details, always refer to:

Project-Specification-v2.2.md

---

# 3. DEVELOPMENT PHILOSOPHY

## Keep It Simple

Prefer the simplest solution that satisfies the requirement.

Avoid unnecessary:

- Framework changes
- Architecture changes
- Dependencies
- Abstractions
- Animations
- Infrastructure
- Backend complexity

---

## Preserve Existing Architecture

If the existing architecture already solves the problem:

> Improve it before replacing it.

Do not redesign the architecture simply because another approach is technically possible.

The project should evolve rather than be rebuilt.

---

## Respect Previous Decisions

Previously completed and accepted decisions should be treated as project context.

Do not repeatedly reintroduce approaches that have already been rejected or proven unsuitable.

Before changing direction, identify the actual problem first.

---

## One Problem at a Time

When working on a Sprint:

1. Identify the current problem.
2. Define the intended result.
3. Modify only what is necessary.
4. Verify the result.
5. Build.
6. Continue to the next issue.

Avoid changing several unrelated areas at the same time.

---

# 4. UI / DESIGN PHILOSOPHY

The website should communicate:

- Premium
- Professional
- International
- Trustworthy
- Clean
- Modern
- B2B

Information hierarchy is more important than decoration.

Prefer:

- Strong typography hierarchy
- Clear spacing
- Clean layouts
- Consistent visual language
- Purposeful imagery
- Responsive behaviour
- Professional corporate presentation

Avoid:

- Over-designed layouts
- Excessive animation
- Unnecessary visual effects
- Generic startup-style presentation
- Visual elements that reduce information clarity

Completed UI should not be redesigned without a clear requirement or identified problem.

---

# 5. COLLABORATION WORKFLOW

The established working workflow is:

Requirement

↓

Understand existing architecture

↓

Confirm proposed direction

↓

Implement one complete feature / file

↓

Provide complete code when requested

↓

User replaces code by direct overwrite

↓

User verifies the visual result

↓

Adjust if required

↓

npm run build

↓

Git Commit

↓

Git Push

↓

Generate / verify out/

↓

Upload out/ through SFTP

↓

Production verification

---

## Code Delivery

When the user asks for:

"完整程式碼覆蓋貼上"

provide the complete modified file.

Do not unnecessarily provide fragments that require the user to locate multiple insertion points.

The preferred working method is:

Ctrl+A

↓

Paste complete file

↓

Save

↓

Build

---

## Build Verification

A successful build is a required checkpoint.

Do not treat a change as complete merely because the development server displays correctly.

Use:

npm run build

If Build fails:

1. Stop.
2. Identify the root cause.
3. Fix it.
4. Run Build again.
5. Continue only after Build Success.

---

## Git Workflow

After a completed and verified change:

1. git status
2. git add
3. git commit
4. git push

Do not push unverified work simply to move forward.

---

## Production Deployment

Production deployment uses:

Build

↓

out/

↓

SFTP

↓

Network Solutions

Do not assume that source files such as:

- app/
- components/
- styles/
- data/
- lib/

are uploaded to production.

Production is based on the generated static output.

---

# 6. COMMUNICATION STYLE

The user prefers communication that is:

- Direct
- Practical
- Efficient
- Professional
- Clear
- Action-oriented

When the next action is obvious, give the action directly.

Avoid unnecessary explanations before providing the solution.

Do not make the user repeatedly confirm decisions that are already established in the project context.

When providing a modification:

1. State what will be changed.
2. Provide the complete file when appropriate.
3. Give the next verification step.
4. Stop.

---

## Deliver What You Commit

If a design direction has been agreed:

> Deliver that direction.

Do not provide an implementation that materially differs from the previously committed design and expect the user to identify the difference.

If the implementation cannot match the agreed direction, explain the limitation before proceeding.

---

## When an Error Is Found

If an implementation is wrong:

- Acknowledge it directly.
- Identify the cause.
- Correct it.
- Do not defend the incorrect implementation.
- Do not make the user repeatedly prove the same issue.

Reliability is more important than pretending the previous answer was correct.

---

# 7. THINGS WE ALREADY LEARNED

These are project-level lessons that should remain available to future development sessions.

## Hosting Must Drive Architecture

Network Solutions Shared Hosting is a simple hosting environment.

Do not automatically assume:

- Node.js runtime
- Next.js server runtime
- API Routes
- Server Actions
- Server-side application processes

Always check the production hosting model before recommending architecture.

---

## Static Export Is Intentional

The current production model is:

Next.js

↓

Static Export

↓

out/

↓

SFTP

↓

Network Solutions

This is an intentional deployment decision, not an accidental limitation.

Do not replace it without a clear business or technical requirement.

---

## Contact Form Architecture

The production contact form uses:

PHP contact.php

This is compatible with the current shared-hosting environment.

Do not automatically replace it with:

app/api/contact/route.ts

or another server-side Next.js implementation.

Any change to the contact architecture must first consider the actual Network Solutions hosting environment.

---

## Do Not Reopen Solved Problems

If a problem has already been solved and verified, do not reopen it without evidence that it has returned.

Examples:

- Hosting architecture
- Static export deployment
- PHP contact form
- SFTP deployment
- Completed UI decisions

---

## Visual Feedback Is Part of Acceptance

A successful Build does not automatically mean the UI is accepted.

The workflow is:

Build Success

+

Visual Verification

+

Production Verification

Only then is the change considered complete.

---

## Do Not Over-Engineer

The project does not need enterprise infrastructure merely because enterprise technologies exist.

The correct solution is the one that is:

- Reliable
- Maintainable
- Compatible
- Understandable
- Appropriate for the current business scale

---

# 8. DEFINITION OF DONE

A feature or Sprint is considered complete when the relevant items below are satisfied:

- Requirement implemented
- Intended UI visually verified
- Responsive behaviour verified
- npm run build passed
- Git commit completed
- Git push completed
- out/ generated successfully
- Production uploaded through SFTP when applicable
- Production behaviour verified
- Relevant project documentation updated

For production-facing changes:

Build Success alone is not sufficient.

Production verification is required.

---

# 9. PROJECT MEMORY

This handbook exists to preserve project context between development sessions.

The purpose is not to document every coding detail.

The purpose is to prevent future sessions from rediscovering decisions that have already been made.

The most important context to preserve is:

- Existing architecture
- Hosting constraints
- Deployment method
- UI direction
- Development workflow
- Communication preferences
- Previously solved problems
- Lessons learned from implementation

Future development should continue the project rather than repeatedly restart the project.

---

# 10. WORKING AGREEMENT

The goal is consistent long-term development.

Not:

> Redesign the project every time a new session starts.

But:

> Understand the current project, preserve what works, improve what needs improvement, and deliver verified changes.

The working principle is:

> Understand the project first.
> Propose the solution second.
> Implement only what is necessary.
> Verify before moving on.

Consistency is preferred over unnecessary change.

---

# 11. SESSION RESUME

When starting a new Seaspire v2 development session:

1. Read Project-Specification-v2.2.md.
2. Read this Handbook.
3. Read PROJECT-HISTORY.md.
4. Check CHANGELOG.md.
5. Identify the current Sprint / issue.
6. Confirm the existing architecture before proposing changes.
7. Continue from the current state.

Do not make the user repeat previously established project decisions when they are already documented.

---

# 12. DOCUMENTATION RULE

Keep documentation simple.

Do not create additional project log files unless there is a clear need.

The current documentation structure is intentionally limited to:

docs/

├── Project-Specification-v2.2.md
├── SEASPIRE-DEVELOPMENT-HANDBOOK.md
├── PROJECT-HISTORY.md
└── CHANGELOG.md

Each document has a specific purpose.

Avoid duplicating information between documents.

The objective is:

> Simple enough to maintain.
> Complete enough to preserve project memory.
> Short enough to read in minutes.