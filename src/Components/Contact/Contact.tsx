import { Box } from "@mui/material";
import Heading from "../Heading";
import ContactPage from "./ContactPage";
const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" height="auto" width="100%">
      <Heading text="Contact" />
      <ContactPage />
    </Box>
  );
};

export default Contact;
