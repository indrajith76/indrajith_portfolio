import React from "react";

const Projects = () => {
  return (
    <section className="mb-40">
      <h2 className="text-6xl font-semibold text-slate-700">Projects</h2>
      <p className="border-b-8 w-28 ml-[108px] border-primary"></p>
      <div>
        {
            [1,2,3,4,5].map(project => {
                <div >
                    
                </div>
            })
        }
      </div>
    </section>
  );
};

export default Projects;
