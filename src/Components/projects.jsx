import React from "react";
import ProjectCard from "./projectCard";
import content from "../assets/Content/project.json";
import backGround from "../assets/background.jpeg";

const arr = Object.values(content);

const projects = () => {
  const backGroundStyle = {
    backgroundImage: `url(${backGround})`,
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  };
  const lineStyle = {
    width: "80px",
    "border-top": "5px solid #da38da",
    "margin-bottom": "30px",
  };
  return (
    <>
      <div
        className="projects md:w-full min-h-screen  flex flex-col items-center justify-center text-center font-['Montserrat'] bg-cover"
        style={backGroundStyle}
      >
        <span className="projectsHeading mt-20 text-white text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold  mb-5 md:mb-10">
          PROJECTS
        </span>
        <div style={lineStyle}></div>
        <p className="projectPara text-white p-4 font-medium text-base md:text-xl lg:text-xl xl:text-xl text-center mt-5 mb-5 md:mt-10">
          You may discover some of my individual projects here, each of which
          has connections to its own code base and deployed web sites.
        </p>
        {arr.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              name={item.name}
              text={item.text}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default projects;
