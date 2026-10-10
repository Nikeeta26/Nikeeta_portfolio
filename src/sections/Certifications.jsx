import { certifications } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import '../styles/components.css';

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container">
        <SectionHeading title="Certifications" subtitle="Professional Credentials" />
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              issueDate={cert.issueDate}
              verificationUrl={cert.verificationUrl}
              image={cert.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
