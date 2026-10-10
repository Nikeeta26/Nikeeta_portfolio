import { Award } from 'lucide-react';
import '../styles/components.css';

const CertificationCard = ({ name, issuer, issueDate, verificationUrl, image }) => {
  return (
    <div className="certification-card glass-card">
      <div className="certification-icon">
        <Award size={24} />
      </div>
      <h3 className="certification-name">{name}</h3>
      <p className="certification-issuer">{issuer}</p>
      {issueDate && <p className="certification-date">Issued: {issueDate}</p>}
      {verificationUrl && (
        <a
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ alignSelf: 'flex-start' }}
        >
          Verify Certificate
        </a>
      )}
    </div>
  );
};

export default CertificationCard;
