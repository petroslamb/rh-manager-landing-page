# RH Manager v2 - Landing Page

This is the official landing page for RH Manager v2, a comprehensive management platform for dance schools. The landing page is a fully responsive, bilingual (English and Greek) single-page application built with React and Vite, following modern development practices and maintainable architecture.

## Features

- **Bilingual Support**: Easily switch between English and Greek
- **Feature Showcase**: Detailed descriptions and screenshots of the application's features
- **Pricing Tiers**: Clear and concise pricing plans
- **Static Pages**: Includes pages for Privacy Policy, Terms of Service, and Contact information
- **Responsive Design**: Looks great on all devices, from desktops to mobile phones
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Modular Architecture**: Well-organized codebase with reusable components and custom hooks
- **Type Safety**: Comprehensive TypeScript coverage with proper type definitions

## Tech Stack

- **React 19**: For building the user interface
- **TypeScript**: For type-safe JavaScript development
- **Vite 6**: As the build tool and development server
- **CSS Modules**: Scoped styling with modern layout techniques
- **ESLint & Prettier**: Code quality and formatting tools

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation & Development

1. Clone the repository:
   ```bash
   git clone https://github.com/petroslamb/rh-manager-landing-page.git
   cd rh-manager-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run linting and formatting:

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check TypeScript types
npm run type-check
```

## Project Structure

```
├── index.html                    # Main HTML template
├── src/                         # Source code directory
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   ├── components/              # Reusable UI components
│   │   ├── Header/              
│   │   │   └── Header.tsx       # Navigation header component
│   │   ├── Footer/              
│   │   │   └── Footer.tsx       # Site footer component
│   │   ├── FeatureCard/         
│   │   │   └── FeatureCard.tsx  # Feature showcase cards
│   │   └── PricingCard/         
│   │       └── PricingCard.tsx  # Pricing plan cards
│   ├── pages/                   # Page-level components
│   │   ├── HomePage/            
│   │   │   └── HomePage.tsx     # Main landing page
│   │   ├── FeatureDetail/       
│   │   │   └── FeatureDetail.tsx # Feature detail pages
│   │   └── StaticPages/         
│   │       └── StaticPages.tsx  # Privacy, Terms, Contact pages
│   ├── hooks/                   # Custom React hooks
│   │   ├── useLanguage.ts       # Language switching logic
│   │   ├── useNavigation.ts     # Navigation and routing
│   │   └── useMobileMenu.ts     # Mobile menu state
│   ├── types/                   # TypeScript type definitions
│   │   └── index.ts             # All interface definitions
│   ├── data/                    # Static data and configuration
│   │   └── translations.ts      # Bilingual content
│   └── styles/                  # CSS modules and styling
│       ├── globals.css          # Global styles and variables
│       └── components/          # Component-specific styles
│           ├── Button.module.css
│           ├── Header.module.css
│           ├── FeatureCard.module.css
│           ├── PricingCard.module.css
│           └── Layout.module.css
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── metadata.json               # App metadata and configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── dist/                       # Production build output
```

## Deployment

This project is deployed to GitHub Pages. The live site can be viewed at:
[https://petroslamb.github.io/rh-manager-landing-page/](https://petroslamb.github.io/rh-manager-landing-page/)

To deploy your own version:
1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. Set the source to "Deploy from a branch" and select the `master` branch
4. Push your changes to trigger the deployment

## Architecture Highlights

This project follows modern React development practices:

- **Modular Design**: Components are organized by feature and responsibility
- **Custom Hooks**: Business logic is extracted into reusable hooks
- **Type Safety**: Comprehensive TypeScript coverage prevents runtime errors
- **CSS Modules**: Scoped styling prevents conflicts and improves maintainability
- **Separation of Concerns**: Data, types, and components are clearly separated
- **Code Quality**: ESLint and Prettier ensure consistent code standards

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the existing code style
4. Run linting and formatting: `npm run lint:fix && npm run format`
5. Ensure TypeScript checks pass: `npm run type-check`
6. Test the build: `npm run build`
7. Commit your changes (`git commit -m 'Add some amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

## License

This project is private and proprietary.
