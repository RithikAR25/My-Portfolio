import React from "react";
import { Fab } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

const useStyles = {
  fab: {
    animation: "fade 5s infinite",
    // Defining the animation keyframes
    "@keyframes fade": {
      // Set opacity changes at different points of the animation
      "0%, 20%, 50%, 80%, 100%": {
        opacity: 1, // Fully visible
      },
      "40%": {
        opacity: 0.5, // Partially faded
      },
      "60%": {
        opacity: 0.3, // More faded
      },
    },
  },
};

interface ThemeToggleButtonProps {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  themeMode,
  toggleTheme,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        bottom: "2vh", // Positioned 2rem from the bottom
        right: "2vw", // Positioned 2rem from the right
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
        aria-label="toggle theme"
        onClick={toggleTheme}
      >
        {themeMode === "dark" ? (
          <Brightness7Icon sx={{ color: "text.secondary" }} />
        ) : (
          <Brightness4Icon sx={{ color: "text.secondary" }} />
        )}
      </Fab>
    </motion.div>
  );
};

export default ThemeToggleButton;
