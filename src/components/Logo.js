import React from 'react';
import rmesLogo from '../assets/logo.png';

const Logo = ({ 
  className = "", 
  size = "default", 
  variant = "full", 
  animated = false,
  linkTo = null,
  showTagline = true 
}) => {
  const sizes = {
    tiny: { width: 80, height: 32 },
    small: { width: 160, height: 64 },
    default: { width: 240, height: 96 },
    large: { width: 320, height: 128 },
    hero: { width: 400, height: 160 },
  };

  const { width, height } = sizes[size] || sizes.default;

  const logoSrc = rmesLogo;
  const altText = "R.M. Engineering - Professional Process Engineering Solutions";

  const logoElement = (
    <div className={`flex items-center ${className}`} style={{ cursor: linkTo ? 'pointer' : 'default' }}>
      <img 
        src={logoSrc} 
        alt={altText} 
        style={{ 
          width, 
          height: 'auto',
          maxHeight: height,
          objectFit: 'contain',
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
            background: "linear-gradient(135deg, #338F9A 0%, #143852 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            R.M. ENGINEERING
          </div>
          <div style={{ 
            fontSize: size === "hero" ? "1rem" : size === "large" ? "0.9rem" : "0.8rem",
            fontWeight: "500",
            color: "#338F9A",
            marginTop: "-0.2rem",
            letterSpacing: "0.05em"
          }}>
            Professional Process Engineering
          </div>
          {showTagline && size !== "tiny" && size !== "small" && (
            <div style={{ 
              fontSize: size === "hero" ? "0.9rem" : "0.8rem",
              fontStyle: "italic",
              color: "#64748b",
              marginTop: "0.2rem"
            }}>
              Professional Process Engineering
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