import { EXPERIENCE } from '../data/portfolioData';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" number="04" title="Experience">
      <div className="timeline">
        {EXPERIENCE.map((exp) => (
          <div key={exp.role} className="timeline-item scroll-reveal">
            <div className="timeline-dot" />
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-role">{exp.role}</div>
            <div className="timeline-company">{exp.company}</div>
            <ul className="timeline-desc">
              {exp.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
