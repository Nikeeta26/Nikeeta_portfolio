import '../styles/components.css';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading">
      <h2>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
