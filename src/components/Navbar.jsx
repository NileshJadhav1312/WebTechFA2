import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Bell,
  Compass,
  LayoutGrid,
  Menu,
  X,
  Home
} from 'lucide-react';
import { usePets } from '../context/PetContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { stats } = usePets();
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Automatically close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu} aria-label="PetCare Hub Homepage">
          <div className="logo-icon" aria-hidden="true">
            <Heart size={20} fill="white" />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">PetCare Hub</span>
            <span className="brand-subtitle">Smart Pet Health & Wellness</span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Strictly hidden on tablet & mobile) */}
        <nav className="nav-links-desktop" role="navigation" aria-label="Desktop Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            aria-label="Home page"
          >
            <Home size={16} aria-hidden="true" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/pets"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            aria-label={`Breeds catalog, ${stats.totalPets} available`}
          >
            <LayoutGrid size={16} aria-hidden="true" />
            <span>Breeds</span>
            <span className="nav-count-chip">{stats.totalPets}</span>
          </NavLink>

          <NavLink
            to="/reminders"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            aria-label={`Care & Plan, ${stats.pendingReminders} pending`}
          >
            <Bell size={16} aria-hidden="true" />
            <span>Care & Plan</span>
            {stats.pendingReminders > 0 && (
              <span className="nav-badge-count">{stats.pendingReminders}</span>
            )}
          </NavLink>

          <NavLink
            to="/api-explorer"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            aria-label="Discover Dog Breeds Gallery"
          >
            <Compass size={16} aria-hidden="true" />
            <span>Discover</span>
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="nav-actions-wrapper">
          {/* Mobile Menu Hamburger Toggle (Visible only below 1024px) */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-menu-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav id="mobile-nav-drawer" className="mobile-nav-drawer" role="navigation" aria-label="Mobile Navigation">
            <NavLink to="/" end className="mobile-nav-link" onClick={closeMenu}>
              <Home size={18} aria-hidden="true" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/pets" className="mobile-nav-link" onClick={closeMenu}>
              <LayoutGrid size={18} aria-hidden="true" />
              <span>Pet Breeds ({stats.totalPets})</span>
            </NavLink>
            <NavLink to="/reminders" className="mobile-nav-link" onClick={closeMenu}>
              <Bell size={18} aria-hidden="true" />
              <span>Care & Plan ({stats.pendingReminders} Pending)</span>
            </NavLink>
            <NavLink to="/api-explorer" className="mobile-nav-link" onClick={closeMenu}>
              <Compass size={18} aria-hidden="true" />
              <span>Discover Breeds</span>
            </NavLink>
          </nav>
        </>
      )}
    </header>
  );
}
