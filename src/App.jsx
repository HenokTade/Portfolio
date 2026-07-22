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
    tech: ['React 19', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    description: 'Full-stack quiz platform with role-based access (Student & Admin). Features timed quizzes, progress tracking, Google Sign-In, and an admin dashboard with CRUD + bulk upload.',
    live: 'https://quiz-app-gules-pi-85.vercel.app',
    github: 'https://github.com/HenokTade/Quiz-App',
  },
  {
    title: 'Adaptive NGFW Prototype',
    tech: ['Python', 'Flask', 'nftables', 'Suricata', 'ClamAV'],
    description: 'Two-VM security lab implementing modern network defense. Built a Flask Decision Engine API, automation CLI tools, comprehensive firewall rules, and DoS protection.',
    github: 'https://github.com/henok/ngfw-prototype',
  },
  {
    title: 'SEPBAS · Access Control Portal',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    description: 'Secure Employee Promotion & Bonus Approval System implementing all five access control models (RBAC, MAC, DAC, RuBAC, ABAC) with MFA and audit logging.',
    github: 'https://github.com/HenokTade/employee-bonus-approval',
  },
  {
    title: 'Inventory Tracker',
    tech: ['Flask', 'Python', 'JSON'],
    description: 'Web-based inventory management with role-based access control. Intuitive UI for tracking stock movements and managing inventory items with JSON persistence.',
    github: 'https://github.com/HenokTade/inventory-tracker',
  },
  {
    title: 'Finote Tsidk Book Store',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    description: 'Cross-platform mobile app for bookstore operations — inventory tracking, sales analytics, and PDF report generation with Riverpod state management.',
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
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 70 }, () => ({
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
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Particles />
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
              <div className="about-card"><div className="card-icon">🌍</div><div className="card-value">EN</div><div className="card-label">Languages</div></div>
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
          <Section id="projects" number="03" title="Projects">
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
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
    </>
  )
}
