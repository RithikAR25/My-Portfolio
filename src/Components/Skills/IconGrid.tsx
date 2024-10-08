// import { Grid, Box, Typography } from "@mui/material";
// // Import your icons here
// import Icon1 from "../../assets/Icons/icons8-unity.svg";
// import Icon2 from "../../assets/Icons/icons8-c-programming.svg";
// import Icon3 from "../../assets/Icons/icons8-react-js.svg";
// import Icon4 from "../../assets/Icons/icons8-java.svg";
// import Icon5 from "../../assets/Icons/icons8-c++.svg";
// import Icon6 from "../../assets/Icons/icon-1.png";
// import Icon7 from "../../assets/Icons/icon-3.png";
// import Icon8 from "../../assets/Icons/icons8-c-sharp-logo.svg";
// import Icon9 from "../../assets/Icons/icons8-android-studio-144.png";
// import Icon10 from "../../assets/Icons/icons8-kotlin-144.png";
// import Icon11 from "../../assets/Icons/icons8-sql-96.png";

// const IconGrid = () => {
//   return (
//     <Grid container spacing={0} sx={{ padding: "2rem" }}>
//       {/* Each Grid item is modified to ensure a maximum of 5 icons per row */}
//       {[
//         { src: Icon1, alt: "Icon 1", title: "Unity" },
//         { src: Icon9, alt: "Icon 9", title: "Android Studio" },
//         { src: Icon10, alt: "Icon 10", title: "Kotlin" },
//         { src: Icon3, alt: "Icon 3", title: "React" },
//         { src: Icon6, alt: "Icon 6", title: "HTML" },
//         { src: Icon7, alt: "Icon 7", title: "Java script" },
//         { src: Icon4, alt: "Icon 4", title: "Java" },
//         { src: Icon11, alt: "Icon 11", title: "SQL" },

//         { src: Icon8, alt: "Icon 8", title: "C Sharp" },
//         { src: Icon5, alt: "Icon 5", title: "C++" },
//         { src: Icon2, alt: "Icon 2", title: "C Programming" },
//       ].map((icon, index) => (
//         <Grid
//           item
//           xs={6} // 2 columns on extra small screens
//           sm={4} // 3 columns on small screens
//           md={3} // 5 columns on medium and larger screens
//           lg={3} // 5 columns on large and larger screens
//           key={index}
//           sx={{
//             borderRight: "1px solid ", // Border for separation
//             borderBottom: "1px solid ",
//             borderColor: "secondary.contrastText",
//             textAlign: "center", // Center align text
//           }}
//         >
//           <Box
//             display="flex"
//             flexDirection="column" // Arrange icon and title vertically
//             justifyContent="center"
//             alignItems="center"
//             height="100%"
//           >
//             <Box
//               component="img"
//               src={icon.src}
//               alt={icon.alt}
//               sx={{
//                 p: 2,
//                 width: {
//                   xs: "8vw",
//                   sm: "8vw",
//                   md: "8vw",
//                   lg: "8vw",
//                   xl: "8vw",
//                 },
//                 height: {
//                   xs: "8vw",
//                   sm: "8vw",
//                   md: "8vw",
//                   lg: "8vw",
//                   xl: "8vw",
//                 },
//               }}
//             />
//             {/* Title under the icon */}
//             <Typography
//               variant="caption" // You can change this to another variant if desired
//               sx={{ color: "#ffffff", marginTop: "0.5rem" }} // Styling for the title
//             >
//               {icon.title}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default IconGrid;

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
import Icon9 from "../../assets/Icons/icons8-android-studio-144.png";
import Icon10 from "../../assets/Icons/icons8-kotlin-144.png";
import Icon11 from "../../assets/Icons/icons8-sql-96.png";

const IconGrid = () => {
  // Array of icons with their links
  const icons = [
    { src: Icon1, alt: "Icon 1", title: "Unity", link: "https://unity.com/" },
    {
      src: Icon9,
      alt: "Icon 9",
      title: "Android Studio",
      link: "https://developer.android.com/studio",
    },
    {
      src: Icon10,
      alt: "Icon 10",
      title: "Kotlin",
      link: "https://kotlinlang.org/",
    },
    { src: Icon3, alt: "Icon 3", title: "React", link: "https://reactjs.org/" },
    {
      src: Icon6,
      alt: "Icon 6",
      title: "HTML",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      src: Icon7,
      alt: "Icon 7",
      title: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { src: Icon4, alt: "Icon 4", title: "Java", link: "https://www.java.com/" },
    {
      src: Icon11,
      alt: "Icon 11",
      title: "SQL",
      link: "https://www.mysql.com/",
    },
    {
      src: Icon8,
      alt: "Icon 8",
      title: "C Sharp",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    { src: Icon5, alt: "Icon 5", title: "C++", link: "https://cplusplus.com/" },
    {
      src: Icon2,
      alt: "Icon 2",
      title: "C Programming",
      link: "https://www.learn-c.org/",
    },
  ];

  return (
    <Grid container spacing={0} sx={{ padding: "2rem" }}>
      {/* Mapping through icons to render each one */}
      {icons.map((icon, index) => (
        <Grid
          item
          xs={6} // 2 columns on extra small screens
          sm={4} // 3 columns on small screens
          md={3} // 5 columns on medium and larger screens
          lg={3} // 5 columns on large and larger screens
          key={index}
          sx={{
            borderRight: "1px solid ", // Border for separation
            borderBottom: "1px solid ",
            borderColor: "secondary.contrastText",
            textAlign: "center", // Center align text
          }}
        >
          {/* Box for the icon with hover animation and click functionality */}
          <Box
            display="flex"
            flexDirection="column" // Arrange icon and title vertically
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{
              cursor: "pointer", // Change cursor on hover
            }}
            onClick={() => window.open(icon.link, "_blank")} // Open link in a new tab on click
          >
            {/* Only the icon will have hover and scaling animation */}
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{
                p: 2,
                width: {
                  xs: "20vw",
                  sm: "12vw",
                  md: "12vw",
                  lg: "8vw",
                  xl: "8vw",
                },
                height: {
                  xs: "20vw",
                  sm: "12vw",
                  md: "12vw",
                  lg: "8vw",
                  xl: "8vw",
                },
                transition: "transform 0.3s ease-in-out", // Smooth animation
                "&:hover": {
                  transform: "scale(1.1)", // Scale up on hover
                  filter: "drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.3))", // Filter-based shadow effect
                },
              }}
            />
            {/* Title under the icon, no animation applied */}
            <Typography
              variant="h6" // You can change this to another variant if desired
              sx={{ color: "primary.main", marginTop: "0.5rem" }} // Styling for the title
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
