import { SKILLS } from '../data/portfolioData';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" number="02" title="Skills">
      <div className="skills-grid">
        {SKILLS.map((cat, i) => (
          <div key={cat.category} className={`skill-category scroll-reveal scroll-reveal-delay-${i % 4}`}>
            <div className="skill-category-header">
              <span className="cat-icon">{cat.icon}</span>
              {cat.category}
            </div>
            <div className="skill-tags">
              {cat.items.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
