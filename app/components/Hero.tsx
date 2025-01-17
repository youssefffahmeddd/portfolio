import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Youssef Ahmed Hassan
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Data Scientist | Data Analyst | Business Analyst | Web App Developer
          </p>
          <p className="text-lg mb-10">
            Passionate about creating innovative solutions and pushing the boundaries of technology.
            With expertise in data science and web app development, I bring ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  )
}

