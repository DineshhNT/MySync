import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import all your components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Journey from "./components/Journey/Journey";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";

// The Layout component wraps your main content, including the background
const Layout = () => {
  const location = useLocation();

  // Hide Navbar for /projects and /projects/:id
  const hideNavbar = location.pathname.startsWith("/projects");

  return (
    // This is the main container with the dark background color
    <div className="bg-[#050414]">

      {/* The BlurBlob component creates the animated glowing circle */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* This div creates the grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* This div contains all your portfolio sections and pushes them down */}
      <div className="relative pt-20">
        {!hideNavbar && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Journey />
                <Work />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
};

// The main App component sets up the React Router
const App = () => (
  <Router basename="/MySync">
    <Layout />
  </Router>
);

export default App;