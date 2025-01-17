import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Youssef Ahmed - Portfolio',
  description: 'Personal website showcasing skills, projects, and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}

