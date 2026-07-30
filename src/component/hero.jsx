import logo from "/src/assets/images/logo.svg"
import { useState } from "react"

export default function HeroSection() {
  const [isActive, setIsActive] = useState(false);

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
      options: ["Contact", "Newsletter", "LinkedIn"]
    }
  ];

  return (
    <section className="w-full bg-linear-to-r from-orange-300 via-red-500 to-red-550 min-h-125 rounded-bl-[100px] flex justify-center relative">

      {/* background */}
      <div className="absolute inset-0   bg-position-[10px]  bg-[url('/images/bg-pattern-intro-mobile.svg')] md:bg-[url('/images/bg-pattern-intro-desktop.svg')]" />

      {/* container */}
      <div className="z-10 px-8 py-4 md:py-0 md:p-0 min-h-full min-w-2xs lg:min-w-6xl flex flex-col ">


        {/* content */}

        {/* nav */}
        <nav className="flex items-center py-2 text-white/70 gap-10" >

          <a href="#">
            <img src={logo} alt="blogr logo" />
          </a>

          <div className="w-full hidden md:flex justify-between relative">
            <div className="flex gap-4 ">
              {links.map((link) => (
                <div ley={link.id} className="flex items-center">
                  <span onClick={() => setIsActive(isActive === link.id ? null : link.id)} className="flex items-center gap-2 cursor-pointer">
                    <span>{link.link}</span>
                    <img src="/images/icon-arrow-light.svg" className={`max-w-3 max-h-3 duration-300 transform transition-transform ${isActive === link.id ? `rotate-180` : `rotate-0`}`} />
                  </span>

                  {isActive === link.id &&
                    <div className="absolute -bottom-28  p-5  rounded-lg bg-white text-gray-600 min-w-25">
                      {link.options.map((option) => (
                        <p key={option} className="cursor-pointer hover:text-gray-950  transform duration-300">{option}</p>
                      ))}
                    </div>}
                </div>

              ))}
            </div>

            <div className="flex gap-1.5">
              <button className="cursor-pointer py-2 px-6 rounded-full text-white text-bold ">Login</button>
              <button className="cursor-pointer py-2 px-6 rounded-full bg-white text-red-550 text-bold">sign in</button>
            </div>

            <a href="#">
              <img className="md:hidden" src="/images/icon-hamburger.svg" alt="menu" />
            </a>

          </div>
        </nav>

        {/* hero content */}
        <section className="min-w-fit flex-1 flex flex-col gap-3 justify-center items-center text-white">
          <h1 className="text-4xl lg:text-6xl text-center ">A modern publishing platform</h1>
          <h2 className="text-2xl lg:text-3xl text-center text-white/75">Grow your audience and build your online brand</h2>

          <div className="flex gap-3 mt-4">
            <button className="cursor-pointer py-3 px-6 rounded-full bg-white text-red-550 text-bold">Start for Free</button>
            <button className="cursor-pointer py-3 px-6 rounded-full border border-white  text-bold ">Learn More</button>
          </div>

        </section>


      </div>
    </section >
  )
}