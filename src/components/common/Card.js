import React from 'react';

const Card = ({
  children,
  className,
  onClick,
  featured,
  horizontal,
  ...props
}) => {
  const cardClasses = [
    'card',
    featured ? 'card-featured' : '',
    horizontal ? 'card-horizontal' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={`card-image ${className || ''}`} {...props} />
);

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`card-header ${className || ''}`} {...props}>
    {children}
  </div>
);

export const CardBody = ({ children, className, ...props }) => (
  <div className={`card-body ${className || ''}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...props }) => (
  <div className={`card-footer ${className || ''}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`card-title ${className || ''}`} {...props}>
    {children}
  </h3>
);

export const CardText = ({ children, className, ...props }) => (
  <p className={`card-text ${className || ''}`} {...props}>
    {children}
  </p>
);

export default Card;
