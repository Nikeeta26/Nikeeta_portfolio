import { Github, Linkedin } from 'lucide-react';
import { navigation, personalInfo } from '../data/portfolioData';
import '../styles/components.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">{personalInfo.name}.dev</div>
          
          <ul className="footer-nav">
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="footer-social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}.dev — Designed and built with React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
