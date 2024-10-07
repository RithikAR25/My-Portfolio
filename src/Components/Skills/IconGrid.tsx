import { Grid, Box, Typography } from "@mui/material";
// Import your icons here
import Icon1 from "../../assets/Icons/icons8-unity.svg";
import Icon2 from "../../assets/Icons/icons8-c-programming.svg";
import Icon3 from "../../assets/Icons/icons8-react-js.svg";
import Icon4 from "../../assets/Icons/icons8-java.svg";
import Icon5 from "../../assets/Icons/icons8-c++.svg";
import Icon6 from "../../assets/Icons/icon-1.png";
import Icon7 from "../../assets/Icons/icon-3.png";
import Icon8 from "../../assets/Icons/icons8-c-sharp-logo.svg";

const IconGrid = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ backgroundColor: "#1c1c1c", padding: "2rem" }}
    >
      {/* Each Grid item is modified to ensure a maximum of 5 icons per row */}
      {[
        { src: Icon1, alt: "Icon 1", title: "Unity" },
        { src: Icon2, alt: "Icon 2", title: "C Programming" },
        { src: Icon3, alt: "Icon 3", title: "React" },
        { src: Icon4, alt: "Icon 4", title: "Java" },
        { src: Icon5, alt: "Icon 5", title: "C++" },
        { src: Icon6, alt: "Icon 6", title: "Custom Icon 1" },
        { src: Icon7, alt: "Icon 7", title: "Custom Icon 2" },
        { src: Icon8, alt: "Icon 8", title: "C Sharp" },
      ].map((icon, index) => (
        <Grid
          item
          xs={6} // 2 columns on extra small screens
          sm={4} // 3 columns on small screens
          md={3} // 5 columns on medium and larger screens
          lg={3} // 5 columns on large and larger screens
          key={index}
          sx={{
            borderRight: "1px solid #2e2e2e", // Border for separation
            borderBottom: "1px solid #2e2e2e",
            textAlign: "center", // Center align text
          }}
        >
          <Box
            display="flex"
            flexDirection="column" // Arrange icon and title vertically
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{
                p: 2,
                width: {
                  xs: "8vw",
                  sm: "8vw",
                  md: "8vw",
                  lg: "8vw",
                  xl: "8vw",
                },
                height: {
                  xs: "8vw",
                  sm: "8vw",
                  md: "8vw",
                  lg: "8vw",
                  xl: "8vw",
                },
              }}
            />
            {/* Title under the icon */}
            <Typography
              variant="caption" // You can change this to another variant if desired
              sx={{ color: "#ffffff", marginTop: "0.5rem" }} // Styling for the title
            >
              {icon.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default IconGrid;
