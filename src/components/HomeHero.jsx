import React from "react";
import SocialLinks from "./SocialLinks";

const HomeHero = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="">
        <div className="w-full">
          <h1 className="text-5xl font-medium mb-2">Shane Roach</h1>
          <h3 className="text-2xl font-normal">Front End Engineer</h3>
          <p className="py-6 font-extralight">
            I build (and occasionally design) accessible, beautiful experiences for the web.
          </p>

          <SocialLinks/>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
