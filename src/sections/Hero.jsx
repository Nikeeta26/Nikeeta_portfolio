import { Github, Linkedin, Code, Database, Cloud, Layout } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import PrimaryButton from '../components/PrimaryButton';
import '../styles/components.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">FULL STACK DEVELOPER</span>
          </div>
          
          <h1 className="hero-title">
            {personalInfo.tagline}
          </h1>
          
          <p className="hero-description">
            {personalInfo.description}
          </p>
          
          <div className="hero-buttons">
            <PrimaryButton href="#projects" variant="primary">
              Explore My Work
            </PrimaryButton>
            <PrimaryButton href={personalInfo.resume} variant="secondary" icon="download">
              Download Resume
            </PrimaryButton>
          </div>
          
          <div className="hero-social">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
          
          {personalInfo.availability && (
            <div className="hero-availability">
              <span className="hero-availability-dot"></span>
              {personalInfo.availability}
            </div>
          )}
        </div>
        
        <div className="hero-visual">
          <div style={{ position: 'relative', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div className="glass-card" style={{ padding: '1.5rem', animation: 'float 6s ease-in-out infinite' }}>
              <Code size={48} style={{ color: 'var(--accent-violet)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Java</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', animation: 'float 6s ease-in-out infinite 0.5s' }}>
              <Database size={48} style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Spring Boot</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', animation: 'float 6s ease-in-out infinite 1s' }}>
              <Layout size={48} style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>React.js</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', animation: 'float 6s ease-in-out infinite 1.5s' }}>
              <Cloud size={48} style={{ color: 'var(--accent-blue)', marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
