import React from "react";
import laptop from "../assets/laptop.png";

const ProjectCard = ({ name, text, link }) => {
  return (
    <>
      <div className="card flex flex-row text-white h-600 w-1200">
        <div className="laptop p-40 mr-10 mt-30">
          <img src={laptop} alt="" className="laptopImg h-350 w-650" />
        </div>
        <div className="text text-left p-20 mt-5">
          <p className="heading text-purpleCustom font-semibold text-2xl mb-50 mt-40">
            {name}
          </p>
          {text}
          <br />
          <a href={link} target="_blank">
            <button
              className="projectBtn w-[13rem] h-[3rem]  text-white text-lg font-semibold rounded-lg border-none mt-50 cursor-pointer transition-transform hover:transform hover:-translate-y-2 duration-200 ease"
              style={{ backgroundColor: "#da38da" }}
            >
              CASE STUDY
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
