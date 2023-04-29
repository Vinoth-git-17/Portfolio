import React from "react";
import { react, node, java } from "../images/img";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = () => {
  //function to get Icons
  function Icon(name) {
    return (
      <div className="w-20 h-20 text-center ">
        <FontAwesomeIcon
          className="h-12 sm:h-20"
          icon={name}
       
        />
        
      </div>
    );
  }

  return (
    <section id="#Skill" class="mb-40 mx-10">
      <h1 className="text-4xl  font-Poppins  drop-shadow-lg text-center ">
        SKILLS
     
      </h1> 
      

      <div className="flex flex-wrap justify-around mt-20 gap-y-10">
        {Icon(faHtml5)}
        {Icon(faCss3Alt)}
        {Icon(faJs)}
        {Icon(faBootstrap)}
        {Icon(faReact)}
        {Icon(faNode)}
       
      </div>
    </section>
  );
};

export default Skill;
