"use client"

import { motion } from "framer-motion"
import { Award, Download, ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Certificate() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/images/kba-rec-certificate.jpg"
    link.download = "KBA-REC-Membership-Certificate.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="certificate" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="h-12 w-12 text-blue-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">REC & KBA Membership Certificate</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Official certification recognizing your membership and participation in Kerala Blockchain Academy at
            Rajalakshmi Engineering College.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/kba-rec-certificate.jpg"
                  alt="KBA REC Membership Certificate"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  priority
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Official Membership Recognition</h3>
                  <p className="text-gray-600">Validate your participation in blockchain education and innovation</p>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Download className="h-5 w-5" />
                    Download
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                  >
                    <Eye className="h-5 w-5" />
                    View Full
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-10 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">What is KBA?</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kerala Blockchain Academy (KBA) is a Centre of Excellence under the Kerala University of Digital
                Sciences, Innovation and Technology focused on blockchain education, research and industry
                collaboration.
              </p>
            </div>

            <div className="text-center p-10 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <ExternalLink className="h-12 w-12 text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">What is KBAIC?</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                KBA Innovation Club (KBAIC) is an initiative by KBA to help students explore blockchain & Web3
                technologies through mentorship, hands-on projects and industry exposure.
              </p>
            </div>

            <div className="text-center p-10 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Download className="h-12 w-12 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">What is KBA REC?</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                KBA REC is the Rajalakshmi Engineering College chapter of the KBAIC — a student-driven body that
                organises workshops, projects and industry-academia interactions under the guidance of KBA.
              </p>
            </div>
          </motion.div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
              <Image
                src="/images/kba-rec-certificate.jpg"
                alt="KBA REC Membership Certificate - Full View"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
