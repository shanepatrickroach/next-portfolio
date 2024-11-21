import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="socials-container flex gap-5">
      <a href="" className="">
        <FaGithub className="h-10 w-10 social-link"/>
      </a>

      <a href="" className="">
        <FaLinkedin className="h-10 w-10 social-link" />
      </a>
    </div>
  );
};

export default SocialLinks;
