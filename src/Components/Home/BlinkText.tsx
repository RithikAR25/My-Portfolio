import { Box, Typography, keyframes } from "@mui/material";
import { useState, useEffect } from "react";

// Define the keyframes for the fade-in and fade-out animations
const fadeOutAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const BlinkText = () => {
  const [isFirstText, setIsFirstText] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Trigger fade-out animation
      setTimeout(() => {
        setIsFirstText((prev) => !prev); // Change the text after fade-out completes
        setIsAnimating(false); // Trigger fade-in animation after the text has changed
      }, 500); // Match the duration of the fade-out animation
    }, 2500); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      width={"100%"}
    >
      {/* Static Text */}

      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: "clamp(1vw, 3.5vw, 3rem)" }}
      >
        Hello! I'm&nbsp;
      </Typography>

      {/* Fading Text */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: "clamp(1vw, 3.5vw, 3rem)",
          animation: isAnimating
            ? `${fadeOutAnimation} 0.5s forwards` // Apply fade-out animation
            : `${fadeInAnimation} 0.5s forwards`, // Apply fade-in animation
          color: "primary.main",
        }}
      >
        {isFirstText ? "Rithik Ramachandran" : "Web Developer"}
      </Typography>
    </Box>
  );
};

export default BlinkText;
