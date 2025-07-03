# TJ Loughry - Portfolio Website

A modern, interactive portfolio website showcasing TJ Loughry's professional experience, skills, and personal interests. Built with React and Vite for optimal performance and developer experience.

## 🚀 Features

- **Interactive Navigation**: Clean header navigation with smooth content switching
- **Professional Sections**: 
  - About Me - Personal introduction and background
  - Experience - Detailed work history and achievements
  - Education - Academic background and certifications
  - Contact - Multiple ways to get in touch
  - Bonus - Personal interests including woodworking
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, professional design with custom styling
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Custom CSS with Google Fonts (Michroma & Montserrat)
- **Development Tools**: ESLint for code quality
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio_site/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Navigation header
│   │   └── ContentWindow.jsx # Main content display
│   ├── window_contents/   # Content components
│   │   ├── About.jsx      # About section
│   │   ├── Experience.jsx # Work experience
│   │   ├── Education.jsx  # Education history
│   │   ├── Contact.jsx    # Contact information
│   │   └── Bonus.jsx      # Personal interests
│   ├── styles/            # Additional styling
│   ├── assets/            # Images and other assets
│   ├── Content.jsx        # Main content data
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Content Updates

The main content is managed in `src/Content.jsx`. You can easily update:

- Personal information and contact details
- Work experience and achievements
- Education history
- About me content
- Personal interests and hobbies

### Styling

- Global styles are in `src/index.css`
- Component-specific styles can be added in the `src/styles/` directory
- Fonts are imported from Google Fonts in `index.html`

## 📱 Responsive Design

The website is designed to work seamlessly across all device sizes:
- Desktop: Full navigation and content display
- Tablet: Optimized layout for medium screens
- Mobile: Mobile-friendly navigation and content

## 🔧 Development

### Adding New Sections

1. Create a new component in `src/window_contents/`
2. Add the content data to `src/Content.jsx`
3. Update the navigation in `src/components/Header.jsx`
4. Add the new section to the content selection logic

### Code Quality

The project uses ESLint for code quality. Run `npm run lint` to check for issues and maintain consistent code style.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 About TJ Loughry

TJ Loughry is a Web Developer and Automation Testing Support Engineer based in Austin, Texas. With experience at companies like SubjectWell and Sauce Labs, TJ specializes in:

- Web Development (React, Node.js, Express, MongoDB)
- Automation Testing (Selenium, Appium)
- Support Engineering
- Database Management
- Woodworking (personal passion)

## 📞 Contact

- **Email**: tjloughry@gmail.com
- **Phone**: 512.826.6923
- **GitHub**: [TheTeejers](https://github.com/TheTeejers)
- **LinkedIn**: [tjloughry](https://linkedin.com/in/tjloughry)
- **Woodworking**: [TJWorksWood](https://www.tjworkswood.com/)

---

*Built with ❤️ using React and Vite*
