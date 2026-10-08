import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Create particles with some larger ones for variety
    const particles = Array.from({ length: 80 }, () => {
      // 10% chance for larger particle
      const isLarge = Math.random() < 0.1
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: isLarge ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        originalAlpha: Math.random() * 0.4 + 0.1,
      }
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // Apply mouse repulsion/attraction
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 1 - dist / 150)
        const forceX = (force * dx) / Math.max(dist, 0.1) * 0.5
        const forceY = (force * dy) / Math.max(dist, 0.1) * 0.5

        p.vx -= forceX
        p.vy -= forceY

        // Add slight drift
        p.vx += (Math.random() - 0.5) * 0.02
        p.vy += (Math.random() - 0.5) * 0.02

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8
        if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`
        ctx.fill()

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx2 = particles[j].x - p.x
          const dy2 = particles[j].y - p.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (dist2 < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const opacity = 0.06 * (1 - dist2 / 150)
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} id="particles-canvas" />
}
