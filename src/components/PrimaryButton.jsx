import { ArrowRight, Download } from 'lucide-react';
import '../styles/components.css';

const PrimaryButton = ({ children, variant = 'primary', href, onClick, icon = 'arrow' }) => {
  const Icon = icon === 'download' ? Download : ArrowRight;

  if (href) {
    return (
      <a href={href} className={`btn btn-${variant}`} onClick={onClick}>
        {children}
        <Icon size={18} />
      </a>
    );
  }

  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
      <Icon size={18} />
    </button>
  );
};

export default PrimaryButton;
