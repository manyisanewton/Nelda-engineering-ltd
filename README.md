# Nelda Engineering Solutions Ltd Website

A responsive company website for **Nelda Engineering Solutions Ltd**, a Kenyan engineering company providing water, energy, and infrastructure solutions.

The website is built with **React**, **Vite**, **Tailwind CSS**, **React Router**, **React Icons**, and **Framer Motion**.

## Overview

The site presents Nelda Engineering Solutions Ltd as a professional engineering partner for:

- Water treatment solutions, installation, and servicing
- Water pumping solutions
- Solar power design and installations
- Borehole rehabilitation and services
- Water reticulation systems
- Plumbing works
- Civil engineering works

## Pages

- **Home**: Landing page with hero section, company highlights, service previews, projects, industries served, and calls to action.
- **About**: Company profile, mission, vision, values, and experience stats.
- **Services**: Full service listing with service cards and supporting industry/project sections.
- **Projects**: Project showcase structure for Nelda Engineering work.
- **FAQ**: Frequently asked questions grouped by service category.
- **Contact**: Contact details, service enquiry form, map, quick contact cards, and WhatsApp action.

## Tech Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **React Router DOM**
- **React Icons**
- **Framer Motion**

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

Recommended:

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will usually run at:

```bash
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/        Reusable website sections and UI components
  data/              Company, service, project, and FAQ content
  pages/             Route pages
  App.jsx            Application routes
  main.jsx           React entry point
  styles.css         Global styles and custom visual effects
  theme.css          Global color palette and design tokens

public/
  images/            Logo, favicon, hero images, service images, and footer assets
```

## Main Files

- `src/data/siteData.js`: Company details, contact information, services, hero images, trust points, and project categories.
- `src/data/faqData.js`: FAQ categories, questions, and answers.
- `src/theme.css`: Global brand colors. Update colors here to change the website palette.
- `src/components/Header.jsx`: Top contact strip, navbar, desktop navigation, and mobile hamburger menu.
- `src/components/Footer.jsx`: Footer content, newsletter form, contact links, and social icons.
- `src/components/PageHero.jsx`: Shared hero section for inner pages.

## Branding

Primary brand details currently used in the website:

- **Company**: Nelda Engineering Solutions Ltd
- **Slogan**: Innovative Engineering Solutions
- **Phone**: 0792 369 485
- **Email**: info@neldaengineering.com
- **Location**: Gatatha House, Munyu Road, 1st Floor, Nairobi, Kenya
- **Postal Address**: P.O. Box 73795 - 02000

## Customization Notes

To update company details, edit:

```text
src/data/siteData.js
```

To update FAQs, edit:

```text
src/data/faqData.js
```

To update the global color palette, edit:

```text
src/theme.css
```

To replace images, add new files to:

```text
public/images/
```

Then update the relevant image path in the page, component, or data file.

## Assets

Important image assets include:

- `public/images/logo.png`
- `public/images/whit logo for blue background.png`
- `public/images/favicon.png`
- `public/images/footer-background.png`
- `public/images/service hero background.png`
- `public/images/about background.png`
- `public/images/contact hero.png`

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Builds the website for production.

```bash
npm run preview
```

Previews the production build locally.

## Deployment

After running:

```bash
npm run build
```

Deploy the generated `dist/` folder to any static hosting platform such as Vercel, Netlify, GitHub Pages, cPanel hosting, or an Nginx/Apache server.

## License

This project is licensed under the MIT License.
