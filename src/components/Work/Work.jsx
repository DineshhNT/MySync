import React from "react";
import { Link } from "react-router-dom";
import { projects, Teammembers } from "../../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Work = () => {
  const displayedProjects = projects.slice(0, 3);

  return (
    <section
      id="work"
      className="py-24 px-[6vw] sm:px-[5vw] md:px-[4vw] lg:px-[8vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-fuchsia-600 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Ideas. Built. Deployed. Disrupting boundaries.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {displayedProjects.map((project) => {
          // Match only those members that exist in project.teammembers
          const matchedMembers = Teammembers.filter((member) =>
            project.teammembers?.includes(member.id)
          );

          return (
            <div
              key={project.id}
              className="relative group bg-gray-400/10 border border-gray-600 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 w-full max-w-[420px] min-h-[450px] flex flex-col overflow-hidden"
            >
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-fuchsia-600/5 via-purple-800/5 to-fuchsia-600/5 pointer-events-none" />

              {/* Domain Tag */}
              <div className="absolute top-4 right-4 bg-gray-300/10 text-xs font-semibold text-gray-300 px-3 py-1 rounded-full z-10">
                {project.domain || "Fullstack"}
              </div>

              {/* Thumbnail */}
              <div className="p-2 pb-0">
                <div className="w-full h-48 overflow-hidden rounded-xl border border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pt-4 flex flex-col justify-between flex-1">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38]/10 text-xs text-gray-400 border border-gray-400 px-2 py-1 rounded-full mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-4" />

                {/* Team & Link */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {matchedMembers.map((member, idx) => (
                      <img
                        key={idx}
                        src={member.img}
                        alt={member.name}
                        className={`w-8 h-8 rounded-full border-2 border-gray-300/5 ${
                          idx !== 0 ? "-ml-2" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <FaExternalLinkAlt className="text-purple-800 text-xl" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects CTA */}
      <div className="mt-24 text-center">
        <div className="relative flex items-center justify-center mb-8">
          <hr className="w-1/4 border-gray-700" />
          <span className="mx-4 text-lg text-gray-400 font-semibold">
            Discover my work in detail !
          </span>
          <hr className="w-1/4 border-gray-700" />
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-fuchsia-600 to-purple-800"
          style={{
            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.4)",
          }}
        >
          View All Projects
          <HiOutlineArrowRight className="ml-3 text-xl sm:text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default Work;
