import React from "react";
import {react,node,java} from '../images/img'

const Skill = () => {
  return (
    <section id="#Skill" class="mb-40 px-[50px]">
      <h1 className="text-4xl  font-Poppins  drop-shadow-lg text-center   m-14">
        SKILLS
      </h1>

      <div className="flex">
        <img
          className="h-20 mx-auto "
          src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png"
          alt=""
        />

        <img
          className=" h-20  mx-auto "
          src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
          alt=""
        />

        <img
          className="h-20 mx-auto "
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
          alt=""
        />
      </div>
      <div className="flex ml-5 my-10">
        <img className="h-20 mx-auto" src={react} alt="" />

        <img className="h-20 mx-auto " src={java} alt="" />

        <img className="h-20  mx-auto" src={node} alt="" />
      </div>
    </section>
  );
};

export default Skill;
