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

  // Logo variants - SIMPLIFIED
  const renderFullLogo = () => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 320 80" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Simple water drop icon */}
      <g transform="translate(10, 15)">
        <path 
          d="M25 10 C35 20, 30 30, 25 35 C20 30, 15 20, 25 10 Z" 
          fill="url(#simpleGradient)"
        />
        <circle cx="22" cy="22" r="2" fill="white" opacity="0.7"/>
      </g>
      
      {/* Clean typography */}
      <text 
        x="65" 
        y="28" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize} 
        fontWeight="700" 
        fill="#1e293b"
      >
        REZA MOGHADDAM
      </text>
      <text 
        x="65" 
        y="45" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize - 3} 
        fontWeight="500" 
        fill="#64748b"
      >
        ENGINEERING SOLUTIONS
      </text>
      <text 
        x="65" 
        y="58" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize - 5} 
        fontWeight="400" 
        fill="url(#simpleGradient)"
      >
        Local Water Done Well
      </text>
    </svg>
  );

  const renderIconOnly = () => (
    <svg 
      width={height} 
      height={height} 
      viewBox="0 0 60 60" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Simple water drop */}
      <path 
        d="M30 10 C40 20, 35 30, 30 35 C25 30, 20 20, 30 10 Z" 
        fill="url(#iconGradient)"
      />
      <circle cx="27" cy="22" r="2" fill="white" opacity="0.7"/>
      
      {/* Simple initials */}
      <text 
        x="30" 
        y="50" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="8" 
        fontWeight="700" 
        fill="url(#iconGradient)"
        textAnchor="middle"
      >
        R.M.E.S
      </text>
    </svg>
  );

  const renderCompact = () => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 50" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      <defs>
        <linearGradient id="compactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: '#0f766e', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Compact water drop */}
      <g transform="translate(5, 5)">
        <path 
          d="M20 5 C25 10, 23 15, 20 20 C17 15, 15 10, 20 5 Z" 
          fill="url(#compactGradient)"
        />
        <circle cx="18" cy="12" r="1.5" fill="white" opacity="0.7"/>
      </g>
      
      {/* Compact text */}
      <text 
        x="50" 
        y="18" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize - 1} 
        fontWeight="700" 
        fill="#1e293b"
      >
        R.M. Engineering
      </text>
      <text 
        x="50" 
        y="32" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize={fontSize - 4} 
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