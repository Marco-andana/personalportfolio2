"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Pp from "public/pp.png";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
    
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Marco{" "}
            </span>
            The Creator of this website
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I’m a passionate developer with expertise in software engineering, web development, and ML/AI. 
          I enjoy tackling challenges, from building robust web apps to exploring robotics and AI. 
          My goal is to create innovative solutions and push the boundaries of technology.
        </motion.p>
      </div>

      <motion.div
              variants={slideInFromRight(0.8)}
              className="w-full h-full flex justify-center items-center"
            >
             <Image
                  src={Pp}
                  alt="pp image"
                  height={400}
                  width={400}
                  className="rounded-full object-cover"
              />
            </motion.div>

     </motion.div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
