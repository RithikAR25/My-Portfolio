# Rithik Ramachandran's Portfolio

A modern, responsive personal portfolio built with React, TypeScript, and Vite. This project showcases professional experience, technical skills, and creative projects through a dynamic and interactive web interface.

## Features

- **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
- **Dynamic Theming:** Supports seamless switching between Dark and Light modes with persistent user preference using `localStorage`.
- **Interactive Animations:** Uses `framer-motion` and `@react-spring/parallax` for fluid transitions and engaging visual effects.
- **Sectional Layout:** Organized into Home, About, Projects, Skills, Blog, and Contact sections for easy navigation.
- **Integrated Contact Form:** Powered by `EmailJS` for direct communication.
- **Interactive Maps:** Includes Google Maps integration via `@react-google-maps/api`.
- **Navigation Utilities:** Features a sticky `Navbar` and a `ScrollToTopButton` for improved UX.

## Prerequisites

- **Node.js:** v18.0.0 or higher recommended.
- **npm:** v9.0.0 or higher.

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/RithikAR25/My-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd My-Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server:
```bash
npm run dev
```

To build the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## Architecture / File Structure

- `src/Components/`: Contains individual section components (Home, About, Projects, etc.) and reusable UI elements like `Navbar` and `ThemeToggleButton`.
- `src/Pages/Portfolio.tsx`: The primary container that assembles all sections into a single-page scrolling experience.
- `src/theme.ts`: Centralized Material UI theme configuration for managing color palettes and typography across dark and light modes.
- `src/assets/`: Stores static assets such as project icons, images, and logos.
- `src/App.tsx`: Manages high-level application state, including theme persistence.

## Workflow

### Internal Technical Flow
The application initializes by checking `localStorage` for a saved theme preference, defaulting to 'dark'. The `ThemeProvider` from Material UI wraps the entire application, ensuring consistent styling. Vite handles fast module replacement during development and optimizes the bundle for production.

### User Journey
1. **Landing:** Users arrive at the `Home` section with an introductory hero banner.
2. **Navigation:** Users can browse through sections using the sticky `Navbar` or by manual scrolling.
3. **Exploration:** Interactive elements such as project cards and skill bars provide detailed information.
4. **Interaction:** Users can read blog posts or send direct messages through the contact form, which triggers an automated email via `EmailJS`.
5. **Theme Selection:** Users can toggle between light and dark modes at any time using the floating action button.

## License

This project is open-source and available under the [MIT License](LICENSE).
