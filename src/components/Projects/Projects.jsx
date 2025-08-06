import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, Teammembers } from "../../constants";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchLower) ||
      project.domain.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Full-Stack" && project.domain === "Fullstack") ||
      (activeFilter === "AI/ML" && project.domain === "AI/ML");

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <motion.section
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        className="px-[2vw] md:px-[4vw] lg:px-[4vw] font-sans relative min-h-screen"
      >
        {/* Fixed Back button */}
        <button
          onClick={() => navigate(-1)}
          className="left-10 z-[9999] text-gray-100 border border-gray-600 px-8 py-2 rounded-full hover:bg-fuchsia-600 transition backdrop-blur-lg"
        >
          Back
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white pt-8">All Projects</h2>
          <div className="w-32 h-1 bg-fuchsia-600 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            From building web apps to developing AI/ML systems, here's a glimpse of my work.
          </p>
        </div>

        {/* Search Box */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by Project Name, Domain or Technology"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 rounded-xl bg-gray-900 text-gray-200 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            "All",
            "Full-Stack",
            "AI/ML"
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-xl border border-gray-600 backdrop-blur-md transition-all 
                ${activeFilter === filter
                  ? "bg-fuchsia-600 text-gray-200"
                  : "bg-gray-400/10 text-gray-300 hover:bg-fuchsia-600 hover:text-gray-100"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative bg-gray-400/10 border border-gray-600 rounded-2xl shadow-lg cursor-pointer hover:-translate-y-2 transition-all duration-300 w-full max-w-[420px] min-h-[450px] flex flex-col"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-fuchsia-600/5 via-purple-800/5 to-fuchsia-600/5 pointer-events-none rounded-2xl z-0" />

              <div className="p-2 pb-0 z-10">
                <div className="w-full h-48 overflow-hidden rounded-xl border border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-gray-800/5 border border-gray-700 text-xs font-semibold text-gray-300 px-3 py-1 rounded-full z-10">
                {project.domain || "Fullstack"}
              </div>

              <div className="p-5 pb-3 flex flex-col justify-between flex-1 z-10">
                <div>
                  <h3 className="text-xm font-bold text-gray-100 mb-3">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#251f38]/10 text-xs text-gray-400 border border-gray-400 px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <hr className="border-gray-700 mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {(project.teammembers || []).map((id, idx) => {
                        const member = Teammembers.find((m) => m.id === id);
                        return (
                          <img
                            key={idx}
                            src={member?.img}
                            alt={member?.name}
                            className={`w-8 h-8 rounded-full border-2 border-gray-800 object-fill ${idx !== 0 ? "-ml-2" : ""}`}
                          />
                        );
                      })}
                    </div>
                    <FaExternalLinkAlt className="text-purple-800 text-xl" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Projects;
