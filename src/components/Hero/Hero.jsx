import React from "react";
import { motion } from "framer-motion";
import { MyDetails } from "../../constants";
import { SocialLogos } from "../../constants";

// This is the new variant for the name animation, applying to the whole text
const nameVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: "easeOut",
      delay: 0.5, // The name will appear first
    },
  },
};

// This is your main Hero component
const Hero = () => {
  // Animation variants for the social icons
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen pb-10 text-white flex flex-col justify-center items-center overflow-hidden bg-skills-gradient clip-path-custom px-4"
    >
      {/* Mobile Photo Display - Visible on mobile/small screens, hidden on tablets and up */}
      <div className="block md:hidden z-10 mb-6">
        <img
          src={MyDetails[0].profileImage}
          alt="Dinesh N T"
          // Responsive sizing for the image on mobile and small screens
          className="w-42 h-42 sm:w-48 sm:h-48 rounded-2xl border border-gray-900 shadow-lg object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center">
        {/* Name with Lines */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
          {/* Left Line (only on large screens) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "15vw", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-px bg-gray-500 hidden lg:block"
          />

          {/* Name - Now animates as a single block */}
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl pt-4 sm:text-4xl md:text-6xl lg:text-8xl font-bold text-gray-200 tracking-widest font-serif whitespace-nowrap"
          >
            DINESH N T
          </motion.h1>

          {/* Right Line (only on large screens) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "15vw", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-px bg-gray-500 hidden lg:block"
          />
        </div>

        {/* Job Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 2 }}
          className="text-base sm:text-lg md:text-xl pt-4 font-medium text-gray-400"
        >
          AI/ML Enthusiast | Front-End Developer
        </motion.p>

        {/* Social Links with circular containers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex justify-center gap-6 mt-10"
        >
          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/dinesh-n-t-20b0b6256/"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5 }}
            className="w-14 h-14 sm:w-16 sm:h-16 flex border border-gray-700 items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 transform hover:scale-110"
          >
            <img src={SocialLogos.linkedin} alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
          </motion.a>

          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/DineshhNT"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.7 }}
            className="w-14 h-14 sm:w-16 sm:h-16 flex border border-gray-700 items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 transform hover:scale-110"
          >
            <img src={SocialLogos.github} alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="https://www.instagram.com/d_i_n_e_s_h_h_/"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.9 }}
            className="w-14 h-14 sm:w-16 sm:h-16 flex border border-gray-700 items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 transform hover:scale-110"
          >
            <img src={SocialLogos.instagram} alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;