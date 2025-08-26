import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: { width: 120, height: 40, fontSize: 12 },
    default: { width: 200, height: 60, fontSize: 16 },
    large: { width: 300, height: 90, fontSize: 24 }
  };

  const { width, height, fontSize } = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 300 90" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
            <stop offset="50%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#075985', stopOpacity: 1}} />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#1e293b', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#0f172a', stopOpacity: 1}} />
          </linearGradient>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Logo container background */}
        <rect 
          x="0" 
          y="0" 
          width="300" 
          height="90" 
          rx="8" 
          fill="white" 
          stroke="#e2e8f0" 
          strokeWidth="1"
          filter="url(#dropShadow)"
        />
        
        {/* Water drop icon */}
        <g transform="translate(15, 15)">
          <path 
            d="M30 20 C30 10, 20 5, 15 15 C10 5, 0 10, 0 20 C0 30, 6.5 35, 15 35 C23.5 35, 30 30, 30 20 Z" 
            fill="url(#logoGradient)"
            filter="url(#dropShadow)"
          />
          <circle cx="12" cy="18" r="2" fill="white" opacity="0.6"/>
          <path 
            d="M8 25 Q15 22, 22 25" 
            stroke="white" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.4"
          />
        </g>
        
        {/* Gear/engineering icon */}
        <g transform="translate(50, 15)">
          <circle 
            cx="15" 
            cy="15" 
            r="12" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="3"
          />
          <polygon 
            points="15,8 18,12 15,16 12,12" 
            fill="url(#logoGradient)"
          />
          <polygon 
            points="22,15 18,18 14,15 18,12" 
            fill="url(#logoGradient)"
          />
          <polygon 
            points="15,22 12,18 15,14 18,18" 
            fill="url(#logoGradient)"
          />
          <polygon 
            points="8,15 12,12 16,15 12,18" 
            fill="url(#logoGradient)"
          />
          <circle cx="15" cy="15" r="4" fill="white"/>
        </g>
        
        {/* Company name */}
        <text 
          x="90" 
          y="25" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="14" 
          fontWeight="700" 
          fill="url(#textGradient)"
          letterSpacing="-0.5px"
        >
          REZA MOGHADDAM
        </text>
        <text 
          x="90" 
          y="42" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="11" 
          fontWeight="500" 
          fill="#64748b"
          letterSpacing="1px"
        >
          ENGINEERING SOLUTIONS
        </text>
        <text 
          x="90" 
          y="58" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="8" 
          fontWeight="400" 
          fill="#94a3b8"
          letterSpacing="0.5px"
        >
          Local Water Done Well
        </text>
        
        {/* Decorative elements */}
        <line 
          x1="90" 
          y1="30" 
          x2="280" 
          y2="30" 
          stroke="#e2e8f0" 
          strokeWidth="1"
        />
        <line 
          x1="90" 
          y1="48" 
          x2="250" 
          y2="48" 
          stroke="#f1f5f9" 
          strokeWidth="1"
        />
        
        {/* Technical pattern background */}
        <g opacity="0.05">
          <pattern id="techPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#0891b2"/>
            <path d="M0,10 L20,10 M10,0 L10,20" stroke="#0891b2" strokeWidth="0.5"/>
          </pattern>
          <rect x="0" y="0" width="300" height="90" fill="url(#techPattern)"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo;