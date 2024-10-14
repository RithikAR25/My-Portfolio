import React, { useEffect, useRef, useState } from "react"; // Import necessary React hooks
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  // State to track visibility of the footer
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null); // Ref for the footer

  // Intersection Observer to detect when the footer is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.5 } // Trigger when 50% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Observe the footer element
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <Box
      ref={footerRef} // Attach ref to the footer
      component="footer"
      sx={{
        backgroundColor: "secondary.dark", // Sets the background to black
        color: "text.primary", // Sets the text color to white for contrast
        padding: "20px 0",
        textAlign: "center",
        opacity: isVisible ? 1 : 0, // Fade in/out based on visibility
        transform: isVisible ? "translateY(0)" : "translateY(20px)", // Slide in from below
        transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transition
      }}
    >
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} Rithik Ramachandran. All Rights Reserved.
      </Typography>
      <Box mt={2}>
        <Link
          href="https://github.com/RithikAR25"
          color="inherit"
          underline="hover"
        >
          GitHub
        </Link>
        {" | "}
        <Link
          href="https://www.linkedin.com/in/rithik-ramachandran-312698316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJV8M%2FzgeSpCQuQXnMs8chQ%3D%3D"
          color="inherit"
          underline="hover"
        >
          LinkedIn
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
