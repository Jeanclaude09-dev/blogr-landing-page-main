import { useState } from "react";
// import logo from "/src/assets/images/logo.svg"
import { Menu, X } from "lucide-react";
import { Dropdown } from "./DrapdownPanel";

export const Nav = () => {
  const [isActive, setIsActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 0,
      link: "Product",
      options: [
        { id: 0, label: "Overview" },
        { id: 1, label: "Pricing" },
        { id: 2, label: "Marketplace" },
        { id: 3, label: "Features" },
        { id: 4, label: "Integrations" },
      ],
    },
    {
      id: 1,
      link: "Company",
      options: [
        { id: 0, label: "About" },
        { id: 1, label: "Team" },
        { id: 2, label: "Blog" },
        { id: 3, label: "Careers" },
      ],
    },
    {
      id: 2,
      link: "Connect",
      options: [
        { id: 0, label: "Contact" },
        { id: 1, label: "Newsletter" },
        { id: 2, label: "LinkedIn" },
      ],
    },
  ];

  return (
    <nav className="relative flex items-center justify-between  py-2 text-white/70 gap-10">
      {/* left nav */}
      <a href="#">
        <img src="/images/logo.svg" alt="blogr logo" />
      </a>

      {/* Right nav */}
      <div className="w-full flex justify-between ">
        <div className="gap-4 hidden md:flex ">
          {links.map((link) => (
            <div key={link.id} className="flex items-center">
              <span
                onClick={() =>
                  setIsActive(isActive === link.id ? null : link.id)
                }
                className="flex items-center gap-2 cursor-pointer hover:text-white hover:underline transition-all duration-200 ease"
              >
                <span>{link.link}</span>
                <img
                  src="/images/icon-arrow-light.svg"
                  className={`max-w-3 max-h-3 duration-200 transform transition-transform ${isActive === link.id ? `rotate-180` : `rotate-0`}`}
                />
              </span>

              {isActive === link.id && (
                <div className="absolute top-full  p-5  rounded-lg bg-white text-gray-600 min-w-25">
                  {link.options.map((option) => (
                    <p
                      key={option.id}
                      className="cursor-pointer hover:text-gray-950  transform duration-200 "
                    >
                      {option.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="gap-1.5 hidden md:flex">
          <button className="cursor-pointer py-2 px-6 rounded-full text-white">
            Login
          </button>
          <button className="cursor-pointer py-2 px-6 rounded-full bg-white text-red-550 font-semibold hover:bg-white/40 hover:text-white transition-color duration-200">
            Sign Up
          </button>
        </div>
      </div>

      {/* hamberger menu */}
      {isOpen ? (
        <button
          className="md:hidden hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
      ) : (
        <button
          className="md:hidden hover:cursor-pointer w-6 h-6"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      )}

      {/* dropdown menu */}
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {links.map((link) => (
          <div key={link.id} className="w-full">
            <button
              onClick={() => setIsActive(isActive === link.id ? null : link.id)}
              className="flex w-full items-center justify-center gap-2"
            >
              {link.link}

              <img
                src="/images/icon-arrow-dark.svg"
                className={`transition-transform ${
                  isActive === link.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {isActive === link.id && (
              <div className="mt-2 flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-3">
                {link.options.map((option) => (
                  <p key={option.id}>{option.label}</p>
                ))}
              </div>
            )}
          </div>
        ))}

        <hr className="my-2" />

        <div className="flex flex-col gap-3 items-center">
          <button className="font-semibold text-gray-600">Login</button>
          <button className="cursor-pointer py-2 px-6 rounded-full bg-red-550 text-white font-semibold hover:bg-white/40 hover:text-white transition-color duration-200">
            sign in
          </button>
        </div>
      </Dropdown>
    </nav>
  );
};
