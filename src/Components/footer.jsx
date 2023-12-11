import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <div className="footer bg-black text-white h-[300px] font-['Montserrat']">
        <div className="footerContent w-full  flex flex-col md:flex-row justify-between ">
          <div className="left text-center md:text-left  p-3 md:p-[30px]  md:m-[30px] ">
            <span className="footerName text-2xl font-semibold">
              BHAVYA ANAND
            </span>
            <p className="footertext mt-4 text-[1rem] leading-6">
              A web developer with a frontend concentration creates the frontend
              of websites and web applications.
            </p>
          </div>
          <div className="right text-center md:text-left flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-[30px]  md:m-[30px] md:ml-[180px]">
            <span className="socials text-2xl font-semibold ml-[10px] ">
              SOCIALS
            </span>
            <div className="links  mt-[20px] ">
              <SocialIcon
                url="https://www.instagram.com/_bhavya__anand_/"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://leetcode.com/BhavyaAnand0911/"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://github.com/BhavyaAnand0911"
                bgColor="black"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/bhavya-anand0911/"
                bgColor="black"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        <div className="copyright bg-black text-white text-center pb-10 text-base font-light">
          © Copyright 2023. Made by Bhavya Anand
        </div>
      </div>
    </>
  );
};

export default Footer;
