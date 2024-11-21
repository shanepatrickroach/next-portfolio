'use client'

import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectsList from "@/components/ProjectsList";
import React, { useEffect } from "react";

const page = () => {

  // useEffect(() => {
  //   const cardContainer = document.querySelector(".glowing-cards");
  //   const cards = document.querySelectorAll(".glowing-cards .card");

  //   cardContainer.addEventListener("mousemove", (e) => {
  //     cards.forEach((card) => {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;

  //       card.style.setProperty("--x", `${x}px`);
  //       card.style.setProperty("--y", `${y}px`);
  //     });
  //   });
  // },[]);

  return (
    <div className="flex flex-col gap-10">
      <FeaturedProjects/>
     <ProjectsList />
    </div>
  );
};

export default page;
