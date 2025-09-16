"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Linkedin, MapPin, ExternalLink } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <p className="text-xl text-blue-700 text-pretty">
            Have an idea or want to collaborate? Email us — we'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center items-start sm:space-x-4 space-y-3 sm:space-y-0 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">Email</h3>
                    <a
                      href="mailto:kbaclub@rajalakshmi.edu.in"
                      className="text-blue-700 hover:text-blue-900 hover:underline transition-colors text-lg break-all"
                    >
                      kbaclub@rajalakshmi.edu.in
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:border-indigo-400 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center items-start sm:space-x-4 space-y-3 sm:space-y-0 mb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Instagram className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">Instagram</h3>
                    <a
                      href="https://instagram.com/kba.rec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-700 hover:text-indigo-900 hover:underline transition-colors text-lg break-words"
                    >
                      @kba.rec
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:border-cyan-400 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center items-start sm:space-x-4 space-y-3 sm:space-y-0 mb-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Linkedin className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/company/kba-club-rec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:text-cyan-900 hover:underline transition-colors text-lg break-words"
                    >
                      KBA Club REC
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-start items-start sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-3 text-xl">Location</h3>
                    <p className="text-blue-700 text-lg leading-relaxed break-words">
                      Rajalakshmi Engineering College
                      <br />
                      Rajalakshmi Nagar, Thandalam
                      <br />
                      Chennai, Tamil Nadu 602105
                      <br />
                      India
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-6 items-start sm:items-center">
                      <Button
                        variant="outline"
                        size="default"
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent text-base px-6 py-3 w-full sm:w-auto"
                        onClick={() => window.open("https://rajalakshmi.org/", "_blank")}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Visit Our Campus
                      </Button>
                      <Button
                        variant="outline"
                        size="default"
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent text-base px-6 py-3 w-full sm:w-auto"
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=Rajalakshmi+Engineering+College+Thandalam+Chennai",
                            "_blank",
                          )
                        }
                      >
                        <MapPin className="h-5 w-5 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="space-y-8">
            <Card className="border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Send us a Message</h3>
                <p className="text-blue-700 mb-8 text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-blue-900 mb-3">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-blue-200 focus:border-blue-400 text-base py-3"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-blue-900 mb-3">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-blue-200 focus:border-blue-400 text-base py-3"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-blue-900 mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your inquiry, ideas, or how you'd like to collaborate..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-blue-200 focus:border-blue-400 text-base"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-0">
                <div className="w-full h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267896260756!2d80.0034695!3d13.0085334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x9ef7b1c8a1b1c1c1!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin&z=17"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rajalakshmi Engineering College Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
