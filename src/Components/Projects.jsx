import user_info from "../data/my_data.js";
import Project from "./Project.jsx";

function Projects() {
  return (
    <div id="projects">
      <div className="py-11 lg:py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 lg:text-5xl xl:text-6xl ">
          PROJECTS
        </h2>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16  ">
        {user_info.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
