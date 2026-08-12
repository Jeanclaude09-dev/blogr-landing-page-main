import { useState } from 'react'
import './App.css'
import HeroSection from './component/hero'
import { Features } from './component/Features'
import { Infrastructure } from './component/Infrastructure'
import { Tooling } from './component/Tooling'
import { Footer } from './component/Footer'

function App() {

  return (
    <section className="min-h-screen flex flex-col gap-5">
      <HeroSection />
      <Features />
      <Infrastructure />
      <Tooling />
      <Footer />
    </section>
  )
}

export default App
