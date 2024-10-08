import { Box } from "@mui/material";
import Heading from "../Heading";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" height="auto" width="100%">
        <Heading text="Projects" />
        <ImageSlider />
      </Box>
    </>
  );
};

export default Projects;
