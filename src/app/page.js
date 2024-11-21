import React from "react";
import HomeHero from "@/components/HomeHero";
import ProjectsList from "@/components/ProjectsList";
import ExperienceList from "@/components/ExperienceList";
import FeaturedProjects from "@/components/FeaturedProjects";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <HomeHero />
      <FeaturedProjects/>
      <ExperienceList/>
    </div>
  );
};

export default HomePage;
