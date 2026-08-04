import Section from './Section';
import AnimatedNumber from './AnimatedNumber';

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <p className="about-text scroll-reveal">
        I'm a recent <strong>Software Engineering</strong> graduate from AASTU with a passion for crafting
        full-stack applications and exploring network security. My projects span web development,
        security engineering, and cross-platform mobile — giving me a <strong>well-rounded perspective</strong> on
        modern software delivery.
      </p>
      <p className="about-text scroll-reveal scroll-reveal-delay-1">
        Currently seeking a <strong>Junior Software Engineer</strong> role where I can contribute to
        impactful products, collaborate with experienced engineers, and continue growing as a developer.
      </p>

      <div className="about-highlights scroll-reveal scroll-reveal-delay-2">
        <div className="about-card"><div className="card-icon">🎓</div><div className="card-value"><AnimatedNumber value={2026} /></div><div className="card-label">Graduation Year</div></div>
        <div className="about-card"><div className="card-icon">📁</div><div className="card-value"><AnimatedNumber value={5} /></div><div className="card-label">Projects Built</div></div>
        <div className="about-card"><div className="card-icon">💻</div><div className="card-value"><AnimatedNumber value={20} suffix="+" /></div><div className="card-label">Technologies</div></div>
        <div className="about-card"><div className="card-icon">🌍</div><div className="card-value">EN</div><div className="card-label">Languages</div></div>
      </div>
    </Section>
  );
}
