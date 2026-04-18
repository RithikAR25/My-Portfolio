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
            ref={redBoxRef}
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
              opacity: isRedVisible ? 1 : 0,
              transform: isRedVisible ? "scale(1)" : "scale(0.9)",
              transition: "opacity 1s ease, transform 1s ease",
              transformOrigin: "top",
              pb: { xs: 2, sm: 0 },
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
                  xs: "55vw",
                  sm: "95%",
                  md: "95%",
                  lg: "95%",
                  xl: "95%",
                },
                aspectRatio: "1 / 1",
              }}
            >
            </Box>
          </Box>

          {/* Yellow Box with animation */}
          <Box
            ref={yellowBoxRef}
            display="flex"
            flexDirection="column"
            width={{
              xs: "100%",
              sm: "55%",
            }}
            px={{
              xs: 2,
              sm: 0,
            }}
            alignItems={{
              xs: "start",
              sm: "start",
              md: "start",
            }}
            sx={{
              opacity: isYellowVisible ? 1 : 0,
              transform: isYellowVisible ? "scale(1)" : "scale(0.9)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            <Typography
              variant="h1"
              pr={{
                xs: 0,
                sm: 4,
                md: 4,
                lg: 10,
                xl: 10,
              }}
              pt={{
                xs: 1,
                sm: 0,
              }}
              fontSize={{
                xs: "clamp(20px, 6vw, 2rem)",
                sm: "clamp(16px, 3.2vw, 2.5rem)",
                md: "clamp(16px, 3.6vw, 3rem)",
                lg: "clamp(16px, 3.6vw, 3rem)",
                xl: "clamp(16px, 3.6vw, 3rem)",
              }}
            >
              Rithik Ramachandran
            </Typography>
            <Typography
              variant="body1"
              pr={{
                xs: 0,
                sm: 4,
                md: 4,
                lg: 10,
                xl: 10,
              }}
              pt={{
                xs: 1,
                sm: 2,
              }}
              fontSize={{
                xs: "clamp(13px, 3.5vw, 1rem)",
                sm: "clamp(13px, 1.7vw, 1.2rem)",
                md: "clamp(13px, 1.7vw, 1.4rem)",
                lg: "clamp(13px, 1.6vw, 1.4rem)",
                xl: "clamp(13px, 1.6vw, 1.4rem)",
              }}
              lineHeight={{ xs: 1.5, sm: 1.2 }}
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
