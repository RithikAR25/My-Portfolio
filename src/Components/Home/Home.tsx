import { Box, Typography } from "@mui/material"; // Import specific icon
import profileimage from "../../assets/Images/ppic.webp";
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
          gap={{ xs: "4%", sm: "3%" }}
          pl={{
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6,
          }}
        >
          {[{ src: linkedinIcon, url: "https://www.linkedin.com/in/rithik-ramachandran-312698316?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJV8M%2FzgeSpCQuQXnMs8chQ%3D%3D" }, { src: githubIcon, url: "https://github.com/RithikAR25" }, { src: instagramIcon, url: "https://www.instagram.com/rithik_ramachandran_?igsh=MXgyMmNlODlycGlsMQ==" }, { src: xIcon, url: "https://x.com/RithikRamachan1?t=pcC3xldVuGEGDiEqEGm0HQ&s=09" }].map(({ src, url }, i) => (
          <img
            key={i}
            src={src}
            alt="Social Icon"
            style={{
              height: "clamp(20px, 3.5vh, 36px)",
              width: "clamp(20px, 3.5vh, 36px)",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onClick={() => window.open(url, "_blank")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection={{
            xs: "column",
            sm: "row",
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
            pl={{
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
              xl: 6,
            }}
            pr={{
              xs: 2,
              sm: 0,
            }}
            sx={{
              height: {
                xs: "55%",
                sm: "100%",
                md: "100%",
              },
              width: {
                xs: "100%",
                sm: "55%",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h2"
                component="h2"
                pb={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                sx={{
                  fontSize: {
                    xs: "clamp(10px, 3.5vw, 1rem)",
                    sm: "clamp(10px, 1.4vw, 1.5rem)",
                    md: "clamp(10px, 1.2vw, 3rem)",
                    lg: "clamp(10px, 1.2vw, 3rem)",
                    xl: "clamp(10px, 1.2vw, 3rem)",
                  },
                }}
              >
                Welcome to my portfolio website!
              </Typography>
              <BlinkText />
              <Typography
                variant="body2"
                pt={{ xs: 1, sm: 2 }}
                sx={{
                  fontSize: {
                    xs: "clamp(11px, 3vw, 1rem)",
                    sm: "clamp(11px, 1.7vw, 1.2rem)",
                    md: "clamp(11px, 1.5vw, 1.5rem)",
                    lg: "clamp(11px, 1.4vw, 1.5rem)",
                    xl: "clamp(11px, 1.4vw, 1.5rem)",
                  },
                  color: "text.secondary",
                  lineHeight: { xs: 1.5, sm: 1.6 },
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
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{
              height: { xs: "45%", sm: "90vh" },
              width: { xs: "100%", sm: "45%" },
              pt: { xs: 1, sm: 0 },
            }}
          >
            <Box
              position="relative"
              display="flex"
              alignContent="center"
              sx={{
                height: { xs: "85%", sm: "80%" },
                aspectRatio: "81.25 / 100",
                maxHeight: { xs: "38vh", sm: "none" },
              }}
            >
              <img
                src={rectangle}
                alt="Decorative rectangle"
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
                alt="Rithik Ramachandran profile"
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                  objectFit: "cover",
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
