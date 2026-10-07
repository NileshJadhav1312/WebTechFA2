import React from 'react';
import { AlertOctagon, RotateCcw, Home } from 'lucide-react';

/**
 * ErrorBoundary component adhering to Rule 10 (Error UI Rules):
 * - Clear title
 * - Clear description
 * - Retry action
 * - Never displays raw backend errors
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  handleReturnHome = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper" role="alert">
          <div className="error-boundary-card">
            <div className="error-icon-circle">
              <AlertOctagon size={40} color="#dc2626" />
            </div>
            <h2 className="error-title">We Encountered an Unexpected Issue</h2>
            <p className="error-desc">
              A temporary display error occurred while processing this view. Your pet profiles, health logs, and reminders remain completely safe.
            </p>

            <div className="error-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={this.handleRetry}
                aria-label="Retry loading this view"
              >
                <RotateCcw size={16} /> Try Again
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={this.handleReturnHome}
                aria-label="Return to homepage"
              >
                <Home size={16} /> Return to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
