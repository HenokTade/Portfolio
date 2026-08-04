import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

export default function AnimatedNumber({ value, suffix = '' }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let start: number | null = null
        const duration = 1500
        const step = (timestamp: number) => {
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
