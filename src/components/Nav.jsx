import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'


const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    
    const [fix, setfixed] = useState(false)
    window.addEventListener("scroll", ()=>{
        if((window.scrollY)>5){
          setfixed(true)
        }
        else{
            setfixed(false)
        }
    })

    
  return (
        
         
        <nav id='Navbar' className={fix ? 'fixed': 'font-poppins text-md '}>
            
            <div className=" hidden md:flex justify-between p-6 ">
                <img className="drop-shadow-lg h-[30px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/V-logo.svg/2048px-V-logo.svg.png' alt=""/>


                <div className="hidden md:flex gap-x-7 ">
                    <a className="mx-5 font-medium hover-underline-animation drop-shadow-lg duration-300 "href="#About">ABOUT</a>
                    <a className="mx-7 font-medium hover-underline-animation drop-shadow-lg  duration-300 "href="#Project">PROJECT</a>
                    <a className="mx-5 font-medium hover-underline-animation  drop-shadow-lg duration-300"href="#Contact">CONTACT</a>
                </div>
            </div>    
            <div className="flex justify-between md:hidden p-6 ">
            <img className="absolute top-4 h-[30px]" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/V-logo.svg/2048px-V-logo.svg.png' alt=""/>
           
              <div className='absolute top-2 right-8'>
             <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
             </div>          
             
            </div >
            <div className={isOpen ? "": "hidden"}>
            <div className="absolute w-[100%] flex flex-col gap-y-3 bg-glass md:hidden mt-6 py-9 text-right px-10 ">
                    <a className="p-2 rounded-xl font-normal  hover:text-white/50"href="#About">ABOUT</a>
                    <a className="p-2 rounded-xl font-normal  hover:text-white/50   "href="#Project">PROJECT</a>
                    <a className="p-2 rounded-xl  font-normal  hover:text-white/50 "href="#Contact">CONTACT</a>
              </div> 
            </div>
              
        </nav>
  )
}

export default Nav