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
  return (
    <>
      <div
        className="projects md:w-full min-h-screen  flex flex-col items-center justify-center text-center font-['Montserrat'] bg-cover"
        style={backGroundStyle}
      >
        <span className="projectsHeading mt-8 text-white text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold  mb-5 md:mb-10">
          PROJECTS
        </span>
        <div className="line"></div>
        <p className="projectPara text-white font-medium text-lg md:text-xl lg:text-xl xl:text-xl text-center mt-5 md:mt-10">
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
