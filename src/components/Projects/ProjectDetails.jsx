// src/pages/ProjectDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects, Teammembers } from "../../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAccessTime, MdPeople, MdDns } from "react-icons/md";
import Footer from "../Footer/Footer"; // Import the Footer component here

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id.toString() === id);

  const [showBack, setShowBack] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBack(false);
      } else {
        setShowBack(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="text-center py-24 text-white">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="border border-gray-600 px-4 py-2 rounded-full hover:bg-purple-700 transition text-white"
        >
          &larr; Back to Projects
        </button>
      </div>
    );
  }

  const allTags = [...(project.tags || []), ...(project.extraTags || [])];

  return (
    <> {/* Use a React Fragment to wrap everything */}
      <section className="px-6 md:px-12 py-6 font-sans max-w-7xl mx-auto relative">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="fixed top-6 left-4 md:left-8 z-50 border border-gray-700 px-5 py-2 rounded-full hover:bg-fuchsia-600 hover:scale-105 transition text-gray-200"
          >
            Back to Projects
          </button>
        )}

        <div className="relative mb-10">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-[2rem] border border-gray-700 bg-white/5 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-center relative z-10"
            />
          </div>
          <div className="absolute top-5 right-5 bg-gray-900 border border-gray-700 text-xs font-semibold text-white px-4 py-1 rounded-full">
            {project.domain || "Fullstack"}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6">{project.title}</h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start">
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-3">
                Project Overview
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            {project.teammembers?.length > 0 && (
              <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-4 ">
                  Team Members
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.teammembers.map((id, idx) => {
                    const member = Teammembers.find((m) => m.id === id);
                    return (
                      <div
                        key={idx}
                        className="flex gap-4 bg-gray-900/40 p-4 rounded-lg items-center"
                      >
                        <img
                          src={member?.img}
                          alt={member?.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-700"
                        />
                        <div>
                          <p className="text-gray-300 font-semibold text-sm sm:text-base">
                            {member?.name}
                          </p>
                          <div className="flex gap-2 mt-1 flex-wrap text-sm">
                            {member?.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-400 hover:text-gray-200"
                              >
                                <FaLinkedin /> LinkedIn
                              </a>
                            )}
                            {member?.github && (
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-400 hover:text-gray-200"
                              >
                                <FaGithub /> GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-8">
            <div className="bg-gray-800/20 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg sm:text-xl text-white font-semibold mb-4">
                Project Details
              </h3>
              <div className="text-gray-300 space-y-3">
                {project.duration && (
                  <p className="flex items-center text-sm sm:text-base">
                    <MdAccessTime className="mr-2 text-fuchsia-600" />
                    <span className="font-semibold">Duration : </span> {project.duration}
                  </p>
                )}
                <p className="flex items-center text-sm sm:text-base">
                  <MdDns className="mr-2 text-fuchsia-600" />
                  <span className="font-semibold">Domain : </span> {project.domain || "Fullstack"}
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <MdPeople className="mr-2 text-fuchsia-600" />
                  <span className="font-semibold">Team Size : </span> {project.teammembers?.length || 1}
                </p>
              </div>
            </div>

            <div className="bg-gray-800/20 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap">
                {allTags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#251f38]/10 text-xs text-gray-400 border border-gray-400 px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-gray-500 text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold hover:scale-105 transition text-center"
          >
            GitHub Code
          </a>
          <a
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-fuchsia-600 to-purple-800 text-gray-300 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold hover:scale-105 transition text-center"
          >
            Live Demo
          </a>
        </div>
      </section>
      
      <Footer /> {/* Add the Footer component here */}
    </>
  );
};

export default ProjectDetails;