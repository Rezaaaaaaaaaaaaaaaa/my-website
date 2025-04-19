import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'primary', className, ...props }) => {
  const spinnerClasses = [
    'loading-spinner',
    `spinner-${size}`,
    `spinner-${color}`,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className="spinner-container" {...props}>
      <div className={spinnerClasses}></div>
    </div>
  );
};

export default LoadingSpinner;
