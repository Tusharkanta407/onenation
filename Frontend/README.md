# OneNation Frontend

A modern React application built with Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with responsive navigation
- **Modern UI Components**: 
  - Animated Hero section with spotlight effects
  - Interactive navigation bar with mobile menu
  - Shiny button components with hover effects
  - Smooth scrolling between sections
- **Animations**: Powered by Framer Motion for smooth, professional animations
- **Styling**: Tailwind CSS for utility-first styling

## Components

- `Navbar`: Responsive navigation with mobile menu
- `Hero`: Main hero section with animated content and spotlight effects
- `Spotlight`: Animated spotlight effect component
- `HeroHighlight`: Interactive background with mouse tracking
- `ShinyButton`: Animated button component with shine effects

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── componets/
│   ├── Hero.jsx          # Main hero section
│   ├── navbar.jsx        # Navigation component
│   └── ui/
│       ├── hero-highlight.jsx  # Interactive background
│       ├── shiny-button.jsx    # Animated button
│       └── spotlight.jsx       # Spotlight effect
├── lib/
│   └── utils.js          # Utility functions
├── App.jsx               # Main app component
└── main.jsx              # App entry point
```

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- React Router DOM

## Customization

The app uses CSS custom properties for theming. You can customize colors and animations by modifying the Tailwind configuration and CSS variables.
