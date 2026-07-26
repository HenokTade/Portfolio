import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/HenokTade', label: 'GitHub', icon: 'GH' },
  { href: 'https://www.linkedin.com/in/henok-tademe', label: 'LinkedIn', icon: 'LI' },
  { href: 'mailto:henoktademe17@gmail.com', label: 'Email', icon: '✉' },
  { href: 'tel:+251982021273', label: 'Phone', icon: '📞' },
]

const PROJECTS = [
  {
    title: 'Quiz App · Sunday School',
    type: 'Full-stack web application',
    featured: true,
    tech: ['React 19', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    description: 'Full-stack quiz platform with role-based access (Student & Admin). Features timed quizzes, progress tracking, Google Sign-In, and an admin dashboard with CRUD + bulk upload.',
    highlights: ['Role-based student and admin experiences', 'Timed quiz engine and progress tracking', 'Bulk question upload and CSV export'],
    live: 'https://quiz-app-gules-pi-85.vercel.app',
    github: 'https://github.com/HenokTade/Quiz-App',
  },
  {
    title: 'Adaptive NGFW Prototype',
    type: 'Network security prototype',
    featured: true,
    tech: ['Python', 'Flask', 'nftables', 'Suricata', 'ClamAV'],
    description: 'Two-VM security lab implementing packet filtering, intrusion detection, file scanning, and DoS protection. Built a Flask decision engine, automation CLI tools, and a monitoring dashboard.',
    highlights: ['nftables firewall rules and DoS controls', 'Suricata IDS/IPS and ClamAV integration', 'Flask decision engine and dashboard'],
    github: 'https://github.com/henokase/ngfw-prototype',
  },
  {
    title: 'SEPBAS · Access Control Portal',
    type: 'Secure enterprise portal',
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'Secure Employee Promotion & Bonus Approval System implementing all five access control models (RBAC, MAC, DAC, RuBAC, ABAC) with MFA and audit logging.',
    highlights: ['Five access-control models', 'Multi-factor authentication', 'Audit logs and document management'],
    github: 'https://github.com/HenokTade/employee-bonus-approval',
  },
  {
    title: 'Inventory Tracker',
    type: 'Inventory management system',
    tech: ['Flask', 'Python', 'JSON'],
    description: 'Web-based inventory management with role-based access control. Intuitive UI for tracking stock movements and managing inventory items with JSON persistence.',
    highlights: ['Admin, manager, and viewer roles', 'Search, filters, and audit trail', 'Automated tests and documentation'],
    github: 'https://github.com/HenokTade/inventory-tracker',
  },
  {
    title: 'Finote Tsidk Book Store',
    type: 'Cross-platform mobile application',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    description: 'Cross-platform mobile app for bookstore operations — inventory tracking, sales analytics, and PDF report generation with Riverpod state management.',
    highlights: ['Inventory and sales tracking', 'PDF report generation', 'Firebase-backed data and Riverpod state'],
    github: 'https://github.com/HenokTade/Sunday-School-Book-Store',
  },
]

const SKILLS = [
  { category: 'Languages', icon: '⚡', items: ['C++', 'Java', 'Python', 'PHP', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', icon: '🎨', items: ['React', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'] },
  { category: 'Backend', icon: '⚙️', items: ['Node.js + Express', 'Django', 'Flask', 'FastAPI', 'PHP'] },
  { category: 'Databases', icon: '🗄️', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Redis'] },
  { category: 'DevOps', icon: '🚀', items: ['Docker', 'Kubernetes', 'Nginx', 'Vercel', 'Git'] },
  { category: 'Security', icon: '🔐', items: ['REST APIs', 'JWT', 'MFA', 'Linux', 'System Hardening'] },
]

const EXPERIENCE = [
  {
    role: 'Software Development Intern',
    company: 'GIV Ethiopia & AASTU ICT Office',
    period: 'Jul – Sep 2025',
    items: [
      'Built the AASTU Archive System — a document management platform with full-text search',
      'Developed responsive frontend for GIV Ethiopia\'s official website',
      'Delivered production-grade code following clean architecture patterns',
      'Recognized with a Certificate of Completion from GIV Ethiopia',
    ],
  },
]

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animId

    if (motionQuery.matches) return undefined

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: window.innerWidth < 700 ? 28 : 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 140)})`
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  )
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}

function Section({ id, number, title, children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.scroll-reveal').forEach((child) => child.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`section ${className}`}>
      <div className="section-header scroll-reveal">
        <span className="section-number">{number}.</span>
        <h2 className="section-title">{title}</h2>
        <span className="section-line" />
      </div>
      {children}
    </section>
  )
}

function AnimatedNumber({ value, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let start = 0
        const duration = 1500
        const step = (timestamp) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          setDisplay(Math.floor(progress * value))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function App() {
  const [dark, setDark] = useState(true)
  const activeSection = useActiveSection()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : true
    setDark(isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Particles />
      <ScrollProgress />
      <div className="app-layout">
        {/* Sidebar */}
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

            <div className="availability"><span aria-hidden="true" /> Open to junior software engineering roles</div>

            <div className="sidebar-actions">
              <a href="/henok-tademe-resume.html" target="_blank" rel="noopener noreferrer" className="resume-btn">
                View Resume <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="contact-btn">Get in touch</a>
            </div>

            <div className="social-links">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <nav className="nav-links" aria-label="Portfolio sections">
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

        {/* Main Content */}
        <main className="main-content">
          {/* About */}
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
              <div className="about-card"><div className="card-icon">🔒</div><div className="card-value">SEC</div><div className="card-label">Security Focus</div></div>
            </div>
          </Section>

          {/* Skills */}
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

          {/* Projects */}
          <Section id="projects" number="03" title="Featured Projects">
            <div className="projects-intro scroll-reveal">
              <p>Selected work across full-stack development, security engineering, and mobile applications.</p>
              <a href="https://github.com/HenokTade" target="_blank" rel="noopener noreferrer">View all work on GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className={`project-card ${p.featured ? 'featured' : ''} scroll-reveal scroll-reveal-delay-${i % 4}`}>
                  <div className="project-top">
                    <div>
                      <div className="project-type">{p.type}</div>
                      <h3 className="project-title">{p.title}</h3>
                    </div>
                    {p.featured && <span className="project-badge">Featured</span>}
                  </div>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-desc">
                    <p>{p.description}</p>
                  </div>
                  <ul className="project-highlights">
                    {p.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="project-actions">
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-action">Live demo <span aria-hidden="true">↗</span></a>}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-action">Source code <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          {/* Experience */}
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

          {/* Education */}
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

          {/* Contact */}
          <Section id="contact" number="06" title="Contact">
            <div className="contact-cta scroll-reveal">
              <div>
                <p className="contact-cta-eyebrow">Let’s build something useful.</p>
                <p>I’m open to junior full-stack and security-focused software engineering opportunities.</p>
              </div>
              <a href="mailto:henoktademe17@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
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

            <div className="footer">
              Designed & Built by Henok Tademe &copy; {new Date().getFullYear()}
            </div>
          </Section>
        </main>
      </div>
      <ScrollTopButton />
    </>
  )
}
