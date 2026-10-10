import { experience } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/components.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading title="Professional Experience" subtitle="My Work Journey" />
        
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              title={exp.title}
              period={exp.period}
              project={exp.project}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
