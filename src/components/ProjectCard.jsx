import { Github, ExternalLink } from 'lucide-react';
import TechBadge from './TechBadge';
import '../styles/components.css';

const ProjectCard = ({ title, description, technologies, github, liveDemo, image }) => {
  return (
    <div className="project-card glass-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <ExternalLink size={48} />
            <p style={{ marginTop: '1rem' }}>{title}</p>
          </div>
        )}
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </div>
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={16} style={{ display: 'inline', marginRight: '4px' }} />
            GitHub
          </a>
        )}
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} style={{ display: 'inline', marginRight: '4px' }} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
