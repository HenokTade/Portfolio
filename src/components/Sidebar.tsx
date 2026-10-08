import { NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { useState } from 'react';

interface SidebarProps {
  dark: boolean;
  setDark: (dark: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Sidebar({ dark, setDark }: SidebarProps) {
  const activeSection = useActiveSection();
  const [isRotating, setIsRotating] = useState(false);

  const handleThemeToggle = () => {
    setIsRotating(true);
    setDark(p => !p);

    // Reset rotation state after animation completes
    setTimeout(() => {
      setIsRotating(false);
    }, 500); // Match CSS animation duration
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="avatar">HT</div>
          <button onClick={handleThemeToggle} className={`theme-toggle${isRotating ? ' rotating' : ''}`} aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <h1>Henok Tademe</h1>
        <div className="title-role">Software Engineering Graduate</div>
        <div className="title-tagline">
          Building secure, scalable web applications with modern full-stack technologies.
        </div>

        <div className="sidebar-actions">
          <a href="/henok-tademe-resume.html" target="_blank" className="resume-btn primary liquid-btn">
            <span>📄</span> View Resume
          </a>
          <a href="/henok-tademe-resume.html" download className="resume-btn secondary liquid-btn">
            <span>📥</span> Download PDF
          </a>
        </div>

        <div className="social-links">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} className="liquid-btn">
              {s.icon}
            </a>
          ))}
        </div>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="nav-dot" />
              <span className="nav-indicator" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
