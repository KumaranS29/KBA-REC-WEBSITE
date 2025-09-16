"use client"

import { Button } from "@/components/ui/button"

const ArrowRight = () => (
  <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const BookOpen = () => (
  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const Users = () => (
  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"
    />
  </svg>
)

const Award = () => (
  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806"
    />
  </svg>
)

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative pt-14 pb-16 sm:pt-20 sm:pb-20 bg-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-3 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-3 md:mb-6 leading-snug">
              Kerala Blockchain Academy Innovation Club
            </h1>
            <p className="text-xs sm:text-base md:text-2xl lg:text-3xl text-blue-700 mb-6 md:mb-8 leading-relaxed">
              Empowering minds through accessible, high-quality blockchain education to thrive in the digital future
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-8 md:mb-12">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-md sm:shadow-lg transition-all duration-300 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-4"
              onClick={() => scrollToSection("team")}
            >
              Meet Our Team
              <ArrowRight />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-4"
              onClick={() => scrollToSection("about")}
            >
              About KBA Club
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div
              className="text-center group hover:scale-105 transition-transform cursor-pointer px-2"
              onClick={() => scrollToSection("about")}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">
                <BookOpen />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-blue-900">Education</h3>
              <p className="text-xs sm:text-sm text-blue-700">
                Comprehensive blockchain courses from foundation to advanced levels
              </p>
            </div>
            <div
              className="text-center group hover:scale-105 transition-transform cursor-pointer px-2"
              onClick={() => scrollToSection("partners")}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200">
                <Users />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-blue-900">Community</h3>
              <p className="text-xs sm:text-sm text-blue-700">
                Connect with like-minded students and industry professionals
              </p>
            </div>
            <div
              className="text-center group hover:scale-105 transition-transform cursor-pointer px-2"
              onClick={() => scrollToSection("certificate")}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-200">
                <Award />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-1 text-blue-900">Excellence</h3>
              <p className="text-xs sm:text-sm text-blue-700">
                Centre of Excellence under Kerala University of Digital Sciences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
