import { Nav } from "./Nav";
import { Container } from "./Container";

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-r from-orange-300 via-red-500 to-red-550 min-h-125 rounded-bl-[100px] relative overflow-hidden">
      {/* background pattern */}
      <div className="absolute inset-0 bg-[url('/images/bg-pattern-intro-desktop.svg')] bg-no-repeat bg-top-right bg-size-[900px] opacity-60" />
      <Container className="z-10 relative min-h-125 flex flex-col py-4 md:py-0">
        <Nav />

        <section className="flex-1 flex flex-col gap-3 justify-center items-center text-white">
          <h1 className="text-4xl lg:text-6xl text-center">A modern publishing platform</h1>
          <h2 className="text-2xl lg:text-3xl text-center text-white/75">Grow your audience and build your online brand</h2>

          <div className="flex gap-3 mt-4">
            <button className="cursor-pointer py-3 px-6 rounded-full bg-white text-red-550 font-semibold hover:bg-white/40 hover:text-white transition-color duration-200">Start for Free</button>
            <button className="cursor-pointer py-3 px-6 rounded-full border border-white hover:bg-white hover:text-red-550 transition-color duration-200 font-semibold">Learn More</button>
          </div>
        </section>
      </Container>
    </section>
  )
}