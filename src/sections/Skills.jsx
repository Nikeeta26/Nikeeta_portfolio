import { skills } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import SkillCategory from '../components/SkillCategory';
import '../styles/components.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading title="Technical Skills" subtitle="My Tech Stack" />
        
        <div className="skills-grid">
          <SkillCategory
            title={skills.languages.title}
            icon={skills.languages.icon}
            items={skills.languages.items}
          />
          <SkillCategory
            title={skills.backend.title}
            icon={skills.backend.icon}
            items={skills.backend.items}
          />
          <SkillCategory
            title={skills.frontend.title}
            icon={skills.frontend.icon}
            items={skills.frontend.items}
          />
          <SkillCategory
            title={skills.database.title}
            icon={skills.database.icon}
            items={skills.database.items}
          />
          <SkillCategory
            title={skills.caching.title}
            icon={skills.caching.icon}
            items={skills.caching.items}
          />
          <SkillCategory
            title={skills.cloudDevOps.title}
            icon={skills.cloudDevOps.icon}
            items={skills.cloudDevOps.items}
          />
          <SkillCategory
            title={skills.tools.title}
            icon={skills.tools.icon}
            items={skills.tools.items}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
