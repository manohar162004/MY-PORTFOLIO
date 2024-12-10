"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const sections = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Education", href: "#education" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-24 bg-black/50 backdrop-blur-md z-50 flex flex-col items-center justify-center">
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex-col space-y-4">
          {sections.map((section) => (
            <NavigationMenuItem key={section.title}>
              <Link href={section.href} className={navigationMenuTriggerStyle()}>
                {section.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

