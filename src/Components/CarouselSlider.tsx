import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import eagle1 from "../assets/Images/Delhi.png";
import owl1 from "../assets/Images/Harihar_fort.png";
import crow from "../assets/Images/Harihar_fort.png";
import butterfly1 from "../assets/Images/Harihar_fort.png";
import owl2 from "../assets/Images/Harihar_fort.png";
import eagle3 from "../assets/Images/Harihar_fort.png";
import kingfisher2 from "../assets/Images/Harihar_fort.png";
import parrot2 from "../assets/Images/Harihar_fort.png";
import heron from "../assets/Images/Harihar_fort.png";
import butterfly2 from "../assets/Images/Harihar_fort.png";

const images = [
  {
    image: eagle1,
    name: "EAGLE",
    description: "Lorem ipsum dolor sit amet...",
  },
  { image: owl1, name: "OWL", description: "Lorem ipsum dolor sit amet..." },
  { image: crow, name: "CROW", description: "Lorem ipsum dolor sit amet..." },
  {
    image: butterfly1,
    name: "BUTTERFLY",
    description: "Lorem ipsum dolor sit amet...",
  },
  { image: owl2, name: "OWL", description: "Lorem ipsum dolor sit amet..." },
  {
    image: eagle3,
    name: "EAGLE",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    image: kingfisher2,
    name: "KINGFISHER",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    image: parrot2,
    name: "PARROT",
    description: "Lorem ipsum dolor sit amet...",
  },
  { image: heron, name: "HERON", description: "Lorem ipsum dolor sit amet..." },
  {
    image: butterfly2,
    name: "BUTTERFLY",
    description: "Lorem ipsum dolor sit amet...",
  },
];

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeAutoNext = 7000;
  const timeRunning = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, timeAutoNext);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsAnimating(false), timeRunning);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsAnimating(false), timeRunning);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          width: "100%",
        }}
      >
        {images.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              width: "300px",
              position: "absolute",
              top: index === activeIndex ? "20%" : "50%",
              left: `${50 + (index - activeIndex) * 20}%`,
              transform: "translate(-50%, -50%)",
              transition: "all 1s ease-in-out",
              opacity: index === activeIndex ? 1 : 0,
            }}
          >
            {index === activeIndex && (
              <Box sx={{ color: "#fff", textAlign: "center", mt: 2 }}>
                <Typography
                  variant="h4"
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="primary" sx={{ mr: 1 }}>
                    See More
                  </Button>
                  <Button variant="outlined" color="primary">
                    Subscribe
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Arrows for navigation */}
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: "48%",
          display: "flex",
          gap: 2,
        }}
      >
        <Button variant="contained" color="success" onClick={handlePrev}>
          &lt;
        </Button>
        <Button variant="contained" color="success" onClick={handleNext}>
          &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselSlider;
