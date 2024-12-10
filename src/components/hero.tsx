import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="flex-shrink-0 w-screen h-screen flex items-center justify-center snap-start bg-gradient-to-r from-purple-900 via-indigo-900 to-black">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Pothumahanthi Manohar
          </span>
        </h1>
        <h2 className="mb-6 text-3xl font-semibold text-white">
          CSE Student & Full Stack Developer
        </h2>
        <Button className="group" size="lg">
          Explore My Work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}

