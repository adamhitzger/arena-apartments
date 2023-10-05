"use client";

import { useState } from "react";
import Image from "next/image";
import  menu  from "public/img/icons/menu.png"
import close from "public/img/icons/close.png"
import Link from "next/link";

export const navLinks = [
  {
    id: "/",
    title: "Homepage",
  },
  {
    id: "gallery",
    title: "Galerie"
  },
  {
    id: "/#contact",
    title:"Kontakt",
  },
];

export default function Navbar(){
    const [active, setActive] = useState("Homepage");
    const [toggle, setToggle] = useState(false);

    return(
        <>          
          <nav className="w-full flex py-6 justify-between items-center navbar">
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
                className = {`font-poppins font-normal cursor-pointer text-lg ${
                  active === nav.title ? "text-green-500": "text-black"
                } ${index === navLinks.length -1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
              <div className="sm:hidden flex flex-1 justify-end items-center">
              <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu }
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-green-500" : "text-black"
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

          </nav>
        </>
    );
};