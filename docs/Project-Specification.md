# Seaspire v2 Official Website
# Project Specification

Version: 1.0  
Project: Seaspire v2  
Framework: Next.js App Router  
Language: TypeScript  
Styling: CSS Modules  

---

# 1. Project Overview

## Purpose

Seaspire v2 is the official corporate website of Seaspire.

The website represents the company's:

- Corporate identity
- Product capabilities
- Manufacturing strengths
- Business credibility
- Customer communication channels


## Primary Goals

1. Professional B2B corporate presentation
2. Clear product positioning
3. Scalable website architecture
4. SEO-ready foundation
5. Future CMS integration readiness


---

# 2. Technology Stack

## Frontend

Framework:

- Next.js App Router

Language:

- TypeScript

Styling:

- CSS Modules


## Development Environment

Node.js:
- v24+

Package Manager:
- npm


## Deployment Target

Primary:

- Vercel

Future:

- Enterprise hosting environment


---

# 3. Current Folder Structure
app/
│
├── page.tsx
├── about/
│ └── page.tsx
│
├── products/
│ └── page.tsx
│
├── contact/
│ └── page.tsx
│
├── layout.tsx
└── globals.css

components/

├── Navbar.tsx
├── Footer.tsx
├── PageHero.tsx
├── CTA.tsx
├── SectionHeading.tsx
└── ProductShowcase.tsx

data/

└── products.ts

styles/

├── Navbar.module.css
├── Footer.module.css
├── PageHero.module.css
├── CTA.module.css
├── SectionHeading.module.css
└── ProductShowcase.module.css

---

# 4. Component Architecture

## Shared Components

All reusable UI components must be placed under:
components/


## Current Shared Components


### Navbar

Responsibility:

- Site navigation
- Desktop menu
- Mobile menu


### Footer

Responsibility:

- Company information
- Contact information
- Copyright


### PageHero

Responsibility:

- Common page banner
- Title
- Subtitle
- Background image


### CTA

Responsibility:

- Contact conversion section
- Business inquiry guidance


### SectionHeading

Responsibility:

- Section title
- Subtitle
- Consistent typography


### ProductShowcase

Responsibility:

- Product presentation
- Product cards
- Product data rendering


---

# 5. Coding Standards

## General Rules

1. One component = one responsibility

2. Avoid duplicated UI code

3. Shared logic must be extracted

4. Data should be separated from presentation


---

# 6. Styling Rules

## Current Design System


## Colors

Primary:
#0F172A

Secondary:
#FFFFFF

Accent:

Defined by component requirement


---

## Layout Principle

Desktop first.

Maintain:

- Clean whitespace
- Corporate feeling
- Professional B2B appearance


---

# 7. Data Management

## Current Data Layer

Location:
data/

Current:
products.ts

Future:
company.ts
navigation.ts
applications.ts


---

# 8. Git Workflow


## Development Cycle

Each Sprint:


1. Update Specification

2. Modify code

3. Build verification


Command:
npm run build

4. Commit


Example:
git commit -m "Sprint X completed - description"

---

# 9. Completed Features


## Website Pages

Completed:

- Home
- About
- Products
- Contact


## Navigation

Completed:

- Desktop Navbar
- Mobile Navbar


## Shared UI

Completed:

- PageHero
- CTA
- SectionHeading
- ProductShowcase


## Data

Completed:

- products.ts


---

# 10. Current Sprint Roadmap


# Sprint 4
Architecture Foundation


Tasks:

- Project Specification
- Company data structure
- Navigation data structure
- Data layer improvement
- Component architecture refinement



# Sprint 5
Production Readiness


Tasks:

- SEO Metadata
- OpenGraph
- favicon
- robots.txt
- sitemap.xml
- Accessibility improvement
- Performance optimization



# Sprint 6
Deployment Preparation


Tasks:

- Analytics
- Search Console
- Production testing
- Deployment checklist


---

# 11. Development Rules


The following rules are mandatory:


1. Existing UI is frozen.

2. No redesign unless requested.

3. One complete file modification per step.

4. Every change must pass build verification.

5. Every Sprint requires Git milestone.

6. Architecture improvement has priority over new features.


---

# 12. Future Considerations


Possible future expansion:


## CMS

Possible integration:

- Contentful
- Sanity
- Strapi


## Internationalization

Potential support:

- English
- Chinese
- Thai


## Business Features

Future:

- Customer inquiry workflow
- Product database
- Download center
- Technical documents


---

# Document Status

Current Version:

1.0

Status:

Development Reference Document