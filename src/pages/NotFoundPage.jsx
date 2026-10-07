import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon-wrap">
          <Compass size={48} color="#2563eb" />
        </div>
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Oops! The pet care guide or URL you are looking for doesn't exist, has been moved, or went chasing a squirrel.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Return to Home
          </Link>
          <Link to="/pets" className="btn-secondary">
            <Search size={16} /> Browse Pet Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
