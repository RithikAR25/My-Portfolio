import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const headingRef = useRef<HTMLDivElement>(null); // Ref to track the heading element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set true when visible, false when not
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current); // Observe the heading element
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <Box
      ref={headingRef} // Attach ref to the Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      sx={{
        opacity: isVisible ? 1 : 0, // Apply opacity based on visibility
        transform: isVisible ? "scale(1)" : "scale(0.8)", // Scale up when visible, scale down when not
        transition: "opacity 1s ease, transform 1s ease", // Smooth animation
        padding: { xs: "2rem 0", sm: "0" }, // Add some vertical breathing room on mobile
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "3rem", sm: "10vw" },
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: `1px #c0c0c0`,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        position="absolute"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.2rem", sm: "3vw" },
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: `${theme.palette.primary.main}`,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Heading;
