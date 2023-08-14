import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
 
  return (
    <footer id="Contact" className="bg-blue mt-20">
      <div className=" p-20 text-center  ">
        <a href="https://www.instagram.com/_.iamvinothhhh._/">
          <FontAwesomeIcon className=" hover:opacity-50  mx-3" icon={faInstagram} size="xl"/>
        </a>
        <a href="https://www.linkedin.com/in/vinoth-e-402b69231">
          <FontAwesomeIcon className="hover:opacity-50  mx-3 " icon={faLinkedin} size="xl"></FontAwesomeIcon>
        </a>
        <a href="https://github.com/Vinoth-git-17">
          <FontAwesomeIcon className=" hover:opacity-50 mx-3" icon={faGithub} size="xl"></FontAwesomeIcon>
        </a>
        <h2 className="pt-4 date">Copyright © 2023</h2>
      </div>
    </footer>
  );
};

export default Footer;
