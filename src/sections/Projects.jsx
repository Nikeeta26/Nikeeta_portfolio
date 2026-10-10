import { projects } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import '../styles/components.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading title="Featured Projects" subtitle="What I've Built" />
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              liveDemo={project.liveDemo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
