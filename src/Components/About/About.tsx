import { Box, Typography } from "@mui/material";
import Heading from "../Heading";

const About = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" height="auto" width="100%">
        <Heading text="ABOUT ME" />
        <Box display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            width="50%"
            bgcolor="cyan"
          ></Box>
          <Box display="flex" flexDirection="row" width="50%" bgcolor="pink">
            <Typography
              variant="body1"
              pr={{
                xs: 2, // padding-left for extra-small screens
                sm: 4, // padding-left for small screens
                md: 4, // padding-left for medium screens
                lg: 10, // padding-left for large screens
                xl: 10, // padding-left for extra-large screens
              }}
              pt={{
                xs: 2, // padding-left for extra-small screens
                sm: 4, // padding-left for small screens
                md: 4, // padding-left for medium screens
                lg: 2, // padding-left for large screens
                xl: 2, // padding-left for extra-large screens
              }}
              fontSize={{
                xs: "clamp(.9vw, 2vw, 5rem)", // For extra-small screens
                sm: "clamp(.5vw, 1.2vw, 3rem)", // For small screens
                md: "clamp(.5vw, 1.2vw, 3rem)", // For medium screens
                lg: "clamp(.5vw, 1.6vw, 3rem)", // For large screens
                xl: "clamp(.5vw, 1.6vw, 3rem)", // For extra-large screens
              }}
            >
              As a passionate developer born and raised in Kerala, I thrive on
              innovation and problem-solving. My journey in tech is fueled by a
              competitive spirit, strong leadership, and an unwavering work
              ethic. With a logical mind and creative approach, I continuously
              push the boundaries to deliver exceptional solutions. <br />
              <br />
              Beyond the screen, I find inspiration in football and chess, where
              strategy and precision mirror my approach to development. Let's
              connect and create something remarkable together!
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
