import logo from "/src/assets/images/logo.svg"
import { useState } from "react"

export default function HeroSection() {
  const [isActive, setIsActive] = useState(false)

  const links = [
    {
      id: 0,
      link: "Product",
      options: ["contact", "contact", "contact"]
    },
    {
      id: 1,
      link: "Company",
      options: ["contact", "contact", "contact"]
    },
    {
      id: 2,
      link: "Connect",
      options: ["contact", "contact", "contact"]
    }
  ];



  return (
    <section className="w-full bg-linear-to-r from-orange-300 via-red-500 to-red-550 min-h-125 rounded-bl-[100px] flex justify-center relative">

      {/* background */}
      <div className="absolute inset-0   bg-position-[10px]  bg-[url('/images/bg-pattern-intro-mobile.svg')] md:bg-[url('/images/bg-pattern-intro-desktop.svg')]" />

      {/* container */}
      <div className="z-10 min-h-full min-w-2xs lg:min-w-6xl flex flex-col ">



        {/* content */}

        {/* nav */}
        <nav className="flex items-center py-2 text-white/70 gap-10" >

          <a href="#">
            <img src={logo} alt="blogr logo" />
          </a>

          <div className="w-full hidden md:flex justify-between">
            <div className="flex gap-4 ">
              {links.map((l) => (
                <ul ley={l.id} className="flex items-center">
                  <span className="flex items-center gap-2 cursor-pointer">
                    <li>{l.link}</li>
                    <img src="/images/icon-arrow-light.svg" className="max-w-3 max-h-3" />
                  </span>
                </ul>
              ))}
            </div>

            <div className="flex gap-1.5">
              <button className="cursor-pointer py-2 px-6 rounded-full text-white text-bold ">Login</button>
              <button className="cursor-pointer py-2 px-6 rounded-full bg-white text-red-550 text-bold">sign in</button>
            </div>

            <button className="md:hidden"><img src="/images/icon-hamburger.svg" alt="humberger menu" /></button>

          </div>
        </nav>

        {/* hero content */}
        <section className="min-w-fit flex-1 flex flex-col justify-center items-center ">
          <h1>A modern publishing platform</h1>
          <h2>Grow your audience and build your online brand</h2>

          <div className="flex gap-3">
            <button>Start for Free</button>
            <button>Learn More</button>
          </div>

        </section>


      </div>
    </section >
  )
}