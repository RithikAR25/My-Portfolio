import { useEffect, useRef, useState } from "react"; // Import necessary React hooks
import { Grid, Box, Typography } from "@mui/material";
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

  const [visibleIcons, setVisibleIcons] = useState<boolean[]>(
    new Array(icons.length).fill(false)
  );
  const iconRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(icons.length).fill(null)
  ); // Ref for each icon

  // Intersection Observer to detect when icons are in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexStr = entry.target.getAttribute("data-index");
          if (indexStr) {
            // Check if indexStr is not null
            const index = parseInt(indexStr); // Now we can safely parse it

            if (entry.isIntersecting) {
              setVisibleIcons((prev) => {
                const updated = [...prev];
                updated[index] = true; // Mark icon as visible
                return updated;
              });
            } else {
              // Reset visibility if the icon goes out of view
              setVisibleIcons((prev) => {
                const updated = [...prev];
                updated[index] = false; // Mark icon as not visible
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the icon is visible
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon); // Observe each icon
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon); // Cleanup observer on unmount
      });
    };
  }, []);

  return (
    <Grid container spacing={0} sx={{ padding: "2rem" }}>
      {icons.map((icon, index) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={3}
          key={index}
          sx={{
            borderRight: "1px solid ",
            borderBottom: "1px solid ",
            borderColor: "secondary.contrastText",
            textAlign: "center",
          }}
        >
          {/* Box for the icon with hover animation and click functionality */}
          <Box
            ref={(el: HTMLDivElement | null) => (iconRefs.current[index] = el)} // Explicitly type the ref
            data-index={index} // Store the index in a data attribute for identification
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{
              cursor: "pointer",
              opacity: visibleIcons[index] ? 1 : 0, // Fade in based on visibility
              transform: visibleIcons[index]
                ? "translateY(0)"
                : "translateY(20px)", // Slide up on visibility
              transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transition
            }}
            onClick={() => window.open(icon.link, "_blank")}
          >
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
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "drop-shadow(0px 5px 0px rgba(0, 0, 0, 0.3))",
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "primary.contrastText",

                marginBottom: "0.5rem",
              }}
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
