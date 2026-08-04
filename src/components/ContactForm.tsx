import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form className="contact-form scroll-reveal scroll-reveal-delay-5" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required placeholder="How can I help?" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="form-status success">Thanks! I'll get back to you soon.</p>
      )}
    </form>
  );
}
