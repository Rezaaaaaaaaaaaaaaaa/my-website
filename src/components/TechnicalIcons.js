import React from 'react';

const TechnicalIcons = ({ type, size = "default", animated = false }) => {
  const sizes = {
    small: { width: 40, height: 40 },
    default: { width: 60, height: 60 },
    large: { width: 80, height: 80 }
  };

  const { width, height } = sizes[size] || sizes.default;

  const renderWaterTreatmentIcon = () => (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="waterTreatmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#0284c7', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#0369a1', stopOpacity: 1}} />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Treatment tank */}
      <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#waterTreatmentGradient)" opacity="0.2" filter="url(#dropShadow)"/>
      
      {/* Water level */}
      <rect x="25" y="40" width="50" height="20" rx="2" fill="url(#waterTreatmentGradient)" opacity="0.6" className={animated ? "animate-pulse" : ""}/>
      
      {/* Inlet pipe */}
      <rect x="10" y="45" width="15" height="6" fill="#64748b"/>
      <path d="M5 48 L15 45 L15 51 Z" fill="#64748b"/>
      
      {/* Outlet pipe */}
      <rect x="75" y="45" width="15" height="6" fill="#64748b"/>
      <path d="M90 45 L90 51 L95 48 Z" fill="#64748b"/>
      
      {/* Mixer */}
      <g transform="translate(50, 50)" className={animated ? "animate-spin" : ""} style={{animationDuration: '3s'}}>
        <line x1="-8" y1="0" x2="8" y2="0" stroke="url(#waterTreatmentGradient)" strokeWidth="3"/>
        <line x1="0" y1="-8" x2="0" y2="8" stroke="url(#waterTreatmentGradient)" strokeWidth="3"/>
        <circle cx="0" cy="0" r="3" fill="white" stroke="url(#waterTreatmentGradient)" strokeWidth="2"/>
      </g>
      
      {/* Bubbles */}
      {animated && (
        <g>
          <circle cx="35" cy="55" r="2" fill="white" opacity="0.7">
            <animate attributeName="cy" values="55;25;55" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="45" cy="60" r="1.5" fill="white" opacity="0.6">
            <animate attributeName="cy" values="60;30;60" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="55" cy="58" r="2.5" fill="white" opacity="0.8">
            <animate attributeName="cy" values="58;28;58" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
      
      {/* Control panel */}
      <rect x="85" y="10" width="12" height="20" rx="2" fill="#374151"/>
      <circle cx="91" cy="16" r="1.5" fill="#10b981"/>
      <circle cx="91" cy="22" r="1.5" fill="#f59e0b"/>
    </svg>
  );

  const renderMBRIcon = () => (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mbrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Bioreactor tank */}
      <rect x="15" y="20" width="50" height="60" rx="8" fill="url(#mbrGradient)" opacity="0.2"/>
      <rect x="20" y="30" width="40" height="40" rx="3" fill="url(#mbrGradient)" opacity="0.4"/>
      
      {/* Membrane modules */}
      <g>
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x={25 + i * 8} y="35" width="6" height="30" rx="3" fill="url(#mbrGradient)" opacity="0.8"/>
        ))}
        {/* Membrane fibers */}
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <line x1={28 + i * 8} y1="38" x2={28 + i * 8} y2="62" stroke="white" strokeWidth="1" opacity="0.6"/>
            <line x1={26 + i * 8} y1="40" x2={26 + i * 8} y2="60" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            <line x1={30 + i * 8} y1="40" x2={30 + i * 8} y2="60" stroke="white" strokeWidth="0.8" opacity="0.5"/>
          </g>
        ))}
      </g>
      
      {/* Air diffusers */}
      <rect x="20" y="75" width="40" height="3" fill="#64748b"/>
      {animated && (
        <g>
          {[25, 35, 45, 55].map((x, i) => (
            <circle key={i} cx={x} cy="72" r="1" fill="white" opacity="0.8">
              <animate attributeName="cy" values="72;35;72" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}/>
            </circle>
          ))}
        </g>
      )}
      
      {/* Permeate collection */}
      <rect x="70" y="35" width="8" height="30" fill="#0891b2" opacity="0.6"/>
      <text x="85" y="52" fontSize="8" fill="#0891b2" fontWeight="bold">Permeate</text>
      
      {/* Control system */}
      <rect x="75" y="10" width="20" height="15" rx="2" fill="#1f2937"/>
      <rect x="77" y="12" width="16" height="3" fill="#10b981"/>
      <circle cx="85" cy="20" r="2" fill="#ef4444" opacity={animated ? 0.5 : 1}>
        {animated && <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>}
      </circle>
    </svg>
  );

  const renderStormwaterIcon = () => (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stormGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#059669', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#10b981', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#34d399', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="rainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#0284c7', stopOpacity: 0.4}} />
        </linearGradient>
      </defs>
      
      {/* Catchment area */}
      <path d="M10 20 Q30 15 50 20 Q70 25 90 20 L90 35 L10 35 Z" fill="#6b7280" opacity="0.6"/>
      
      {/* Rain drops */}
      {animated && (
        <g>
          {[20, 35, 50, 65, 80].map((x, i) => (
            <g key={i}>
              <path d={`M${x} 5 C${x-2} 8, ${x-1} 12, ${x} 15 C${x+1} 12, ${x+2} 8, ${x} 5 Z`} fill="url(#rainGradient)">
                <animateTransform attributeName="transform" type="translate" values={`0,0;0,25;0,0`} dur="1.2s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
              </path>
            </g>
          ))}
        </g>
      )}
      
      {/* Bioswale/retention pond */}
      <ellipse cx="50" cy="55" rx="35" ry="15" fill="url(#stormGradient)" opacity="0.3"/>
      <ellipse cx="50" cy="55" rx="30" ry="12" fill="url(#stormGradient)" opacity="0.5"/>
      
      {/* Vegetation */}
      <g>
        {[25, 35, 45, 55, 65, 75].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 60 Q${x-2} 50, ${x} 45 Q${x+2} 50, ${x} 60`} fill="url(#stormGradient)" opacity="0.8"/>
            <circle cx={x} cy="45" r="1.5" fill="#fbbf24" opacity="0.7"/>
          </g>
        ))}
      </g>
      
      {/* Infiltration arrows */}
      <g>
        {[30, 50, 70].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="65" x2={x} y2="75" stroke="#0891b2" strokeWidth="2" opacity="0.6"/>
            <path d={`M${x-3} 72 L${x} 75 L${x+3} 72`} fill="none" stroke="#0891b2" strokeWidth="2" opacity="0.6"/>
          </g>
        ))}
      </g>
      
      {/* Outlet structure */}
      <rect x="85" y="50" width="6" height="15" fill="#64748b"/>
      <rect x="83" y="48" width="10" height="4" rx="2" fill="#374151"/>
      
      {/* Water quality indicator */}
      <circle cx="15" cy="75" r="8" fill="url(#stormGradient)" opacity="0.2"/>
      <text x="15" y="79" fontSize="6" textAnchor="middle" fill="url(#stormGradient)" fontWeight="bold">H₂O</text>
    </svg>
  );

  const renderAOPIcon = () => (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
          <stop offset="30%" style={{stopColor: '#f97316', stopOpacity: 1}} />
          <stop offset="70%" style={{stopColor: '#eab308', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#84cc16', stopOpacity: 1}} />
        </linearGradient>
        <radialGradient id="uvGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0}} />
        </radialGradient>
      </defs>
      
      {/* UV Reactor */}
      <rect x="25" y="35" width="50" height="30" rx="5" fill="url(#aopGradient)" opacity="0.3"/>
      
      {/* UV lamp */}
      <rect x="30" y="45" width="40" height="10" rx="5" fill="#8b5cf6" opacity="0.8" className={animated ? "animate-pulse" : ""}/>
      
      {/* UV glow effect */}
      <ellipse cx="50" cy="50" rx="25" ry="15" fill="url(#uvGlow)" opacity={animated ? 1 : 0.5}>
        {animated && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>}
      </ellipse>
      
      {/* H2O2 dosing */}
      <circle cx="15" cy="25" r="8" fill="#0ea5e9" opacity="0.6"/>
      <text x="15" y="29" fontSize="6" textAnchor="middle" fill="white" fontWeight="bold">H₂O₂</text>
      
      {/* Dosing line */}
      <path d="M23 25 Q30 30, 35 40" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
      
      {/* Inlet */}
      <rect x="5" y="47" width="20" height="6" fill="#64748b"/>
      <path d="M0 50 L10 47 L10 53 Z" fill="#7c2d12"/>
      
      {/* Outlet */}
      <rect x="75" y="47" width="20" height="6" fill="#64748b"/>
      <path d="M90 47 L90 53 L100 50 Z" fill="#10b981"/>
      
      {/* Hydroxyl radicals */}
      {animated && (
        <g>
          {[35, 45, 55, 65].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="50" r="1.5" fill="#fbbf24" opacity="0.8">
                <animate attributeName="r" values="1.5;3;1.5" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
              </circle>
              <text x={x} y="53" fontSize="4" textAnchor="middle" fill="#fbbf24" fontWeight="bold">•OH</text>
            </g>
          ))}
        </g>
      )}
      
      {/* Process monitoring */}
      <rect x="80" y="15" width="15" height="12" rx="2" fill="#1f2937"/>
      <rect x="82" y="17" width="11" height="2" fill="#10b981"/>
      <rect x="82" y="20" width="8" height="2" fill="#f59e0b"/>
      <rect x="82" y="23" width="6" height="2" fill="#ef4444"/>
      
      {/* Efficiency indicator */}
      <text x="50" y="85" fontSize="8" textAnchor="middle" fill="url(#aopGradient)" fontWeight="bold">99.9% COD Removal</text>
    </svg>
  );

  const renderMembraneIcon = () => (
    <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="membraneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#ea580c', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Membrane housing */}
      <rect x="25" y="20" width="50" height="60" rx="8" fill="url(#membraneGradient)" opacity="0.2"/>
      
      {/* Membrane elements */}
      <g>
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x="30" y={30 + i * 15} width="40" height="10" rx="5" fill="url(#membraneGradient)" opacity="0.6"/>
            {/* Membrane fibers */}
            {[0, 1, 2, 3, 4].map(j => (
              <line key={j} x1={33 + j * 8} y1={32 + i * 15} x2={33 + j * 8} y2={38 + i * 15} stroke="white" strokeWidth="0.8" opacity="0.7"/>
            ))}
          </g>
        ))}
      </g>
      
      {/* Feed inlet */}
      <rect x="10" y="47" width="15" height="6" fill="#7c2d12"/>
      <path d="M5 50 L15 47 L15 53 Z" fill="#7c2d12"/>
      
      {/* High pressure pump */}
      <circle cx="15" cy="30" r="8" fill="#64748b"/>
      <g transform="translate(15, 30)" className={animated ? "animate-spin" : ""} style={{animationDuration: '2s'}}>
        <path d="M-4 0 L0 -4 L4 0 L0 4 Z" fill="white"/>
      </g>
      
      {/* Permeate outlet */}
      <rect x="75" y="40" width="15" height="4" fill="#0891b2"/>
      <path d="M90 40 L90 44 L95 42 Z" fill="#0891b2"/>
      
      {/* Concentrate outlet */}
      <rect x="75" y="56" width="15" height="4" fill="#dc2626"/>
      <path d="M90 56 L90 60 L95 58 Z" fill="#dc2626"/>
      
      {/* Pressure gauge */}
      <circle cx="85" cy="25" r="6" fill="white" stroke="#64748b" strokeWidth="1"/>
      <text x="85" y="28" fontSize="6" textAnchor="middle" fill="#64748b" fontWeight="bold">60 bar</text>
      
      {/* Flow indicators */}
      {animated && (
        <g>
          {/* Feed flow */}
          <circle cx="20" cy="50" r="1" fill="#7c2d12">
            <animate attributeName="cx" values="20;70;20" dur="2s" repeatCount="indefinite"/>
          </circle>
          {/* Permeate flow */}
          <circle cx="70" cy="42" r="0.8" fill="#0891b2">
            <animate attributeName="cx" values="70;90;70" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          {/* Concentrate flow */}
          <circle cx="70" cy="58" r="0.8" fill="#dc2626">
            <animate attributeName="cx" values="70;90;70" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </g>
      )}
      
      {/* Performance metrics */}
      <text x="50" y="90" fontSize="7" textAnchor="middle" fill="url(#membraneGradient)" fontWeight="bold">Recovery: 75%</text>
    </svg>
  );

  const icons = {
    'water-treatment': renderWaterTreatmentIcon,
    'mbr': renderMBRIcon,
    'stormwater': renderStormwaterIcon,
    'aop': renderAOPIcon,
    'membrane': renderMembraneIcon
  };

  const renderIcon = icons[type] || renderWaterTreatmentIcon;

  return (
    <div className="technical-icon">
      {renderIcon()}
    </div>
  );
};

export default TechnicalIcons;