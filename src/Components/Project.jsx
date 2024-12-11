import { CiLink } from "react-icons/ci";
import PropTypes from "prop-types";

function Project({ title, description, technologies, link, github }) {
  return (
    <div className="bg-zinc-200 hover:bg-zinc-100  hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      <div className="flex gap-2  py-2">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-600 text-zinc-200"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 mt-4">{title}</h3>
      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500  font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-600 font-medium">
        {/* =========== PROJECT LINK =========== */}
        <a
          href={link}
          className="flex gap-2 mt-4 hover:text-purple-600  cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a
          href={github}
          className="flex gap-2 mt-4 hover:text-purple-600  cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  );
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
