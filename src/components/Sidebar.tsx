import { NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

interface SidebarProps {
  dark: boolean;
  setDark: (dark: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Sidebar({ dark, setDark }: SidebarProps) {
  const activeSection = useActiveSection();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="avatar">HT</div>
          <button onClick={() => setDark(p => !p)} className="theme-toggle" aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <h1>Henok Tademe</h1>
        <div className="title-role">Software Engineering Graduate</div>
        <div className="title-tagline">
          Building secure, scalable web applications with modern full-stack technologies.
        </div>

        <div className="sidebar-actions">
          <a href="/henok-tademe-resume.html" target="_blank" className="resume-btn primary">
            <span>📄</span> View Resume
          </a>
          <a href="/henok-tademe-resume.html" download className="resume-btn secondary">
            <span>📥</span> Download PDF
          </a>
        </div>

        <div className="social-links">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
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
