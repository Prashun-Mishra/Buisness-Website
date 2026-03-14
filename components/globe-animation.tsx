'use client'

import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GlobeAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let phi = 0

        if (!canvasRef.current) return

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0.3, // slight tilt
            dark: 1, // dark mode
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.05, 0.05, 0.05], // very dark background matching site
            markerColor: [0.06, 0.46, 0.52], // teal
            glowColor: [0.0, 0.4, 0.45], // teal glow
            markers: [],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi
                phi += 0.005 // speed of rotation Left to Right
            },
        })

        return () => {
            globe.destroy()
        }
    }, [])

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[600px] h-[600px]">
            <div className="relative w-full h-full max-w-full max-h-full opacity-80 mix-blend-screen">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                    style={{ width: 600, height: 600 }}
                />
            </div>
        </div>
    )
}
