import React from "react";
import SKILL from "./skill.jsx";
import { Link } from "react-scroll";

const About = () => {
  const lineStyle = {
    width: "80px",
    "border-top": "5px solid #da38da",
    "margin-bottom": "30px",
  };
  return (
    <>
      <div className="about min-h-screen  bg-slate-700 w-full flex flex-col items-center leading-20 font-['Montserrat']">
        <span className="mt-20 text-white text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold  mb-5 md:mb-10">
          ABOUT ME
        </span>
        <div style={lineStyle}></div>
        <p className="aboutPara m-3 text-white font-medium text-base md:text-xl lg:text-xl xl:text-xl text-center mt-5 md:mt-10">
          You may learn more about me, what I do, and my current qualifications
          here, which are primarily related to technology and programming.
        </p>
        <div className="aboutSection m-8 md:m-16 flex flex-col md:flex-row justify-center max-w-screen-xl mx-auto">
          <div className="getToKnow md:text-left  p-5 text-center text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold w-full md:w-1/2 text-purpleCustom mb-5 md:mb-0">
            Get to know me!
            <p className="getToKnowMePara leading-8 mt-5 md:mt-10 p-2 text-white text-lg md:text-1xl lg:text-1xl xl:text-1xl font-normal">
              Greetings! 👋 I'm a passionate Frontend Web Developer dedicated to
              crafting exceptional user experiences that play a pivotal role in
              the success of websites and web applications. With a keen eye for
              design, an in-depth understanding of web technologies, and a
              strong familiarity with React, I bring a unique blend of
              creativity and technical expertise to the table.
              <br />
              <br />
              You can connect with me on LinkedIn, where I regularly post
              valuable content related to Web Development and Programming. I
              believe in the power of knowledge-sharing and actively contribute
              to the growth of our community. Let's discuss how I can be a
              valuable addition to your team. Thank you for visiting my profile,
              and I look forward to connecting with you and exploring new
              horizons in the world of web development! 🚀
            </p>
            <button
              className="mt-5 md:mt-10 ml-1 w-full md:w-[14rem] h-[3.5rem] rounded-lg text-white text-lg md:text-xl lg:text-xl xl:text-xl font-semibold transition-transform hover:cursor-pointer hover:transform hover:-translate-y-2 duration-300 ease-in-out"
              style={{ backgroundColor: "#da38da" }}
            >
              <Link
                className="m-8 hover:text-purpleCustom hover:cursor-pointer"
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={600}
              >
                CONTACT ME
              </Link>
            </button>
          </div>
          <div className="skill w-full text-center md:w-1/2">
            <div className="heading   mb-4 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-purpleCustom">
              My Skills
            </div>
            <div className="skills md:m-3 mr-8 grid grid-cols-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
              <SKILL name={"HTML"} />
              <SKILL name={"CSS"} />
              <SKILL name={"JAVASCRIPT"} />
              <SKILL name={"EXPRESS JS"} />
              <SKILL name={"TAILWIND"} />
              <SKILL name={"NODE JS"} />
              <SKILL name={"GITHUB"} />
              <SKILL name={"REACT JS"} />
              <SKILL name={"NEXT JS"} />
              <SKILL name={"GIT"} />
              <SKILL name={"SEO"} />
              <SKILL name={"SASS"} />
              <SKILL name={"SQL"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
