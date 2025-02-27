import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-20 z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/workinaus.png"
          title="WorkinAUS"
          link={'https://workinaus.com.au/home'}
          description="WorkinAUS is a direct line between the international talent market and Australian employers and recruiters."
        />
        <ProjectCard
          src="/chowmill.png"
          title="Chowmill"
          link={'https://chowmill.com/'}
          description="Noticeably unique office meal services with the largest selection of dishes to satisfy your diverse workforce."
        />
        <ProjectCard
          src="/exploretech.png"
          title="ExploreTECH"
          link={'https://www.exploretech.io/en'}
          description="Discover, Compare and Source the Latest Hospitality and Travel Technology Solutions to Optimize Your Business"
        />
      </div>
    </div>
  );
};

export default Projects;
