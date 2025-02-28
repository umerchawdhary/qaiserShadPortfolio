import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://wa.me/923216897469?text=Hello%20I%20want%20to%20know%20more" target="_blank">
                    <p className="flex flex-row items-center my-3 cursor-pointer">
                            <FaWhatsappSquare />
                            <span className="text-[15px] ml-[6px]">WhatsApp</span>    
                        </p>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-3 cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <a target="_blank" href="https://www.linkedin.com/in/muhammad-qaiser-21357a161?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <p className="flex flex-row items-center my-3 cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <a target="_blank" href="mailto:mqaisershad@gmail.com?subject=Inquiry&body=Hello, I would like to discuss this project idea...">
                        <p className="flex flex-row items-center my-3 cursor-pointer">
                            <span className="text-[15px] ml-[6px]">mqaisershad@gmail.com</span>    
                        </p>
                    </a>
                </div>
            </div>

            <div className="my-[20px] text-[15px] text-center">
                &copy; Qaiser Shad 2025 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer