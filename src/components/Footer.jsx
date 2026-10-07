import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="logo-icon-sm" aria-hidden="true">
                <Heart size={16} fill="white" />
              </div>
              <span>PetCare Hub</span>
            </div>
            <p className="footer-desc">
              Your trusted companion for pet health, breed guides, life-stage nutrition, and everyday wellness planning. Empowering pet parents everywhere to give their animals happier, healthier lives.
            </p>
            <div className="footer-trust-badge">
              <ShieldCheck size={16} color="#38bdf8" aria-hidden="true" />
              <span>Evidence-based care & nutrition guides</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Explore Platform</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/pets">Browse Pet Breeds</Link></li>
              <li><Link to="/reminders">Care & Vaccine Reminders</Link></li>
              <li><Link to="/api-explorer">Discover Dog Breeds</Link></li>
            </ul>
          </div>

          {/* Educational Resources & Disclaimer Column */}
          <div className="footer-col footer-col-disclaimer">
            <h4 className="footer-col-title">Veterinary Note</h4>
            <p className="footer-disclaimer-text">
              The guides provided on PetCare Hub are designed to support routine wellness and daily care. Always consult a licensed veterinarian for specialized diagnoses and medical treatment.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} PetCare Hub. All rights reserved. Dedicated to happy, healthy pets.</span>
          <div className="footer-bottom-links">
            <Link to="/">Home</Link>
            <span className="dot-sep" aria-hidden="true">&bull;</span>
            <Link to="/pets">Breeds</Link>
            <span className="dot-sep" aria-hidden="true">&bull;</span>
            <Link to="/reminders">Schedule</Link>
            <span className="dot-sep" aria-hidden="true">&bull;</span>
            <Link to="/api-explorer">Discover</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
