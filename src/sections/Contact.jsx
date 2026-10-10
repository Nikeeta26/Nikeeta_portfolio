import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PrimaryButton from '../components/PrimaryButton';
import '../styles/components.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <h2 className="contact-heading">
            <span className="gradient-text">Let's Build Something Great.</span>
          </h2>
          
          <p className="contact-message">
            I'm currently open to new opportunities and interesting projects. 
            Feel free to reach out through any of the channels below.
          </p>
          
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-link">
              <Mail size={20} />
              {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <PrimaryButton href={personalInfo.resume} variant="primary" icon="download" style={{ margin: '0 auto' }}>
            Download Resume
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
