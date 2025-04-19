# Enhanced Environmental Engineering Portfolio Website

A modern, responsive React portfolio website for Dr. Reza Moghaddam, an Environmental & Bioprocess Engineer.

## Features

- **Modern React Architecture**: Built with React 18 and React Router v6
- **Enhanced UI/UX**: Animations, smooth transitions, and responsive design
- **Dark Mode Support**: Complete theme switching capability
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Ready**: Helmet integration, meta tags, and structured data
- **Content Organization**: Projects, publications, and blog sections
- **Advanced Styling**: SCSS with proper organization and theming
- **Accessibility Focused**: WCAG compliance built-in
- **PWA Support**: Progressive Web App capabilities

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/rmes-portfolio.git
   cd rmes-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build

To build the project for production:

```
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Image Requirements

Before deploying, please add appropriate images to the `public/images` directory as described in the `public/images/README.txt` file.

## Deployment

This project is configured for easy deployment on Netlify:

1. Push your repository to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically configure the build settings based on the `netlify.toml` file

## Customization

### Content

Main content files are located in the `src/data` directory:
- `projects.js` - Project information
- `publications.js` - Publications list
- `blogPosts.js` - Blog content

### Styling

The project uses SCSS for styling:
- Main styles: `src/styles/main.scss`
- Variables and theming: `src/styles/_variables.scss`
- Component-specific styles: `src/styles/components/`
- Page-specific styles: `src/styles/pages/`

### Pages and Components

- Page components: `src/pages/`
- Layout components: `src/components/layout/`
- Common UI components: `src/components/common/`
- Section components: `src/components/sections/`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created using the enhanced_website_setup.py script
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animation powered by [Framer Motion](https://www.framer.com/motion/)
