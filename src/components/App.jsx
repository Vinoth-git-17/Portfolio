import React from "react";
import Nav from "./Nav";
import About from "./Aboutme";
import Home from "./Homepage";
import Skill from "./Skill";
import Footer from "./Footer";
import ProjectCard from "./Projectcard";
import { bgImg } from "../images/img";
import "../styles/index.css"

function App() {
  return (

    <div
      className="font-poppins text-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <Home />
      <About />
      <Skill />
      <ProjectCard/>
      <Footer />
    </div>
  );
}

export default App;
