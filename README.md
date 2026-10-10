# Nikeeta's Portfolio

A modern, responsive portfolio website for Nikeeta, a Full Stack Developer specializing in Java, Spring Boot, React.js, Angular, and cloud technologies.

## Features

- **Dark Cinematic Theme**: Premium dark theme with violet and cyan accents
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Subtle scroll-reveal animations and hover effects
- **Glassmorphism**: Modern card designs with translucent surfaces
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: Keyboard navigation and screen reader friendly

## Tech Stack

- **React.js** with Vite
- **Lucide React** for icons
- **CSS3** for styling and animations
- **JavaScript/JSX**

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization

### Personal Information

Edit `src/data/portfolioData.js` to customize:
- Personal info (name, email, social links)
- About section content
- Experience details
- Projects
- Skills
- Certifications
- Education

### Profile Image

Add your profile photo at:
- `src/assets/nikeeta-profile.jpg`

### Resume

Add your resume PDF at:
- `src/assets/resume.pdf`

## Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable React components
│   ├── Navbar.jsx
│   ├── SectionHeading.jsx
│   ├── PrimaryButton.jsx
│   ├── TechBadge.jsx
│   ├── ExperienceCard.jsx
│   ├── ProjectCard.jsx
│   ├── SkillCategory.jsx
│   ├── CertificationCard.jsx
│   └── Footer.jsx
├── sections/         # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── data/            # Configuration data
│   └── portfolioData.js
├── styles/          # CSS files
│   ├── global.css
│   ├── components.css
│   └── animations.css
├── App.jsx
└── main.jsx
```

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal introduction with photo
3. **Experience**: Professional work history
4. **Projects**: Featured project showcase
5. **Skills**: Technical skills organized by category
6. **Certifications**: Professional certifications
7. **Education**: Academic background
8. **Contact**: Contact information and links

## Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## License

This project is open source and available for personal use.

