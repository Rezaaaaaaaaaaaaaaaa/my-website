import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  as = 'button',
  to,
  href,
  onClick,
  disabled,
  className,
  loading,
  icon,
  ...props
}) => {
  // Define button classes
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    size === 'small' ? 'btn-small' : '',
    size === 'large' ? 'btn-large' : '',
    loading ? 'btn-loading' : '',
    icon && !children ? 'btn-icon' : '',
    className
  ].filter(Boolean).join(' ');
  
  // If button is rendered as a Link
  if (as === 'link' && to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {icon}
        {children}
      </Link>
    );
  }
  
  // If button is rendered as an anchor
  if (as === 'a' && href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {icon}
        {children}
      </a>
    );
  }
  
  // Default button
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled || loading} 
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
