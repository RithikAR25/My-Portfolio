import React from "react";
import { Button } from "@mui/material";

interface AnimatedButtonProps {
  href: string; // Keep href for passing sectionId
  spanText: string;
  afterContent: string;
  onClick?: () => void; // Add the onClick prop for smooth scrolling
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  spanText,
  afterContent,
  onClick, // Smooth scroll handler
}) => {
  return (
    <Button
      variant="text"
      color="primary"
      disableRipple={true}
      onClick={onClick} // Trigger smooth scrolling onClick
      sx={{
        position: "relative", // Ensures the ::after element is positioned relative to the button
        color: "text.secondary",
        backgroundColor: "transparent", // Disable background color change on hover
        boxShadow: "none", // Disable shadow on hover
        overflow: "hidden", // Ensures the text doesn't overflow while animating
        display: "inline-block", // Needed to apply the hover effect correctly
        width: "100%", // Ensures the button spans 100% width for proper centering
        textAlign: "center", // Centers the text inside the button
        transition: "color 2s",
        "&:hover": {
          color: "primary.main", // Changes color on hover
        },
        "& span": {
          display: "block",
          transition: "transform 0.3s",
          transform: "translateY(0)", // Initial position
          width: "100%", // Ensure the span is 100% width for centering
          // Responsive font sizes
          fontSize: "4vw", // Default fallback
          "@media (min-width: 0px)": {
            // xs
            fontSize: "1vw",
          },
          "@media (min-width: 600px)": {
            // sm
            fontSize: "1.5vw",
          },
          "@media (min-width: 900px)": {
            // md
            fontSize: "1.25vw",
          },
          "@media (min-width: 1200px)": {
            // lg
            fontSize: "1.2vw",
          },
          "@media (min-width: 1536px)": {
            // xl
            fontSize: "1.3vw",
          },
        },
        "&:hover span": {
          transform: "translateY(-100%)", // Move text up on hover
        },
        "&::after": {
          content: `"${afterContent}"`, // Replicating the text content dynamically
          position: "absolute",
          left: 0, // Aligns the pseudo-element to the left
          right: 0, // Ensures it stretches across the button width
          top: "100%", // Positioned below the button initially
          textAlign: "center", // Centers the text within the pseudo-element
          transform: "translateY(0)", // Initially stays below the button
          transition: "transform 0.6s", // Smooth transition of the text
          // Responsive font sizes for afterContent
          fontSize: "4vw", // Default fallback
          "@media (min-width: 0px)": {
            // xs
            fontSize: "1vw",
          },
          "@media (min-width: 600px)": {
            // sm
            fontSize: "1.5vw",
          },
          "@media (min-width: 900px)": {
            // md
            fontSize: "1.25vw",
          },
          "@media (min-width: 1200px)": {
            // lg
            fontSize: "1.2vw",
          },
          "@media (min-width: 1536px)": {
            // xl
            fontSize: "1.3vw",
          },
        },
        "&:hover::after": {
          transform: "translateY(-125%)", // Roll the new text up to the button's position
        },
      }}
    >
      <span>{spanText}</span>
    </Button>
  );
};

export default AnimatedButton;
