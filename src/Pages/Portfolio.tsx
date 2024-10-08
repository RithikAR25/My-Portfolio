import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import ThemeToggleButton from "../Components/ThemeToggleButton"; // Import the new component
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import Carousel from "../Components/Blog/Carousel";
import Blog from "../Components/Blog/Blog";

interface PortfolioProps {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ themeMode, toggleTheme }) => {
  return (
    <>
      <Box id="home">
        <Home />
      </Box>
      <Navbar />
      <Box id="about" sx={{ paddingTop: "10vh" }}>
        <About />
      </Box>
      <Box id="projects" sx={{ paddingTop: "10vh" }}>
        <Projects />
      </Box>

      <Box id="skills" sx={{ paddingTop: "10vh" }}>
        <Skills />
      </Box>
      <Box id="blog" sx={{ paddingTop: "10vh" }}>
        <Blog />
      </Box>
      <Box id="contact" sx={{ paddingTop: "10vh" }}>
        <Contact />
      </Box>

      {/* Use the ThemeToggleButton component */}
      <ThemeToggleButton themeMode={themeMode} toggleTheme={toggleTheme} />
      <ScrollToTopButton />
    </>
  );
};

export default Portfolio;
