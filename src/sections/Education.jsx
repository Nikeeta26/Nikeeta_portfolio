import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import '../styles/components.css';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <SectionHeading title="Education" subtitle="Academic Background" />
        
        <div className="education-card glass-card">
          <div style={{ marginBottom: '1rem' }}>
            <GraduationCap size={48} style={{ color: 'var(--accent-violet)' }} />
          </div>
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-university">{education.university}</p>
          <p className="education-details">
            {education.graduationYear} • {education.score}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
