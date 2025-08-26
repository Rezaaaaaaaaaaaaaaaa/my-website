import React from 'react';

const Logo = ({ className = "", size = "default", variant = "full", animated = false }) => {
  const sizes = {
    tiny: { width: 80, height: 30, fontSize: 8 },
    small: { width: 140, height: 45, fontSize: 10 },
    default: { width: 220, height: 70, fontSize: 14 },
    large: { width: 320, height: 100, fontSize: 20 },
    hero: { width: 400, height: 120, fontSize: 24 }
  };

  const { width, height, fontSize } = sizes[size] || sizes.default;

  // Logo variants
  const renderFullLogo = () => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 120" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      <defs>
        {/* Enhanced gradients */}
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
          <stop offset="30%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
          <stop offset="70%" style={{stopColor: '#075985', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0c4a6e', stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#0284c7', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0369a1', stopOpacity: 1}} />
        </linearGradient>
        
        <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0}} />
        </radialGradient>
        
        <filter id="modernShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" floodColor="#1e293b"/>
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" floodColor="#0f766e"/>
        </filter>

        {animated && (
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        )}
      </defs>
      
      {/* Modern container */}
      <rect 
        x="0" 
        y="0" 
        width="400" 
        height="120" 
        rx="16" 
        fill="white" 
        stroke="url(#primaryGradient)" 
        strokeWidth="2"
        filter="url(#modernShadow)"
      />
      
      {/* Advanced water molecule icon */}
      <g transform="translate(20, 20)">
        <circle cx="40" cy="40" r="35" fill="url(#waterGradient)" opacity="0.1"/>
        
        {/* Water molecule structure */}
        <g className={animated ? "animate-pulse" : ""}>
          {/* Central water drop */}
          <path 
            d="M40 15 C50 25, 45 35, 40 45 C35 35, 30 25, 40 15 Z" 
            fill="url(#waterGradient)"
            filter="url(#modernShadow)"
          />
          
          {/* Molecular bonds */}
          <circle cx="25" cy="30" r="6" fill="#0891b2" opacity="0.8"/>
          <circle cx="55" cy="30" r="6" fill="#0891b2" opacity="0.8"/>
          <circle cx="40" cy="55" r="6" fill="#0ea5e9" opacity="0.8"/>
          
          {/* Connection lines */}
          <line x1="31" y1="32" x2="34" y2="35" stroke="url(#primaryGradient)" strokeWidth="2"/>
          <line x1="49" y1="32" x2="46" y2="35" stroke="url(#primaryGradient)" strokeWidth="2"/>
          <line x1="40" y1="49" x2="40" y2="45" stroke="url(#primaryGradient)" strokeWidth="2"/>
          
          {/* Glow effect */}
          <circle cx="40" cy="35" r="15" fill="url(#glowEffect)" opacity="0.3"/>
        </g>
        
        {/* Engineering gear overlay */}
        <g transform="translate(50, 50)" className={animated ? "animate-spin" : ""} style={{animationDuration: '10s'}}>
          <circle cx="15" cy="15" r="12" fill="none" stroke="url(#primaryGradient)" strokeWidth="3"/>
          {/* Gear teeth */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <rect 
              key={i}
              x="13" 
              y="2" 
              width="4" 
              height="6" 
              fill="url(#primaryGradient)"
              transform={`rotate(${angle} 15 15)`}
            />
          ))}
          <circle cx="15" cy="15" r="5" fill="white" stroke="url(#primaryGradient)" strokeWidth="2"/>
        </g>
      </g>
      
      {/* Modern typography */}
      <g>
        <text 
          x="100" 
          y="35" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize={fontSize + 2} 
          fontWeight="800" 
          fill="url(#primaryGradient)"
          letterSpacing="-0.5px"
        >
          REZA MOGHADDAM
        </text>
        <text 
          x="100" 
          y="55" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize={fontSize - 2} 
          fontWeight="600" 
          fill="#64748b"
          letterSpacing="2px"
        >
          ENGINEERING SOLUTIONS
        </text>
        <text 
          x="100" 
          y="75" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize={fontSize - 4} 
          fontWeight="500" 
          fill="url(#waterGradient)"
          letterSpacing="1px"
          fontStyle="italic"
        >
          Local Water Done Well
        </text>
        
        {/* Professional accent line */}
        <rect 
          x="100" 
          y="85" 
          width="200" 
          height="3" 
          rx="1.5"
          fill="url(#primaryGradient)" 
          opacity="0.6"
        />
      </g>
      
      {/* Technical grid pattern */}
      <defs>
        <pattern id="modernGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="url(#primaryGradient)" strokeWidth="0.5" opacity="0.1"/>
          <circle cx="15" cy="15" r="1" fill="url(#primaryGradient)" opacity="0.1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="120" fill="url(#modernGrid)" opacity="0.3"/>
    </svg>
  );

  const renderIconOnly = () => (
    <svg 
      width={height} 
      height={height} 
      viewBox="0 0 80 80" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      <circle cx="40" cy="40" r="38" fill="url(#iconGradient)" opacity="0.1"/>
      
      {/* Stylized water drop with engineering elements */}
      <path 
        d="M40 10 C50 20, 45 30, 40 40 C35 30, 30 20, 40 10 Z" 
        fill="url(#iconGradient)"
      />
      
      {/* Engineering gear */}
      <g transform="translate(25, 45)" className={animated ? "animate-spin" : ""} style={{animationDuration: '8s'}}>
        <circle cx="15" cy="15" r="10" fill="none" stroke="url(#iconGradient)" strokeWidth="2"/>
        <circle cx="15" cy="15" r="4" fill="white" stroke="url(#iconGradient)" strokeWidth="1"/>
        {/* Simplified gear teeth */}
        {[0, 90, 180, 270].map((angle, i) => (
          <rect 
            key={i}
            x="13" 
            y="4" 
            width="4" 
            height="4" 
            fill="url(#iconGradient)"
            transform={`rotate(${angle} 15 15)`}
          />
        ))}
      </g>
    </svg>
  );

  const renderCompact = () => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 70" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <defs>
        <linearGradient id="compactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Compact icon */}
      <g transform="translate(10, 10)">
        <circle cx="25" cy="25" r="20" fill="url(#compactGradient)" opacity="0.15"/>
        <path 
          d="M25 10 C30 15, 28 20, 25 25 C22 20, 20 15, 25 10 Z" 
          fill="url(#compactGradient)"
        />
      </g>
      
      {/* Compact text */}
      <text 
        x="70" 
        y="25" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize} 
        fontWeight="700" 
        fill="url(#compactGradient)"
      >
        R.M. Engineering
      </text>
      <text 
        x="70" 
        y="40" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize - 3} 
        fontWeight="500" 
        fill="#64748b"
      >
        Water Solutions
      </text>
    </svg>
  );

  return (
    <div className={`flex items-center ${className}`}>
      {variant === 'icon' && renderIconOnly()}
      {variant === 'compact' && renderCompact()}
      {variant === 'full' && renderFullLogo()}
    </div>
  );
};

export default Logo;