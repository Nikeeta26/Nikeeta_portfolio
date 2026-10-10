import { about } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import '../styles/components.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading title={about.title} subtitle={about.subtitle} />
        
        <div className="about-container">
          <div className="about-image-wrapper">
            <img
              src={about.profileImage}
              alt="Nikeeta - Full Stack Developer"
              className="about-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,' + encodeURIComponent(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="%23111827" width="400" height="400"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="20">Add your photo here</text></svg>'
                );
              }}
            />
          </div>
          
          <div className="about-content">
            <p className="about-description">{about.description}</p>
            
            <div className="about-highlights">
              {about.highlights.map((highlight, index) => (
                <span key={index} className="badge">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
