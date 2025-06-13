# RH Manager v2 - Landing Page

This is the official landing page for RH Manager v2, a comprehensive management platform for dance schools. The landing page is a fully responsive, bilingual (English and Greek) single-page application built with React and Vite.

## Features

- **Bilingual Support**: Easily switch between English and Greek
- **Feature Showcase**: Detailed descriptions and screenshots of the application's features
- **Pricing Tiers**: Clear and concise pricing plans
- **Static Pages**: Includes pages for Privacy Policy, Terms of Service, and Contact information
- **Responsive Design**: Looks great on all devices, from desktops to mobile phones
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Tech Stack

- **React 19**: For building the user interface
- **TypeScript**: For type-safe JavaScript development
- **Vite 6**: As the build tool and development server
- **CSS3**: Custom styling with CSS variables and modern layout techniques

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

## Project Structure

```
├── index.html          # Main HTML template
├── index.tsx          # Application entry point
├── metadata.json      # App metadata and configuration
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── dist/             # Production build output
```

## Deployment

This project is deployed to GitHub Pages. The live site can be viewed at:
[https://petroslamb.github.io/rh-manager-landing-page/](https://petroslamb.github.io/rh-manager-landing-page/)

To deploy your own version:
1. Fork this repository
2. Enable GitHub Pages in your repository settings
3. Set the source to "Deploy from a branch" and select the `master` branch
4. Push your changes to trigger the deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
