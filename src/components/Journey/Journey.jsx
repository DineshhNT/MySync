import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JourneyData } from "../../constants";

const Journey = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [expandedEduIndex, setExpandedEduIndex] = useState(null);
  const [expandedExpIndex, setExpandedExpIndex] = useState(null);

  const education = JourneyData.filter((item) => item.type === "education");
  const experiences = JourneyData.filter((item) => item.type === "experience");

  const toggleExpand = (index) => {
    if (activeTab === "education") {
      setExpandedEduIndex(expandedEduIndex === index ? null : index);
    } else {
      setExpandedExpIndex(expandedExpIndex === index ? null : index);
    }
  };

  // Auto collapse after 1 min
  useEffect(() => {
    let timer;
    if (expandedEduIndex !== null) {
      timer = setTimeout(() => setExpandedEduIndex(null), 60000);
    }
    return () => clearTimeout(timer);
  }, [expandedEduIndex]);

  useEffect(() => {
    let timer;
    if (expandedExpIndex !== null) {
      timer = setTimeout(() => setExpandedExpIndex(null), 60000);
    }
    return () => clearTimeout(timer);
  }, [expandedExpIndex]);

  return (
    <section
      id="journey"
      className="py-28 px-[4vw] md:px-[8vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100">JOURNEY</h2>
        <div className="w-24 md:w-32 h-1 bg-fuchsia-600 mx-auto mt-3"></div>
        <p className="text-gray-300 mt-3 text-base md:text-lg font-semibold">
          Every step, a debugged version of me.
        </p>

        <div className="flex justify-center mt-5 space-x-4">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
              activeTab === "education"
                ? "bg-gradient-to-r from-fuchsia-600 to-purple-800 hover:scale-105 text-gray-200"
                : "bg-gray-900 text-gray-200 hover:bg-gray-800"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-fuchsia-600 to-purple-800 hover:scale-105 text-gray-200"
                : "bg-gray-900 text-gray-200 hover:bg-gray-800"
            }`}
          >
            Experience
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          {(activeTab === "education" ? education : experiences).map(
            (item, index) => {
              const isExpanded =
                activeTab === "education"
                  ? expandedEduIndex === index
                  : expandedExpIndex === index;

              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center mb-8"
                >
                  <div
                    className="w-full max-w-xl p-4 sm:p-5 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-xl relative transition-all duration-300 "
                  >
                    {/* URL top left + Date top right */}
                    <div className="flex justify-between items-center mb-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fuchsia-600 underline font-medium text-xs sm:text-sm"
                      >
                        {item.school || item.company}
                      </a>
                      <span className="text-gray-400 text-xs">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                      <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 mb-3 sm:mb-0">
                        <img
                          src={item.img}
                          alt={item.school || item.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-base md:text-lg font-semibold text-gray-300">
                          {item.degree || item.role}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-400 text-sm">
                      {isExpanded
                        ? item.desc
                        : `${item.desc.split(" ").slice(0, 20).join(" ")}...`}
                    </p>

                    {/* Tags */}
                    <ul className="flex flex-wrap mt-4 justify-center sm:justify-start">
                      {activeTab === "education" && item.grade && (
                        <li className="px-3 py-2 text-xs rounded-full mr-2 mb-2 border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-gray-400/10 hover:text-gray-300">
                          CGPA: {item.grade}
                        </li>
                      )}
                      {activeTab === "experience" &&
                        item.skills &&
                        item.skills
                          .slice(0, isExpanded ? item.skills.length : 3)
                          .map((skill, i) => (
                            <li
                              key={i}
                              className="px-3 py-2 text-xs rounded-full mr-2 mb-2 border border-gray-400 text-gray-400 transition-all duration-300 hover:bg-gray-400/10 hover:text-gray-300"
                            >
                              {skill}
                            </li>
                          ))}
                      {activeTab === "experience" &&
                        !isExpanded &&
                        item.skills &&
                        item.skills.length > 3 && (
                          <li className="text-xs text-gray-400">
                            +{item.skills.length - 3} more
                          </li>
                        )}
                    </ul>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-5 w-full border border-gray-700 text-gray-300 font-semibold py-2 text-sm rounded-md transition-all duration-300 hover:bg-gray-400/5 hover:text-gray-300"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Journey;
