import { Menu, X } from "lucide-react";
import logo from "/src/assets/images/logo.svg"
import { useState } from "react"
import { Dropdown } from "./DrapdownPanel";

export default function HeroSection() {
  const [isActive, setIsActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      id: 0,
      link: "Product",
      options: [
        { id: 0, label: "Contact" },
        { id: 1, label: "Contact" },
        { id: 2, label: "Contact" }]
    },
    {
      id: 1,
      link: "Company",
      options: [
        { id: 0, label: "Contact" },
        { id: 1, label: "Contact" },
        { id: 2, label: "Contact" }]
    },
    {
      id: 2,
      link: "Connect",
      options: [
        { id: 0, label: "Contact" },
        { id: 1, label: "Newsletter" },
        { id: 2, label: "LinkedIn" }
      ]
    }
  ];

  return (
    <section className="w-full bg-linear-to-r from-orange-300 via-red-500 to-red-550 min-h-125 rounded-bl-[100px] flex justify-center relative">

      {/* background */}
      {/* <div className="absolute inset-0   bg-position-[10px]  bg-[url('/images/bg-pattern-intro-mobile.svg')] md:bg-[url('/images/bg-pattern-intro-desktop.svg')]" /> */}
      <div className="absolute inset-0  img-bg" />


      {/* container */}
      <div className="z-10 px-8 py-4 md:py-0 md:p-0 min-h-full min-w-2xs lg:min-w-6xl flex flex-col ">

        {/* content */}

        {/* nav */}
        <nav className="relative flex items-center justify-between  py-2 text-white/70 gap-10" >

          {/* left nav */}
          <a href="#">
            <img src={logo} alt="blogr logo" />
          </a>

          {/* Right nav */}
          <div className="w-full flex justify-between relative">
            <div className="gap-4 hidden md:flex ">
              {links.map((link) => (
                <div key={link.id} className="flex items-center">
                  <span onClick={() => setIsActive(isActive === link.id ? null : link.id)} className="flex items-center gap-2 cursor-pointer hover:text-white hover:underline transition-all duration-300 ease">
                    <span>{link.link}</span>
                    <img src="/images/icon-arrow-light.svg" className={`max-w-3 max-h-3 duration-300 transform transition-transform ${isActive === link.id ? `rotate-180` : `rotate-0`}`} />
                  </span>

                  {isActive === link.id &&
                    <div className="absolute -bottom-28  p-5  rounded-lg bg-white text-gray-600 min-w-25">
                      {link.options.map((option) => (
                        <p key={option} className="cursor-pointer hover:text-gray-950  transform duration-300 ">{option}</p>
                      ))}
                    </div>}
                </div>

              ))}
            </div>

            <div className="gap-1.5 hidden md:flex">
              <button className="cursor-pointer py-2 px-6 rounded-full text-white">Login</button>
              <button className="cursor-pointer py-2 px-6 rounded-full bg-white text-red-550 font-semibold hover:bg-white/40 hover:text-white transition-color duration-300">sign in</button>
            </div>

          </div>

          {/* hamberger menu */}
          {isOpen ?
            <button className="md:hidden hover:cursor-pointer" onClick={() => setIsOpen(false)}>
              <X />
            </button> :
            <button className="md:hidden hover:cursor-pointer w-6 h-6" onClick={() => setIsOpen(true)}>
              <Menu />
            </button>
          }

          {/* dropdown menu */}
          {isOpen && (
            <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {links.map((link) => (
                <div key={link.id} className="flex flex-col gap-3">
                  <h3 className="font-semibold ">{link.link}</h3>
                  {link.options.map((option) => (
                    <p key={option.id} className="cursor-pointer hover:text-gray-950  transform duration-300 ">{option.label}</p>
                  ))}
                </div>
              ))}
            </Dropdown>
          )}

        </nav>


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