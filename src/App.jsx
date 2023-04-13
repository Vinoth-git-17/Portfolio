import React from "react";
import Nav from "../src/Nav";
import About from "../src/Aboutme";
import Home from "./Homepage";
import Skill from "../src/Skill";
import Footer from "../src/Footer";
import Card from "../src/Projectcard";
import { bgImg } from "../images/img";
import { tindog, spotify } from "../images/img";

function App() {
  return (
    <div
      className="font-poppins text-white"
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
      
      <h1 className="text-4xl font-Poppins  drop-shadow-lg text-center   m-14">PROJECTS</h1>

      <div className="flex flex-wrap justify-center gap-10 px-[50px]">
        
        <Card
         
          img={tindog}
          name="Tindog"
          description="The website is clone of tinder designed for dogs."
          link="https://vtindog.netlify.app/"
        />

        <Card
          img={spotify}
          name="Spotify"
          description="The website is clone of spotify landing page build using react."
          link="https://vspotify.netlify.app/"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
