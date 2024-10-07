import { Box } from "@mui/material";
import Heading from "../Heading";
import IconGrid from "./IconGrid";
const Skills = () => {
  return (
    <Box display="flex" flexDirection="column" height="auto" width="100%">
      <Heading text="Skills" />
      <IconGrid />
    </Box>
  );
};

export default Skills;
