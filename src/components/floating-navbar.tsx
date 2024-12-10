"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function FloatingNavbar() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && navRef.current) {
        const newX = e.clientX - navRef.current.offsetWidth / 2
        const newY = e.clientY - 20
        setPosition({ x: newX, y: newY })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <nav
      ref={navRef}
      className="fixed z-50 bg-black/50 backdrop-blur-md rounded-full p-2 cursor-move"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={() => setIsDragging(true)}
    >
      <div className="flex space-x-2">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            className="text-white hover:text-primary"
            asChild
          >
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}
      </div>
    </nav>
  )
}

