import TechBadge from './TechBadge';
import '../styles/components.css';

const ExperienceCard = ({ company, title, period, project, description, technologies }) => {
  return (
    <div className="experience-card glass-card">
      <h3 className="experience-company">{company}</h3>
      <p className="experience-title">{title}</p>
      <p className="experience-period">{period}</p>
      <p className="experience-project">{project}</p>
      <p className="experience-description">{description}</p>
      <div className="experience-technologies">
        {technologies.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
