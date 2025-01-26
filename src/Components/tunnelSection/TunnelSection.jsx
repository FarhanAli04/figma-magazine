import React from 'react';
import './TunnelSection.css';
import image1 from '../../asest/Section 5.png';
import image2 from '../../asest/BIke Evolution2.jpg';
const TunnelSection = () => {
  return (
    <section className="tunnel-section">
      <div className="tunnel-grid">
        {/* Top image - Full width tunnel */}
        <div className="main-tunnel">
          <img 
            src={image1} 
            alt="Tunnel Effect"
            className="tunnel-image" 
          />
          <div className="red-overlay"></div>
        </div>

        {/* Bottom grid */}
        <div className="info-grid">
          {/* Left side - Text */}
          <div className="text-container">
            <h2 className="highlight-text">World's First Of It's<br />Kind Bikelight!</h2>
          </div>

          {/* Right side - Second tunnel image */}
          <div className="secondary-tunnel">
            <img 
              src={image2} 
              alt="Secondary Tunnel View"
              className="tunnel-image-secondary" 
            />
            <div className="red-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TunnelSection;
