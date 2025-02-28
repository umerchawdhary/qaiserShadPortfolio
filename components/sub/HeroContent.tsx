"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="flex flex-row gap-[10px]" >
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Qaiser Shad Portfolio
            </h1>
          </motion.div>
          <motion.a
            variants={slideInFromLeft(1)}
            className="button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] py-2 px-2"
            href="/RESUME M QAISER.pdf" // Apni CV ka actual path yahan daalna
            download="RESUME M QAISER.pdf"
          >
            Download CV
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Accounting Experience    </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-5 max-w-[600px]"
        >
          10+ years experienced accountant with a strong passion for financial accuracy and efficient record-keeping        </motion.p>
        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Proficient in financial reporting, budgeting, and tax regulations, with a deep understanding of accounting software such as QuickBooks, SAP, Xero, Excel, financial analysis, auditing, payroll management, compliance, and many more        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/newqaiser.png"
          alt="logo"
          height={650}
          width={650}
          className="cursor-pointer rounded-[20px] hover:animate-slowspin w-[400px] h-[400px] mt-[-174px] "
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
