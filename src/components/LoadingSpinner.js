import React from 'react';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'var(--accent-teal)', 
  centered = true,
  overlay = false,
  text = null 
}) => {
  const sizes = {
    small: '20px',
    medium: '40px',
    large: '60px',
    xlarge: '80px'
  };

  const spinnerStyle = {
    width: sizes[size],
    height: sizes[size],
    border: `3px solid rgba(0, 0, 0, 0.1)`,
    borderTop: `3px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    ...(centered && {
      justifyContent: 'center',
      minHeight: '200px'
    }),
    ...(overlay && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      zIndex: 999,
      minHeight: '100vh'
    })
  };

  // Add keyframes for animation if not already present
  React.useEffect(() => {
    if (!document.querySelector('#spinner-styles')) {
      const style = document.createElement('style');
      style.id = 'spinner-styles';
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div style={containerStyle} role="status" aria-live="polite">
      <div style={spinnerStyle} aria-hidden="true"></div>
      {text && (
        <div style={{ 
          color: 'var(--text-medium)', 
          fontSize: '0.9rem',
          fontWeight: '500',
          textAlign: 'center'
        }}>
          {text}
        </div>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;