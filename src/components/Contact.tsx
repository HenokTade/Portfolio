import ContactForm from './ContactForm';
import Section from './Section';

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Contact">
      <div className="contact-container">
        <div className="contact-grid">
          <a href="mailto:henoktademe17@gmail.com" className="contact-item scroll-reveal scroll-reveal-delay-1">
            <div className="contact-icon">✉️</div>
            <div><div className="contact-label">Email</div><div className="contact-value clickable">henoktademe17@gmail.com</div></div>
          </a>
          <a href="tel:+251982021273" className="contact-item scroll-reveal scroll-reveal-delay-2">
            <div className="contact-icon">📞</div>
            <div><div className="contact-label">Phone</div><div className="contact-value clickable">+251 982 021 273</div></div>
          </a>
          <a href="https://www.linkedin.com/in/henok-tademe" target="_blank" rel="noopener noreferrer" className="contact-item scroll-reveal scroll-reveal-delay-3">
            <div className="contact-icon">🔗</div>
            <div><div className="contact-label">LinkedIn</div><div className="contact-value clickable">linkedin.com/in/henok-tademe</div></div>
          </a>
          <a href="https://github.com/HenokTade" target="_blank" rel="noopener noreferrer" className="contact-item scroll-reveal scroll-reveal-delay-4">
            <div className="contact-icon">🐙</div>
            <div><div className="contact-label">GitHub</div><div className="contact-value clickable">github.com/HenokTade</div></div>
          </a>
        </div>

        <ContactForm />
      </div>

      <div className="footer">
        Designed & Built by Henok Tademe &copy; {new Date().getFullYear()}
      </div>
    </Section>
  );
}
