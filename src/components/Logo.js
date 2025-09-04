import React from 'react';
import logo from './logo.svg';

const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    tiny: { width: 80, height: 30 },
    small: { width: 140, height: 45 },
    default: { width: 220, height: 70 },
    large: { width: 320, height: 100 },
    hero: { width: 400, height: 120 },
  };

  const { width, height } = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center ${className}`}>
      <img src={logo} alt="R.M. Engineering Logo" style={{ width, height }} />
    </div>
  );
};

export default Logo;