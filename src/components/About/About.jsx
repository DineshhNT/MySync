import React from "react";
import { motion } from "framer-motion";
import { MyDetails } from "../../constants";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full pt-16 sm:pb-16 md:pb-20 px-4 sm:px-8 lg:px-20 scroll-mt-20"
    >
      {/* Title + Quote */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100">ABOUT ME</h2>
        <div className="w-24 md:w-32 h-1 bg-fuchsia-600 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-3 text-base md:text-lg font-semibold">
          Code. Design. Deliver.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
        
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] rounded-2xl p-1 overflow-hidden"
            style={{
              background: "linear-gradient(45deg, #8245ec, #fuchsia-600, #purple-800)",
              backgroundSize: "200% 200%",
              boxShadow: "0 0 5px 2px rgba(130, 69, 236, 0.25)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              boxShadow: [
                "0 0 5px 2px rgba(130, 69, 236, 0.25)",
                "0 0 10px 5px rgba(130, 69, 236, 0.4)",
                "0 0 5px 2px rgba(130, 69, 236, 0.25)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={MyDetails[0].profileImage}
              alt="Dinesh N T"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left "
        >
          {/* Paragraph Box */}
          <div className="border border-gray-700 rounded-2xl p-4 text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Passionate Developer with expertise in AI, Machine Learning and Full-Stack Development,
            blending intelligence with intuitive design.Graduate in B.Tech - AI & Data Science at Kathir
            College of Engineering,I thrive on building impactful AI solutions and cutting-edge applications.
            Driven by innovation,I craft technology that shapes the future. 🫧
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-full">
            {/* Years */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2 bg-gray-900/50"
            >
              <div className="text-2xl font-bold text-fuchsia-600">2+</div>
              <p className="text-gray-400 text-sm text-center">Years Experience</p>
            </motion.div>

            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2 bg-gray-900/50"
            >
              <div className="text-2xl font-bold text-fuchsia-600">10+</div>
              <p className="text-gray-400 text-sm text-center">Projects Completed</p>
            </motion.div>

            {/* Clients */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-2 bg-gray-900/50"
            >
              <div className="text-2xl font-bold text-fuchsia-600">100%</div>
              <p className="text-gray-400 text-sm text-center">Client Satisfaction</p>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <a
              href={MyDetails[0].cv}
              download
              className="inline-flex items-center text-gray-300 px-6 py-5 rounded-2xl text-base sm:text-lg font-semibold shadow-lg bg-gradient-to-r from-fuchsia-600 to-purple-800 hover:scale-105 hover:shadow-purple-600/50 transition-all duration-300"
            >
              Download CV
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center text-gray-300 px-6 py-5 rounded-2xl text-base sm:text-lg font-semibold shadow-lg bg-gray-800 border border-gray-700 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
