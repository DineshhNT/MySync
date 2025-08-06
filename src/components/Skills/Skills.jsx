import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">SKILLS</h2>
      <div className="w-24 h-1 bg-fuchsia-600 mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Tools of the trade, tuned for tomorrow.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col items-center gap-16">
      {SkillsInfo.map((category) => (
        <div key={category.title} className="w-full max-w-6xl text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
            {category.title}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center border border-gray-500 rounded-full px-4 py-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white mr-3">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base text-gray-200 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
