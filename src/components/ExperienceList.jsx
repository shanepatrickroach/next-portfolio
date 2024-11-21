import React from "react";
import { experience } from "../../utils/dataProjects";

const ExperienceList = () => {

  const [experienceData] = experience
  console.log(experienceData);
  

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Experience</h2>

      <div>
        {experienceData.map((exp, expIndex) => {
          return (
            <div key={expIndex} className="card bg-base-200 w-full shadow-xl mt-5">
              <div className="card-body">
                <p className="text-xs">{exp.duration}</p>
                <h2 className="card-title">{exp.jobTitle}</h2>
                <p className="font-light">{exp.achievements}</p>
                <div className="card-actions mt-6">
                  {exp.skills.map((skill, skillIdx)=>{
                    return (
                      <div key={skillIdx} className="badge badge-outline">
                        {skill}
                      </div>
                    )
                  })}
                </div>

              </div>
              

              




            </div>
          )
        })}
      </div>

    </div>
  );
};

export default ExperienceList;
