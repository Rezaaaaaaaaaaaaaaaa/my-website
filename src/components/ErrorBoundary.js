import React from 'react';
import { FaExclamationTriangle, FaHome, FaEnvelope, FaRefresh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // Here you could send error to monitoring service
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error, errorInfo) => {
    // Placeholder for error logging service
    // In production, you might send this to services like Sentry, LogRocket, etc.
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      // Store in localStorage for debugging (remove in production)
      if (process.env.NODE_ENV === 'development') {
        localStorage.setItem('lastError', JSON.stringify(errorData));
      }
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '3rem 2rem'
          }}>
            {/* Error Icon */}
            <div style={{
              fontSize: '4rem',
              color: '#ef4444',
              marginBottom: '1.5rem'
            }}>
              <FaExclamationTriangle />
            </div>

            {/* Error Title */}
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '1rem',
              margin: '0 0 1rem 0'
            }}>
              Oops! Something went wrong
            </h1>

            {/* Error Description */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-medium)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              We're sorry, but something unexpected happened. Our engineering team 
              has been notified and we're working to fix the issue.
            </p>

            {/* Company Branding Context */}
            <div style={{
              background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
              border: '1px solid #b3e5fc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '2rem'
            }}>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-medium)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                <strong>AquaTech Solutions NZ</strong> - We maintain the same high standards 
                for our website as we do for our engineering solutions. This error is 
                being addressed with the same precision we apply to water treatment systems.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                padding: '1rem',
                marginBottom: '2rem',
                textAlign: 'left'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Error Details (Development Only)
                </summary>
                <pre style={{ 
                  fontSize: '0.8rem', 
                  overflowX: 'auto',
                  background: 'white',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  margin: '0.5rem 0'
                }}>
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo.componentStack && (
                  <pre style={{ 
                    fontSize: '0.8rem', 
                    overflowX: 'auto',
                    background: 'white',
                    padding: '0.5rem',
                    borderRadius: '4px'
                  }}>
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </details>
            )}

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={this.handleRefresh}
                style={{
                  background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaRefresh /> Try Again
              </button>

              <Link
                to="/"
                style={{
                  background: 'white',
                  color: 'var(--accent-teal)',
                  border: '2px solid var(--accent-teal)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-teal)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = 'var(--accent-teal)';
                }}
              >
                <FaHome /> Go Home
              </Link>

              <Link
                to="/contact"
                style={{
                  background: 'transparent',
                  color: 'var(--text-medium)',
                  border: '2px solid #e2e8f0',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = 'var(--accent-teal)';
                  e.target.style.color = 'var(--accent-teal)';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.color = 'var(--text-medium)';
                }}
              >
                <FaEnvelope /> Contact Support
              </Link>
            </div>

            {/* Additional Help Text */}
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              marginTop: '2rem',
              marginBottom: 0
            }}>
              If the problem persists, please contact our technical team at{' '}
              <a 
                href="mailto:che.eng@live.com"
                style={{ color: 'var(--accent-teal)', textDecoration: 'none' }}
              >
                che.eng@live.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;