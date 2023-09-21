import React, { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
 
  



  return (
    <nav
      id="Navbar"
      
    >
      <div className="flex justify-between p-5" >
        <img
          className="drop-shadow-lg h-[30px] mt-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/V-logo.svg/2048px-V-logo.svg.png"
          alt=""
        />

        <div className="hidden md:flex gap-x-7 ">
          <a
            className="mx-5 font-medium hover-underline-animation drop-shadow-lg duration-300 "
            href="#About"
          >
            ABOUT
          </a>
          <a
            className="mx-7 font-medium hover-underline-animation drop-shadow-lg  duration-300 "
            href="#Project"
          >
            PROJECT
          </a>
          <a
            className="mx-5 font-medium hover-underline-animation  drop-shadow-lg duration-300"
            href="#Contact"
          >
            CONTACT
          </a>
        </div>

        {/* mobile menu */}
        <div className="md:hidden ">
          <Hamburger
            toggled={isOpen}
            size={25}
            toggle={() => setOpen(!isOpen)}
          />
        </div>
      </div>
      <div
        className={
          isOpen
            ? "absolute bg-violet w-[100%]  text-left px-[15%] py-12 font-bold"
            : "hidden "
        }
      >
        <ul
          className=" flex flex-col gap-y-10 text-lg"
          onClick={() => setOpen(!isOpen)}
        >
         
          <li id="about" className="hover:opacity-50 ">
            <a href="#About">About</a>
          </li>
          <li id="home" className="hover:opacity-50 animate-fade">
            <a href="#Project">Project</a>
          </li>
          <li id="contact" className="hover:opacity-50 ">
            <a href="#Contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
