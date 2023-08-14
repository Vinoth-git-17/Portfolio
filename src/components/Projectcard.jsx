import React from "react";
import CardDetails from "../static/data";

const Projectcard = () => {
  return (
    <section id="Project">
      <h1 className="text-4xl font-Poppins text-center   m-14">PROJECTS</h1>

      <div className="flex flex-wrap justify-center gap-10 px-[50px]">
        {CardDetails.map((Card) => (
          <div className=" rounded-2xl w-[20rem] h-[300px] bg-white text-black px-10 py-5" key={Card.name}>
            <img className="rounded-lg"  src={Card.img} alt="" />

            <h1 className="text-lg pt-5">{Card.name}</h1>
            <p className="text-sm text-slate-500 mt-2">{Card.description}</p>
            <button className=" mt-5 mx-40 px-4 py-1 rounded-xl ease-in-out delay-100   hover:opacity-90 border border-violet hover:bg-violet  hover:text-white">
              <a href={Card.link} target="_blank">
                Visit{" "}
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projectcard;
