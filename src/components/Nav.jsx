import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ vhsOn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full sticky top-0 z-[999] border-b-2" 
      style={{ 
        borderColor: 'var(--accent)', 
        background: 'rgba(11, 7, 16, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="font-justice text-xl md:text-2xl neon-text color-glitch old-tv"
          data-text="フォン・ザイモン"
          style={{ color: 'var(--neon-pink)' }}
        >
          フォン・ザイモン
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-pixel text-xs hotline-hover transition-all px-3 py-2 border-2"
              style={{
                color: isActive(link.to) ? 'var(--accent)' : 'var(--neon-pink)',
                borderColor: isActive(link.to) ? 'var(--accent)' : 'transparent',
                background: isActive(link.to) ? 'rgba(200, 16, 46, 0.1)' : 'transparent'
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* VHS Status Indicator */}
          <div 
            className="font-pixel text-xs px-3 py-2 border-2"
            style={{
              color: vhsOn ? 'var(--neon-cyan)' : 'var(--muted)',
              borderColor: vhsOn ? 'var(--neon-cyan)' : 'var(--muted)'
            }}
          >
            VHS: {vhsOn ? "ON" : "OFF"}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-pixel text-xs px-4 py-2 border-2 transition-all"
          style={{
            color: mobileOpen ? 'var(--accent)' : 'var(--neon-pink)',
            borderColor: mobileOpen ? 'var(--accent)' : 'var(--neon-pink)',
            background: mobileOpen ? 'rgba(200, 16, 46, 0.1)' : 'transparent'
          }}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t-2 animate-fadeIn"
          style={{ 
            borderColor: 'var(--accent)',
            background: 'rgba(11, 7, 16, 0.98)'
          }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-pixel text-xs py-3 px-4 border-2 transition-all text-center"
                style={{
                  color: isActive(link.to) ? 'var(--accent)' : 'var(--neon-pink)',
                  borderColor: isActive(link.to) ? 'var(--accent)' : 'var(--neon-pink)',
                  background: isActive(link.to) ? 'rgba(200, 16, 46, 0.1)' : 'transparent'
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* VHS Status in mobile */}
            <div 
              className="font-pixel text-xs py-3 px-4 border-2 text-center"
              style={{
                color: vhsOn ? 'var(--neon-cyan)' : 'var(--muted)',
                borderColor: vhsOn ? 'var(--neon-cyan)' : 'var(--muted)'
              }}
            >
              VHS MODE: {vhsOn ? "ENABLED" : "DISABLED"}
            </div>

            <p className="font-pixel text-center pt-2" 
              style={{ color: 'var(--neon-blue)', fontSize: '8px' }}>
              [ PRESS 'V' TO TOGGLE ]
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}