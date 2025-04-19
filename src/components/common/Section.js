import React from 'react';

const Section = ({
  children,
  id,
  className,
  background = 'light',
  spacing = 'normal',
  ...props
}) => {
  const sectionClasses = [
    'section',
    `bg-${background}`,
    spacing === 'large' ? 'section-lg' : '',
    spacing === 'small' ? 'section-sm' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, centered = true, className, ...props }) => {
  const headerClasses = [
    'section-header',
    centered ? 'text-center' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={headerClasses} {...props}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default Section;
