import React from "react";
import { projects } from "../../utils/dataProjects";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

const FeaturedProjects = () => {
  const projectsData = projects;

  const slicedProjects = projectsData.slice(0, 2);

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Featured Projects</h2>
      <ul className="flex gap-6 lg:flex-row sm:flex-col">
        {slicedProjects.map((project, projectIndex) => {
          return (
            <li key={projectIndex}>
              <div className="card h-full featured-card bg-base-300 card-bordered sm:w-full">
                <figure>
                  <img
                    src={project.image}
                    alt={project.description}
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between place-items-center">
                    <h2 className="card-title">{project.name}</h2>
                    <div className="flex gap-2">
                      <a href="">
                        <FaGithubSquare className="project-link" />
                      </a>
                      <a href="">
                        <RiExternalLinkLine className="project-link" />
                      </a>
                    </div>
                  </div>

                  <p className="font-light">{project.description}</p>

                  <div className="flex gap-3">
                    {project.technologies.map((tool, toolIndex) => {
                      return (
                        <div
                          key={toolIndex}
                          className="badge badge-outline mt-4"
                        >
                          {tool}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturedProjects;
