import Section from './Section';

export default function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <div className="education-card scroll-reveal">
        <div className="edu-major">B.Sc. Software Engineering</div>
        <div className="edu-school">Addis Ababa Science and Technology University</div>
        <div className="edu-meta">
          <span>🎓 Graduated June 2026</span>
          <span className="gpa">⭐ GPA: 3.40 / 4.00</span>
        </div>
        <div className="edu-project">
          <strong>Final Year Project:</strong> Adaptive Next Generation Firewall — a two-VM security prototype integrating nftables, Suricata IDS/IPS, and ClamAV with a Flask-based decision engine.
        </div>
      </div>
    </Section>
  );
}
