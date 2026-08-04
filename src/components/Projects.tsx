import { useState } from 'react';
import { PROJECTS, ProjectCategory } from '../data/portfolioData';
import Section from './Section';

const CATEGORIES: (ProjectCategory | 'All')[] = ['All', 'Full-stack', 'Security', 'Mobile', 'Systems'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(ProjectCategory | 'All')>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" number="03" title="Projects">
      <div className="filter-bar scroll-reveal">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <div key={p.title} className={`project-card scroll-reveal scroll-reveal-delay-${i % 4}`}>
            <div className="project-top">
              <h3 className="project-title">{p.title}</h3>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" title="Live Demo">🔗</a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" title="Source Code">📂</a>
              </div>
            </div>
            <div className="project-category-tag">{p.category}</div>
            <div className="project-tech">
              {p.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="project-desc">
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
