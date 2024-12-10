"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updatePosition)

        return () => window.removeEventListener('mousemove', updatePosition)
    }, [])

    return (
        <div 
            className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out"
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <div className="relative w-16 h-16">
                <Image
                    src="/personal-portfolio/src/components/myimg.jpg"
                    alt="Manohar P"
                    width={64}
                    height={64}
                    className="rounded-full shadow-lg"
                />
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs py-1 px-2 rounded mt-1 opacity-90">
                    MANOHAR P
                </span>
            </div>
        </div>
    )
}
