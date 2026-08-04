import { useEffect, useRef, ReactNode } from 'react'

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, number, title, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null)

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
