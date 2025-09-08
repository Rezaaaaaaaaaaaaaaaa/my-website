import React from 'react';
import aquaTechLogo from './AquaTechLogo.svg';
import aquaTechLogoCompact from './AquaTechLogoCompact.svg';
import aquaTechIcon from './AquaTechIcon.svg';

const Logo = ({ 
  className = "", 
  size = "default", 
  variant = "full", 
  animated = false,
  linkTo = null,
  showTagline = true 
}) => {
  const sizes = {
    tiny: { width: 60, height: 60 },
    small: { width: 140, height: 45 },
    default: { width: 220, height: 70 },
    large: { width: 320, height: 100 },
    hero: { width: 400, height: 120 },
  };

  const { width, height } = sizes[size] || sizes.default;

  // Select appropriate logo based on size and variant
  const getLogo = () => {
    if (variant === "icon-only" || size === "tiny") {
      return aquaTechIcon;
    } else if (variant === "compact" || size === "small") {
      return aquaTechLogoCompact;
    } else {
      return aquaTechLogo;
    }
  };

  const logoSrc = getLogo();
  const altText = "AquaTech Solutions NZ - Environmental Engineering Excellence";

  const logoElement = (
    <div className={`flex items-center ${className}`} style={{ cursor: linkTo ? 'pointer' : 'default' }}>
      <img 
        src={logoSrc} 
        alt={altText} 
        style={{ 
          width, 
          height,
          transition: animated ? 'all 0.3s ease' : 'none',
          transform: animated ? 'scale(1)' : 'none'
        }}
        onMouseOver={animated ? (e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.filter = 'brightness(1.1)';
        } : undefined}
        onMouseOut={animated ? (e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.filter = 'brightness(1)';
        } : undefined}
      />
      
      {/* Optional text logo for very specific cases */}
      {variant === "text-only" && (
        <div style={{ marginLeft: size === "tiny" ? "0.5rem" : "1rem" }}>
          <div style={{ 
            fontSize: size === "hero" ? "2rem" : size === "large" ? "1.5rem" : "1.2rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #0891b2 0%, #0369a1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            AquaTech Solutions
          </div>
          <div style={{ 
            fontSize: size === "hero" ? "1.2rem" : size === "large" ? "1rem" : "0.9rem",
            fontWeight: "600",
            color: "#059669",
            marginTop: "-0.2rem"
          }}>
            New Zealand
          </div>
          {showTagline && size !== "tiny" && size !== "small" && (
            <div style={{ 
              fontSize: size === "hero" ? "0.9rem" : "0.8rem",
              fontStyle: "italic",
              color: "#64748b",
              marginTop: "0.2rem"
            }}>
              Local Water Done Well
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Wrap with link if provided
  if (linkTo) {
    return (
      <a 
        href={linkTo} 
        style={{ textDecoration: 'none' }}
        onMouseOver={(e) => {
          if (animated) {
            const img = e.currentTarget.querySelector('img');
            if (img) {
              img.style.transform = 'scale(1.05)';
              img.style.filter = 'brightness(1.1)';
            }
          }
        }}
        onMouseOut={(e) => {
          if (animated) {
            const img = e.currentTarget.querySelector('img');
            if (img) {
              img.style.transform = 'scale(1)';
              img.style.filter = 'brightness(1)';
            }
          }
        }}
      >
        {logoElement}
      </a>
    );
  }

  return logoElement;
};

export default Logo;