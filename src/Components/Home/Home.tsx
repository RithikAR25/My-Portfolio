import { Box, Typography } from "@mui/material"; // Import specific icon
import profileimage from "../../assets/Images/ppic.png";
import rectangle from "../../assets/Images/Rectangle 9541.svg";
import BlinkText from "./BlinkText";
import linkedinIcon from "../../assets/Icons/linkedin-brands-solid (3).svg";
import githubIcon from "../../assets/Icons/github-alt-brands-solid (1).svg";
import instagramIcon from "../../assets/Icons/instagram-brands-solid.svg";
import xIcon from "../../assets/Icons/x-twitter-brands-solid.svg";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", width: "100%" }}
      >
        <Box
          sx={{ height: "10vh", width: "100%" }}
          display="flex"
          justifyContent="start"
          alignItems="center"
          gap="3%"
          pl={{
            xs: 3, // padding-left for extra-small screens
            sm: 3, // padding-left for small screens
            md: 4, // padding-left for medium screens
            lg: 5, // padding-left for large screens
            xl: 6, // padding-left for extra-large screens
          }}
        >
          <img
            src={linkedinIcon}
            alt="SVG Icon"
            style={{
              height: "4vh",
              width: "4vh",
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "transform 0.3s ease", // Smooth transition for the scale effect
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rithik-ramachandran-312698316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJV8M%2FzgeSpCQuQXnMs8chQ%3D%3D",
                "_blank"
              )
            } // Open LinkedIn in a new tab
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            } // Scale up the icon on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset the scale on mouse leave
          />

          <img
            src={githubIcon}
            alt="SVG Icon"
            style={{
              height: "4vh",
              width: "4vh",
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "transform 0.3s ease", // Smooth transition for the scale effect
            }}
            onClick={() =>
              window.open("`https://github.com/RithikAR25`", "_blank")
            } // Open LinkedIn in a new tab
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            } // Scale up the icon on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset the scale on mouse leave
          />
          <img
            src={instagramIcon}
            alt="SVG Icon"
            style={{
              height: "4vh",
              width: "4vh",
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "transform 0.3s ease", // Smooth transition for the scale effect
            }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/rithik_ramachandran_?igsh=MXgyMmNlODlycGlsMQ==",
                "_blank"
              )
            } // Open LinkedIn in a new tab
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            } // Scale up the icon on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset the scale on mouse leave
          />
          <img
            src={xIcon}
            alt="SVG Icon"
            style={{
              height: "4vh",
              width: "4vh",
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "transform 0.3s ease", // Smooth transition for the scale effect
            }}
            onClick={() =>
              window.open(
                "https://x.com/RithikRamachan1?t=pcC3xldVuGEGDiEqEGm0HQ&s=09",
                "_blank"
              )
            } // Open LinkedIn in a new tab
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            } // Scale up the icon on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset the scale on mouse leave
          />
        </Box>
        <Box
          display="flex"
          flexDirection={{
            xs: "column", // flexDirection column for extra-small screens
            sm: "row", // flexDirection row for small screens and up
            md: "row",
          }}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90vh", width: "100%" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            //   bgcolor="lightgray"
            pl={{
              xs: 3, // padding-left for extra-small screens
              sm: 3, // padding-left for small screens
              md: 4, // padding-left for medium screens
              lg: 5, // padding-left for large screens
              xl: 6, // padding-left for extra-large screens
            }}
            sx={{ height: "100%", width: "55%" }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h2"
                component="h2"
                pl={3}
                pb={{
                  xs: 2, // padding-left for extra-small screens
                  sm: 4, // padding-left for small screens
                  md: 4, // padding-left for medium screens
                  lg: 4, // padding-left for large screens
                  xl: 4, // padding-left for extra-large screens
                }}
                sx={{
                  fontSize: {
                    xs: "clamp(.9vw, 2vw, 5rem)", // For extra-small screens
                    sm: "clamp(.5vw, 1.2vw, 3rem)", // For small screens
                    md: "clamp(.5vw, 1.2vw, 3rem)", // For medium screens
                    lg: "clamp(.5vw, 1.2vw, 3rem)", // For large screens
                    xl: "clamp(.5vw, 1.2vw, 3rem)", // For extra-large screens
                  },
                }}
              >
                Welcome to my portfolio website!
              </Typography>
              <BlinkText />
              <Typography
                variant="body2"
                pt={2}
                sx={{
                  fontSize: {
                    xs: "clamp(.9vw, 2.5vw, 5rem)", // For extra-small screens
                    sm: "clamp(.5vw, 1.7vw, 3rem)", // For small screens
                    md: "clamp(.5vw, 1.7vw, 3rem)", // For medium screens
                    lg: "clamp(.5vw, 1.7vw, 3rem)", // For large screens
                    xl: "clamp(.5vw, 1.7vw, 3rem)", // For extra-large screens
                  },
                  color: "text.secondary",
                }}
              >
                Turning ideas into impactful experiences is my strength. With a
                passion for user experience, modern interfaces, and web
                development, I craft products that exceed expectations.
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "90vh", width: "45%" }}
          >
            <Box
              //   bgcolor="red"
              position="relative"
              display="flex"
              alignContent="center"
              sx={{ height: "80%", aspectRatio: "81.25 / 100" }}
            >
              <img
                src={rectangle}
                alt="Example"
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  top: "5%",
                  left: "3%",
                }}
              />
              <img
                src={profileimage}
                alt="Example"
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: "10",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
