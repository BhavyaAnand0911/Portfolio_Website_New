import React from "react";

const About = () => {
  return (
    <>
      <div className="about h-[100vh] bg-slate-700 w-full flex flex-col items-center leading-20 font-['Montserrat']">
        <span className="mt-8 text-white text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold mt-100 mb-10">
          ABOUT ME
        </span>
        <div className="line w-80 border-t-5 border-purpleCustom mb-30"></div>
        <p className="aboutPara text-white font-semibold text-lg md:text-1.5rem lg:text-1.5rem xl:text-1.5rem text-center ">
          You may learn more about me, what I do, and my current qualifications
          here, which are primarily related to technology and programming.
        </p>
        <div className="aboutSection flex flex-row justify-center items-center">
          <div className="getToKnow text-left p-30 mr-30 w-700 text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-purpleCustom">
            Get to know me!
            <p className="getToKnowMePara leading-6 text-white text-sm md:text-1rem lg:text-1rem xl:text-1rem mt-15">
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
          </div>
          <div className="text-left p-30 mr-30 w-700 text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-purpleCustom">
            My Skills
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi quibusdam possimus sunt veniam consequuntur illum quo,
              architecto esse ut debitis quis qui obcaecati soluta nesciunt
              perspiciatis dolorem accusamus corrupti facere?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
