import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import BallRoll2 from "../../assets/Images/robot-human-silhouettes.webp"; // Example image import
import DiseasePredictionApp from "../../assets/Images/DiseasePredictionApp.webp";
import ImageGeneration from "../../assets/Images/autism-day-awareness-collage-style-with-people.webp";
import PerkPal from "../../assets/Images/growth-strategy-management-mission-success-concept.webp";
import MindDuel from "../../assets/Images/human-brain-detailed-structure.webp";
import TaskTrace from "../../assets/Images/flat-lay-clean-office-desk.webp";
import Websiteclone from "../../assets/Images/view-half-rhino-with-futuristic-robotic-parts.webp";

const imageData = [
  {
    id: 1,
    title: "Ball-Roll-2",
    description: "3D game made with Unity.",
    img: BallRoll2,
    viewMoreLink: "https://github.com/RithikAR25/Ball-Roll-2",
  },
  {
    id: 2,
    title: "Disease prediction app",
    description: "Predict disease via introduction through chat bot",
    img: DiseasePredictionApp,
    viewMoreLink: "https://github.com/RithikAR25/Ball-Roll-2",
  },
  {
    id: 3,
    title: "Image Generation",
    description:
      "Automatically generate image based on the description given through text input",
    img: ImageGeneration,
    viewMoreLink: "https://github.com/RithikAR25/Ball-Roll-2",
  },
  {
    id: 4,
    title: "PerkPal",
    description: "Incentive web application for employees",
    img: PerkPal,
    viewMoreLink: "https://github.com/RithikAR25/PerkPal.git",
  },
  {
    id: 5,
    title: "Mind Duel",
    description: "Web game using HTML,CSS and JS",
    img: MindDuel,
    viewMoreLink: "https://github.com/Emma-Theresa/MindDuel.git",
  },
  {
    id: 6,
    title: "Task Trace",
    description:
      "web application for tutors that analyzes performance of individual students",
    img: TaskTrace,
    viewMoreLink: "https://github.com/pioneerstealth/TaskTrace.git",
  },
  {
    id: 7,
    title: "Web site clone",
    description: "Web site clone using HTML,CSS",
    img: Websiteclone,
    viewMoreLink: "https://github.com/RithikAR25/HTML-CSS_GG-Hospital.git",
  },
  // Add the remaining image data here
];

const timeRunningDuration = 7000; // Duration for each slide

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0); // Track progress of the time bar
  const timeoutRef = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | undefined>(undefined); // Ref for progress interval

  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      imageData.forEach((item) => {
        const img = new Image();
        img.src = item.img;
      });
    };
    preloadImages(); // Preload images when component mounts
  }, []); // Run only once when the component mounts

  useEffect(() => {
    // Reset timeout and interval whenever the current slide changes
    const resetTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    resetTimeout();

    // Start progress interval
    setProgress(0);
    intervalRef.current = window.setInterval(() => {
      setProgress((prev) => prev + 100 / (timeRunningDuration / 100));
    }, 100);

    // Set timeout to move to next slide
    timeoutRef.current = window.setTimeout(() => {
      handleNextSlide();
    }, timeRunningDuration);

    return () => resetTimeout();
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imageData.length) % imageData.length
    );
  };

  const getNextThreeImages = () => {
    // Get the next 3 images, wrapping around the imageData array
    const previews = [];
    for (let i = 1; i <= 3; i++) {
      previews.push(imageData[(currentSlide + i) % imageData.length]);
    }
    return previews;
  };

  // Function to handle 'View More' button click
  const handleViewMoreClick = (url: string) => {
    window.open(url, "_blank"); // Open the URL in a new window/tab
  };

  const handlePreviewClick = (index: number) => {
    // Calculate the actual index in the imageData array and set as currentSlide
    setCurrentSlide((currentSlide + index + 1) % imageData.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNextSlide();
      } else if (event.key === "ArrowLeft") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {imageData.map((item) => (
          <Box
            key={item.id}
            sx={{
              minWidth: "100%",
              height: "100%",
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "35%", sm: "40%" },
                left: { xs: "20px", sm: "50px" },
                right: { xs: "20px", sm: "auto" }, // Added to bound text width on mobile
                transform: "translateY(-50%)",
                color: "white",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "2rem", sm: "40px", md: "60px" },
                  fontWeight: "bold",
                  color: "primary.main",
                  lineHeight: 1.2,
                  mb: { xs: 1, sm: 0 },
                }}
              >
                {item.title}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "1rem", sm: "20px", md: "30px" },
                  marginBottom: { xs: "10px", sm: "20px" },
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {item.description}
              </Box>
              <Button
                variant="contained"
                sx={{ 
                  marginRight: 2, 
                  color: "#111",
                  fontSize: { xs: "0.8rem", sm: "1rem" }
                }}
                onClick={() => handleViewMoreClick(item.viewMoreLink)} // Add click handler
              >
                View More
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Next/Previous Arrows */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "88%", sm: "80%" }, // Moved down slightly on mobile so it doesn't overlap centered text
          left: { xs: "10%", sm: "20%" },
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={handlePrevSlide}
          sx={{ backgroundColor: "primary.main" }}
        >
          <ArrowBack sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          sx={{ backgroundColor: "primary.main", ml: { xs: 3, sm: 5 } }}
        >
          <ArrowForward sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Preview Cards for Next 3 Images */}
      <Box
        sx={{
          position: "absolute",
          bottom: "3%",
          right: { xs: "4%", sm: "8%" },
          display: "flex",
          gap: { xs: 1, sm: 2 },
        }}
      >
        {getNextThreeImages().map((preview, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "20vw", sm: "12vw" },
              height: { xs: "30vw", sm: "19vw" },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundImage: `url(${preview.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              cursor: "pointer", // Add cursor pointer to indicate clickability
            }}
            onClick={() => handlePreviewClick(index)} // Handle click on preview card
          >
            <CardMedia
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                textAlign: "center",
                padding: "5px ",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: {
                    xs: "0.6rem", // small devices
                    sm: ".65rem", // small-medium devices
                    md: ".8rem", // medium devices
                    lg: "1rem", // large devices
                    xl: "1rem", // extra large devices
                  },
                }}
              >
                {preview.title}
              </Typography>
            </CardMedia>
          </Card>
        ))}
      </Box>
      {/* Time Running Bar */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "4px",
          width: `${progress}%`, // Sync the width with progress
          backgroundColor: "primary.main",
          transition: `width 0.1s linear`, // Smooth progress update
        }}
      />
    </Box>
  );
};

export default ImageSlider;
