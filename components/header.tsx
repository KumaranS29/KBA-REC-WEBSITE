"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Simple SVG icon components to replace lucide-react
const Menu = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Partners", href: "#partners" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Image src="/images/kba-logo.png" alt="KBA Logo" width={40} height={40} className="w-10 h-10" />
            <div>
              <h1 className="font-bold text-lg text-blue-900">KBA Club</h1>
              <p className="text-xs text-blue-600">Blockchain Innovation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="text-right">
              <h2 className="font-bold text-sm text-purple-800">Rajalakshmi</h2>
              <p className="text-xs text-purple-600">Engineering College</p>
            </div>
            <Image src="/images/rec-logo.png" alt="REC Logo" width={112} height={112} className="w-14 h-14" />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-900 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-3 mt-4 pt-4 border-t border-blue-100">
              <div className="text-center">
                <h2 className="font-bold text-sm text-purple-800">Rajalakshmi Engineering College</h2>
              </div>
              <Image src="/images/rec-logo.png" alt="REC Logo" width={48} height={48} className="w-12 h-12" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
