import React from "react";
import laptop from "../assets/laptop.png";

const ProjectCard = ({ name, text, link }) => {
  return (
    <>
      <div className="card ml-32 mr-32 flex flex-col md:flex-row text-white h-auto md:h-600 w-[80%] md:w-1200">
        <div className="laptop p-20 mb-6 md:mb-0 md:mr-10">
          <img
            src={laptop}
            alt=""
            className="laptopImg h-[330px] md:h-[330px] w-full md:w-[700px]"
          />
        </div>
        <div className="w-full md:w-[60%] text-left">
          <p className="text-purpleCustom font-semibold text-3xl mb-10 mt-14">
            {name}
          </p>
          <div className="text-xl w-[80%] mb-4 md:mb-0">{text}</div>
          <br />
          <a href={link} target="_blank">
            <button
              className="projectBtn w-[13rem] h-[3rem] mt-12 text-white text-lg font-semibold rounded-lg border-none mt-50 cursor-pointer transition-transform hover:transform hover:-translate-y-2 duration-200 ease"
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
