import { Box } from "@mui/material";
import Heading from "../Heading";
import Carousel from "./Carousel";
const Blog = () => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Heading text="Blog" />
      <Carousel />
    </Box>
  );
};

export default Blog;
