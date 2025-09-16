import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "KBA Club - Rajalakshmi Engineering College",
  description:
    "Kerala Blockchain Academy Innovation Club at Rajalakshmi Engineering College - Empowering minds through accessible, high-quality blockchain education",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans antialiased overflow-x-hidden">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
