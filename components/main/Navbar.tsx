import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center shrink-0"
        >
          <Image
            src="/umerqayyumNew.jpeg"
            alt="logo"
            width={38}
            height={38}
            className="cursor-pointer rounded-full hover:animate-slowspin w-[38px] h-[38px] "
          />

          <span className="font-bold ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
Umer Qayyum          </span>
        </a>

        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 text-white">
          <a target="_blank" href="chumera3@gmail.com?subject=Inquiry&body=Hello, I would like to discuss this project idea...">
            <span className="text-xl text-gray-300 transition-all hover:text-white cursor-pointer">
              <MdEmail />
            </span>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/umer-qayyum-9498612b2/">
            <span className="text-lg text-gray-300 transition-all hover:text-white cursor-pointer">
              <IoLogoLinkedin />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
