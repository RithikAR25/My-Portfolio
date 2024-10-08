import { useState, useEffect, useRef } from "react"; // Import React and necessary hooks
import { Box, Typography } from "@mui/material";
import Heading from "../Heading";
import linkedinIcon from "../../assets/Icons/linkedin-brands-solid (3).svg";
import githubIcon from "../../assets/Icons/github-alt-brands-solid (1).svg";
import instagramIcon from "../../assets/Icons/instagram-brands-solid.svg";
import xIcon from "../../assets/Icons/x-twitter-brands-solid.svg";
import pic_laptop from "../../assets/Images/pic_laptop.jpg";

const About = () => {
  // State to track visibility for red and yellow boxes
  const [isRedVisible, setIsRedVisible] = useState(false);
  const [isYellowVisible, setIsYellowVisible] = useState(false);
  const redBoxRef = useRef<HTMLDivElement>(null); // Ref for the red box
  const yellowBoxRef = useRef<HTMLDivElement>(null); // Ref for the yellow box

  // UseEffect to observe the red box
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsRedVisible(entry.isIntersecting); // Set true when red box is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the red box is visible
    );

    if (redBoxRef.current) {
      observer.observe(redBoxRef.current); // Observe the red box
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  // UseEffect to observe the yellow box
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsYellowVisible(entry.isIntersecting); // Set true when yellow box is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the yellow box is visible
    );

    if (yellowBoxRef.current) {
      observer.observe(yellowBoxRef.current); // Observe the yellow box
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" height="auto" width="100%">
        <Heading text="ABOUT ME" />
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            sm: "row",
            md: "row",
          }}
          alignItems={{
            xs: "center",
            sm: "start",
            md: "start",
          }}
          pt="2vh"
        >
          {/* Red Box with animation */}
          <Box
            ref={redBoxRef} // Attach ref to the red box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            width={{
              xs: "100%",
              sm: "45%",
              md: "45%",
            }}
            height={{
              xs: "auto",
              sm: "30vw",
              md: "30vw",
              lg: "28vw",
              xl: "30vw",
            }}
            sx={{
              opacity: isRedVisible ? 1 : 0, // Fade in/out
              transform: isRedVisible
                ? "scale(1) " // Scale and translate to original position when visible
                : "scale(0.9) ", // Scale down and translate upwards when not visible
              transition: "opacity 1s ease, transform 1s ease", // Smooth transition
              transformOrigin: "top", // Scale from the top
            }}
          >
            <Box
              borderRadius={1}
              boxShadow={2}
              sx={{
                backgroundImage: `url(${pic_laptop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: {
                  xs: "35vw",
                  sm: "95%",
                  md: "95%",
                  lg: "95%",
                  xl: "95%",
                },
                aspectRatio: "1 / 1",
              }}
            >
              {/* Your content inside the box */}
            </Box>
          </Box>

          {/* Yellow Box with animation */}
          <Box
            ref={yellowBoxRef} // Attach ref to the yellow box
            display="flex"
            flexDirection="column"
            width="55%"
            alignItems={{
              xs: "center",
              sm: "start",
              md: "start",
            }}
            sx={{
              opacity: isYellowVisible ? 1 : 0, // Fade in/out
              transform: isYellowVisible
                ? "scale(1) " // Scale and translate to original position when visible
                : "scale(0.9) ", // Slide in from the left with a rotation
              transition: "opacity 1s ease, transform 1s ease", // Smooth transition
            }}
          >
            <Typography
              variant="h1"
              pr={{
                xs: 2,
                sm: 4,
                md: 4,
                lg: 10,
                xl: 10,
              }}
              pt={{
                xs: 2,
                sm: 0,
              }}
              fontSize={{
                xs: "clamp(.9vw, 3vw, 5rem)",
                sm: "clamp(.5vw, 3.2vw, 3rem)",
                md: "clamp(.5vw, 3.6vw, 3rem)",
                lg: "clamp(.5vw, 3.6vw, 3rem)",
                xl: "clamp(.5vw, 3.6vw, 3rem)",
              }}
            >
              Rithik Ramachandran
            </Typography>
            <Typography
              variant="body1"
              pr={{
                xs: 2,
                sm: 4,
                md: 4,
                lg: 10,
                xl: 10,
              }}
              pt={{
                xs: 2,
                sm: 2,
              }}
              fontSize={{
                xs: "clamp(.9vw, 2.2vw, 5rem)",
                sm: "clamp(.5vw, 1.7vw, 3rem)",
                md: "clamp(.5vw, 1.7vw, 3rem)",
                lg: "clamp(.5vw, 1.6vw, 3rem)",
                xl: "clamp(.5vw, 1.6vw, 3rem)",
              }}
              lineHeight={1.2}
            >
              As a passionate developer born and raised in Kerala, I thrive on
              innovation and problem-solving. My journey in tech is fueled by a
              competitive spirit, strong leadership, and an unwavering work
              ethic. With a logical mind and creative approach, I continuously
              push the boundaries to deliver exceptional solutions.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Beyond the screen, I find inspiration in football and chess, where
              strategy and precision mirror my approach to development. Let's
              connect and create something remarkable together!
            </Typography>
            <Box
              sx={{ height: "auto", width: "100%", mt: 3 }}
              display="flex"
              justifyContent={{
                xs: "center",
                sm: "start",
                md: "start",
                lg: "start",
                xl: "start",
              }}
              alignItems="center"
              gap="3%"
            >
              <img
                src={linkedinIcon}
                alt="SVG Icon"
                style={{
                  height: "4vh",
                  width: "4vh",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rithik-ramachandran-312698316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJV8M%2FzgeSpCQuQXnMs8chQ%3D%3D",
                    "_blank"
                  )
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />

              <img
                src={githubIcon}
                alt="SVG Icon"
                style={{
                  height: "4vh",
                  width: "4vh",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() =>
                  window.open("https://github.com/RithikAR25", "_blank")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <img
                src={instagramIcon}
                alt="SVG Icon"
                style={{
                  height: "4vh",
                  width: "4vh",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/rithik_ramachandran/",
                    "_blank"
                  )
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <img
                src={xIcon}
                alt="SVG Icon"
                style={{
                  height: "4vh",
                  width: "4vh",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() =>
                  window.open("https://twitter.com/RithikRama5", "_blank")
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
