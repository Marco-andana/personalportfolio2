"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, useInView } from "framer-motion";
import { projectsData } from "@/constants";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  console.log(projectsData)
  console.log(filteredProjects);

    const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Portfolio
      </h1>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
              <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
              />
              <ProjectTag
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
              />
              <ProjectTag
                onClick={handleTagChange}
                name="ML/AI"
                isSelected={tag === "ML/AI"}
              />
              <ProjectTag
                onClick={handleTagChange}
                name="Web3"
                isSelected={tag === "Web3"}
              />
            </div>
      <ul ref={ref} className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {filteredProjects.map((project, index) => {
          return (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              icon={project.icon}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
          )
        })}
      </ul>
    </div>
  );
};

export default Projects;
