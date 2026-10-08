import Section from './Section';
import AnimatedNumber from './AnimatedNumber';
import { useEffect, useState } from 'react';

export default function About() {
  const [showText, setShowText] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm a recent <strong>Software Engineering</strong> graduate from AASTU with a passion for crafting full-stack applications and exploring network security. My projects span web development, security engineering, and cross-platform mobile — giving me a <strong>well-rounded perspective</strong> on modern software delivery.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showText) {
          setShowText(true);
          typeWriterEffect();
        }
      },
      { threshold: 0.5 }
    );

    const el = document.querySelector('.about-text');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [showText]);

  const typeWriterEffect = () => {
    let i = 0;
    const speed = 50; // typing speed in ms

    function type() {
      if (i < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  };

  return (
    <Section id="about" number="01" title="About">
      <p className="about-text scroll-reveal" dangerouslySetInnerHTML={{ __html: displayedText }}></p>
      <p className="about-text scroll-reveal scroll-reveal-delay-1">
        Currently seeking a <strong>Junior Software Engineer</strong> role where I can contribute to
        impactful products, collaborate with experienced engineers, and continue growing as a developer.
      </p>

      <div className="about-highlights scroll-reveal scroll-reveal-delay-2">
        <div className="about-card"><div className="card-icon">🎓</div><div className="card-value"><AnimatedNumber value={2026} /></div><div className="card-label">Graduation Year</div></div>
        <div className="about-card"><div className="card-icon">📁</div><div className="card-value"><AnimatedNumber value={7} /></div><div className="card-label">Projects Built</div></div>
        <div className="about-card"><div className="card-icon">💻</div><div className="card-value"><AnimatedNumber value={20} suffix="+" /></div><div className="card-label">Technologies</div></div>
        <div className="about-card"><div className="card-icon">🌍</div><div className="card-value">EN</div><div className="card-label">Languages</div></div>
      </div>
    </Section>
  );
}
