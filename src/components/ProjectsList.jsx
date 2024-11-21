import React from "react";
import { projects } from "../../utils/dataProjects";

const ProjectsList = () => {
  const projectsData = projects;

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Projects</h2>
      <ul className="flex flex-col gap-3">
        {projectsData.map((project, projectIndex) => {
          return (
            <li key={projectIndex}>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.description}</p>

                  <div className="flex gap-3">
                    {project.technologies.map((tool, toolIndex)=>{
                      return (
                        <div key={toolIndex} className="badge badge-outline mt-4">
                          {tool}

                        </div>
                      )
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

export default ProjectsList;
