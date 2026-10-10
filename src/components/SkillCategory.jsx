import { Code, Server, Layout, Database, Zap, Cloud, Wrench } from 'lucide-react';
import TechBadge from './TechBadge';
import '../styles/components.css';

const iconMap = {
  Code,
  Server,
  Layout,
  Database,
  Zap,
  Cloud,
  Wrench
};

const SkillCategory = ({ title, icon, items }) => {
  const Icon = iconMap[icon] || Code;

  return (
    <div className="skill-category glass-card">
      <div className="skill-category-header">
        <Icon size={24} />
        <h3 className="skill-category-title">{title}</h3>
      </div>
      <div className="skill-items">
        {items.map((skill, index) => (
          <TechBadge key={index}>{skill}</TechBadge>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
