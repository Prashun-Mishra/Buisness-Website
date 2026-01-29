'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 150 // Interaction radius
        }

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number
            baseX: number
            baseY: number
            density: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.vx = (Math.random() - 0.5) * 1.5 // Faster speed
                this.vy = (Math.random() - 0.5) * 1.5 // Faster speed
                this.size = Math.random() * 3 + 1 // Larger size (1-4px)
                this.baseX = this.x
                this.baseY = this.y
                this.density = (Math.random() * 30) + 1
            }

            update() {
                // Standard movement
                this.x += this.vx
                this.y += this.vy

                // Bounce off edges
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1

                // Mouse Interaction
                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance
                    const forceDirectionY = dy / distance
                    const maxDistance = mouse.radius
                    const force = (maxDistance - distance) / maxDistance
                    const directionX = forceDirectionX * force * this.density
                    const directionY = forceDirectionY * force * this.density

                    if (distance < mouse.radius) {
                        this.x -= directionX
                        this.y -= directionY
                    }
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = 'rgba(6, 182, 212, 0.7)' // Cyan tint with good visibility
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            particles = []
            // Increased density: more particles
            const particleCount = Math.min(window.innerWidth * 0.15, 150)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) { // Longer connection distance
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(20, 184, 166, ${0.3 - distance / 500})` // Teal tinted lines
                        ctx.lineWidth = 0.8 // Thicker lines
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        window.addEventListener('resize', () => {
            resizeCanvas()
            init()
        })

        // Track mouse over the container (or window if generic background)
        window.addEventListener('mousemove', handleMouseMove)

        resizeCanvas()
        init()
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-40" // Adjust opacity as needed
        />
    )
}
