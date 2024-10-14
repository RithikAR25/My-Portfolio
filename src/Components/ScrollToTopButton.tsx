import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";

// Define CSS keyframes and animation style
const useStyles = {
  fab: {
    animation: "bounce1 2.5s infinite",
    "@keyframes bounce1": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-7px)",
      },
      "60%": {
        transform: "translateY(-3px)",
      },
    },
  },
};

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }} // Animate appearance based on visibility
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        bottom: "8vh", // Positioned 4rem from the bottom to avoid overlap with other buttons
        right: "2vw", // Positioned 2rem from the right
        pointerEvents: isVisible ? "auto" : "none", // Disable interaction when not visible
      }}
    >
      <Fab
        sx={{
          backgroundColor: "transparent", // Making the button color transparent
          boxShadow: "none", // Removing the shadow effect
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight hover effect to indicate interaction
          },
          ...useStyles.fab, // Apply the bounce animation
        }}
        aria-label="scroll to top"
        onClick={scrollToTop}
      >
        <KeyboardDoubleArrowUpIcon sx={{ color: "text.secondary" }} />
      </Fab>
    </motion.div>
  );
};

export default ScrollToTopButton;
