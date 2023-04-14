import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark ,faBars} from '@fortawesome/free-solid-svg-icons'
import { logo } from '../images/img'

const Nav = () => {
    const [toggle,settoggle] =useState(false)
  return (
 
         
        <nav  class=" p-7 font-poppins text-md ">
            
            <div class="hidden md:flex justify-between ">
                <img class="  h-10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/V-logo.svg/2048px-V-logo.svg.png' alt=""/>


                <div class="hidden md:flex gap-x-7">
                    <a class="mx-5 font-medium hover-underline-animation  duration-300 "href="#About">ABOUT</a>
                    <a class="mx-7 font-medium hover-underline-animation   duration-300 "href="#Project">PROJECT</a>
                    <a class="mx-5 font-medium hover-underline-animation   duration-300"href="#Contact">CONTACT</a>
                </div>
            </div>    
            <div class="flex justify-between md:hidden ">
            <img class=" h-9" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/V-logo.svg/2048px-V-logo.svg.png' alt=""/>
           
            
                <button class=" mobile-menu-button md:hidden " onClick={(()=> settoggle(prev => !prev))}>
                 
                 <FontAwesomeIcon className='transition ease-in-out' icon={toggle ? faXmark : faBars } size="2x" style={{color: "#fff",}} />
                   

                </button>
            </div >
            <div className={toggle ? "inline-block ": "hidden"}>
            <div class="flex flex-col gap-y-3 md:hidden mobile-menu mt-5 ml-[13rem] text-center">
                    <a class="p-2 rounded-xl font-normal  hover:text-white/50 bg-violet"href="#About">ABOUT</a>
                    <a class="p-2 rounded-xl font-normal  hover:text-white/50  bg-violet "href="#Project">PROJECT</a>
                    <a class="p-2 rounded-xl  font-normal  hover:text-white/50 bg-violet "href="#Contact">CONTACT</a>
              </div> 
            </div>
              
        </nav>
  )
}

export default Nav