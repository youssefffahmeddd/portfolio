"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Youssef Ahmed's Portfolio</h1>
          <nav className="hidden md:flex space-x-1">
            {['About', 'Skills', 'Certificates', 'Projects'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden p-4 space-y-2 bg-white border-t border-gray-200">
          {['About', 'Skills', 'Certificates', 'Projects', 'Contact'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </nav>
      )}
    </header>
  )
}

