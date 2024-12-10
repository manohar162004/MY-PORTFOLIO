"use client"

import { useRef, useEffect } from 'react'
import FloatingNavbar from '@/components/floating-navbar'
import CustomCursor from '@/components/custom-cursor'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      container.scrollLeft += e.deltaY
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden cursor-none">
      <CustomCursor />
      <FloatingNavbar />
      <div
        ref={containerRef}
        className="flex h-screen overflow-x-auto snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

