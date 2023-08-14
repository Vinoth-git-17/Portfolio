import React from "react";

const Homepage = () => {
  return (
    <div id="#Home" className="py-20 text-center px-3">
      <h1 className=" text-4xl sm:text-5xl font-Poppins slideup mt-4">
        {" "}
        Hi,
      </h1>
      <h1 className="  text-7xl sm:text-8xl text-transparent text-gradient font-Poppins  mt-4">
        I'm Vinoth
      </h1>
      <h2 className="sm:text-base mt-4 font-Poppins text-gray-400 ">
        Front end developer
      </h2>
      <a href="mailto: vinothnick17@gmail.com" >
        
        <button className=" m-4 px-4 p-2 rounded-full border-2 border-violet  hover:bg-violet  text-white lg:border-violet lg:text-white lg:hover:bg-violet  ease-in-out delay-100 font-Poppins">
          Contact me 
        </button>
      </a>
    </div>
  );
};

export default Homepage;
