'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function CompanyCounter() {
    // Calculate daily changing count between 5-35 based on current date
    const getDailyCount = () => {
        const startOfYear = new Date(2026, 0, 1).getTime()
        const today = new Date()
        const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
        const daysSinceStart = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24))

        // Use day number to deterministically generate a value between 5-35
        const range = 35 - 5 + 1 // 31 possible values
        const count = 5 + (daysSinceStart % range)
        return count
    }

    const [targetCount, setTargetCount] = useState(getDailyCount())
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, targetCount, {
            duration: 2,
            ease: 'easeOut',
        })

        return controls.stop
    }, [count, targetCount])

    return (
        <>
            <span className="text-sm font-bold text-white flex items-baseline gap-1">
                <motion.span>{rounded}</motion.span>
                <span className="text-teal-400">+</span>
            </span>
            <span className="text-xs text-slate-500 uppercase">Incorporated in 2026</span>
        </>
    )
}
