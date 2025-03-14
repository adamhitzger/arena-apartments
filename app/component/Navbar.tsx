"use client";

import { useState } from "react";
import Image from "next/image";
//import menu  from "/img/icons/menu.png"
//import close from "/img/icons/close.png"
import Link from "next/link";

export const navLinks = [
  {
    id: "/",
    title: "Domů",
  },
  {
    id: "gallery",
    title: "Galerie"
  },
  {
    id: "/#contact",
    title: "Kontakt",
  },
  {
    id: "/en/",
    title: "English",
  },
  {
    id: "/de/",
    title: "Deutsch",
  },
];

export default function Navbar() {
  const [active, setActive] = useState("Domů");
  const [toggle, setToggle] = useState(false);

  return (

    <nav className="bg-transparent  w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>

          <div className="w-full flex py-6 justify-between items-center navbar">
            <Link href={"/"}>
              <Image
                width={256}
                height={128}
                src="/img/logo.png"
                alt="Logo"
              />
            </Link>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-lg ${active === nav.title ? "text-green-500" : "text-black"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <Image
                  src={toggle ? "/img/icons/close.png" : "/img/icons/menu.png"}
                  alt="menu"
                  width={24}
                  height={24}
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
                />

                {/* Sidebar */}
                <div
                  className={`${!toggle ? "hidden" : "flex"
                    } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                  <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-green-500" : "text-black"
                          } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                        onClick={() => setActive(nav.title)}
                      >
                        <a href={`${nav.id}`}>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};