import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 text-gray-900">
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <Skills />
        <Certificates />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

