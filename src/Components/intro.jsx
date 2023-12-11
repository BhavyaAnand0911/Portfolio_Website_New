import { Link } from "react-scroll";
import React from "react";
import github from "../assets/github.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import leet from "../assets/leetcode.png";
import backGround from "../assets/background.jpeg"; //

const Intro = () => {
  const backGroundStyle = {
    backgroundImage: `url(${backGround})`,
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section
        className="intro md:w-full h-[95vh]  flex items-center justify-center text-center font-['Montserrat'] bg-cover"
        style={backGroundStyle}
      >
        <div className="hidden lg:absolute md:flex flex-col justify-between items-center pt-4 pb-4 bg-gray-500  left-0 rounded-tr-xl rounded-br-xl h-80 w-16">
          <a href="https://www.instagram.com/_bhavya__anand_/" target="_blank">
            <img
              src={insta}
              alt="links"
              className="link h-10 w-10 transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
            ></img>
          </a>
          <a href="https://github.com/BhavyaAnand0911" target="_blank">
            <img
              src={github}
              alt="links"
              className="link h-10 w-10 transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-anand0911/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="links"
              className="link h-10 w-10 transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
            ></img>
          </a>
          <a href="https://leetcode.com/BhavyaAnand0911/" target="_blank">
            <img
              src={leet}
              alt="links"
              className="link h-10 w-10 transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
            ></img>
          </a>
        </div>

        <div className="introContent flex flex-col justify-center items-center">
          <span className="hello text-4xl md:text-[4rem] lg:text-[4rem] xl:text-[4rem] font-bold text-white">
            HEY,
            <span className="ml-6">
              I'M
              <span className="mb-4 md:mb-6 lg:mb-6 xl:mb-6 ml-5 text-purpleCustom text-4xl md:text-6xl lg:text-6xl xl:text-6xl">
                BHAVYA ANAND
              </span>
            </span>
          </span>
          <br></br>
          <span className="text-xl mt-4 md:mt-6 lg:mt-6 xl:mt-6 mb-4 md:mb-6 lg:mb-6 xl:mb-6 md:text-[3rem] lg:text-[3rem] xl:text-[3rem] font-bold text-white">
            Website Developer
          </span>
          <p className="text-white mt-4 md:mt-6 lg:mt-6 xl:mt-6 mb-4 md:mb-6 lg:mb-6 xl:mb-6 text-lg md:text-[1.8rem] lg:text-[1.8rem] xl:text-[1.8rem] w-[60%] ">
            I am a skilled Web Developer experienced in creating visually
            appealing and user-friendly websites.
          </p>
          <button
            className="mt-12 w-60 h-16 rounded-lg text-white text-lg md:text-xl lg:text-xl xl:text-xl font-semibold transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
            style={{ backgroundColor: "#da38da" }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={40}
              duration={600}
            >
              PROJECTS
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Intro;
