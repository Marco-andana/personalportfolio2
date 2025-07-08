import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Portfolio
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/shoeshop.png"
          title="Shoe Shop Website"
          icon="/web.png"
          previewUrl="https://marco-andana.github.io/Shoe-Shop-Landing-Page/"
          detailsUrl="https://github.com/Marco-andana/Shoe-Shop-Landing-Page?tab=readme-ov-file"
          description="Shoe shop website for any of you who want to buy shoe (it was good back then, and now its broken)."
        />
        <ProjectCard
          src="/todo.png"
          title="ToDo Web App"
          description="A Web based application for writing your To-Do List. I create it for my course submission, try it."
        />
        <ProjectCard
          src="/portfolio3.png"
          title="3d Portfolio with threeJS"
          description="A Personal portfolio website with 3d implementation. Using ThreeJS."
        />
      </div>
    </div>
  );
};

export default Projects;
