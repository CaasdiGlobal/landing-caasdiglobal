# Caasdi Global - Landing Page

A standalone React + Vite landing page for Caasdi Global.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth animations using Framer Motion and GSAP
- Interactive components including:
  - Hero section with animated text
  - Tagline section with SVG animations
  - About section with parallax effects
  - Expertise section with carousel
  - Industries section with modal details
  - Scroll cards with video backgrounds
  - Workflow section with step-by-step process
  - Contact form with toast notifications
  - Footer with terms and policies modals

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
landing-page/
├── src/
│   ├── assets/          # Images and SVG assets
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Dependencies

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- React Icons
- React Slick
- React Toastify
- React Intersection Observer

## Customization

- Modify `tailwind.config.js` to customize the theme
- Update components in `src/components/` to change content
- Edit styles in `src/styles/` for custom CSS
- Replace assets in `src/assets/` with your own images

## Notes

- This is a standalone landing page project
- Contact form shows a success message but does not send emails (backend required)
- Navigation links use anchor tags for smooth scrolling
- All external links open in new tabs
