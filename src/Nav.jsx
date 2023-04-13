import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark ,faBars} from '@fortawesome/free-solid-svg-icons'
import { logo } from '../images/img'

const Nav = () => {
    const [toggle,settoggle] =useState(false)
  return (
 
         
        <nav  class=" p-7 font-poppins text-md px-[50px]">
            
            <div class="hidden md:flex justify-between ">
                <img class="rounded-2xl h-9" src={logo}alt=""/>


                <div class="hidden md:flex gap-x-7">
                    <a class="mx-5 font-medium hover-underline-animation  set duration-300 "href="#About">ABOUT</a>
                    <a class="mx-7 font-medium hover-underline-animation  set duration-300 "href="#Project">PROJECT</a>
                    <a class="mx-5 font-medium hover-underline-animation  set duration-300"href="#Contact">CONTACT</a>
                </div>
            </div>    
            <div class="flex justify-between md:hidden ">
                <img class="rounded-xl h-9  " src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png"alt=""/>
           
            
                <button class=" mobile-menu-button md:hidden " onClick={(()=> settoggle(prev => !prev))}>
                 
                 <FontAwesomeIcon className='transition ease-in-out' icon={toggle ? faXmark : faBars } size="2x" style={{color: "#fff",}} />
                   

                </button>
            </div >
            <div className={toggle ? "block ": "hidden"}>
            <div class=" md:hidden mobile-menu mt-4 text-right ">
                    <a class="py-3  font-normal block hover:opacity-50 set duration-300"href="#About">ABOUT</a>
                    <a class="py-3 font-normal block hover:opacity-50   set duration-300"href="#Project">PROJECT</a>
                    <a class="py-3   font-normal block hover:opacity-50 set duration-300"href="#Contact">CONTACT</a>
              </div> 
            </div>
              
        </nav>
  )
}

export default Nav