import { Nav } from "./Nav";
import { Dropdown } from "./DrapdownPanel";

export default function HeroSection() {

  return (
    <section className="w-full bg-linear-to-r from-orange-300 via-red-500 to-red-550 min-h-125 rounded-bl-[100px] flex justify-center relative">

      {/* background */}
      {/* <div className="absolute inset-0   bg-position-[10px]  bg-[url('/images/bg-pattern-intro-mobile.svg')] md:bg-[url('/images/bg-pattern-intro-desktop.svg')]" /> */}
      <div className="absolute inset-0  img-bg" />

      {/* container */}
      <div className="z-10 px-8 py-4 md:py-0 md:p-0 min-h-full min-w-2xs lg:min-w-6xl flex flex-col ">

        {/* content */}

        {/* nav */}
        <Nav />


        {/* hero content */}
        <section className="min-w-fit flex-1 flex flex-col gap-3 justify-center items-center text-white">
          <h1 className="text-4xl lg:text-6xl text-center ">A modern publishing platform</h1>
          <h2 className="text-2xl lg:text-3xl text-center text-white/75">Grow your audience and build your online brand</h2>

          <div className="flex gap-3 mt-4">
            <button className="cursor-pointer py-3 px-6 rounded-full bg-white text-red-550 font-semibold hover:font-semibold hover:bg-white/40 hover:text-white transition-color duration-300">Start for Free</button>
            <button className="cursor-pointer py-3 px-6 rounded-full border border-white hover:bg-white hover:semibold hover:text-red-550 transition-color duration-300 font-semibold ">Learn More</button>
          </div>

        </section>

      </div>
    </section >
  )
}