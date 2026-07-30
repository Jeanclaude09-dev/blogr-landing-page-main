import { useState } from 'react'
import './App.css'
import HeroSection from './component/hero'

function App() {

  return (
    <section className="min-h-screen flex flex-col gap-5">
      <HeroSection />
    </section>
  )
}

export default App
