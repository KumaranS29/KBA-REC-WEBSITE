"use client"

import { motion } from "framer-motion"
import { Award, Download } from "lucide-react"
import Image from "next/image"

export function Certificate() {
  return (
    <section
      id="certificate"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 max-[450px]:px-4 max-[380px]:px-2"
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-[380px]:px-2">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Award className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mr-3 sm:mr-4" />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              REC & KBA Membership Certificate
            </h2>
          </div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Official certification recognizing your membership and participation
            in Kerala Blockchain Academy at Rajalakshmi Engineering College.
          </p>
        </motion.div>

        {/* Certificate Display */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-10 border border-gray-100 hover:shadow-3xl transition-all duration-500 max-[450px]:p-4 max-[380px]:p-3">
              <div className="relative overflow-hidden rounded-xl flex items-center justify-center mx-auto">
                <Image
                  src="/images/kba-rec-certificate.jpg"
                  alt="REC & KBA Membership Certificate preview"
                  width={1200}
                  height={800}
                  className="w-full max-h-[80vh] object-contain mx-auto"
                  priority
                />
              </div>

              <div className="mt-6 sm:mt-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Official Membership Recognition
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Validate your participation in blockchain education and
                  innovation
                </p>

                {/* Download Button */}
                <motion.a
                  href="/downloads/kba-rec-certificate.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-5 sm:mt-6 inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Certificate
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
