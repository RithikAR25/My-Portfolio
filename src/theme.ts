import { createTheme } from "@mui/material/styles";

// Function to create light and dark themes
export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode, // dynamically switch between 'light' and 'dark' modes
      primary: {
        main: mode === "light" ? "#FFEA00" : "#FFEA00",
        light: mode === "light" ? "#FFFF6F" : "#FFFF6F", // light color for primary
        dark: mode === "light" ? "#C6B700" : "#C6B700", // dark color for primary
        contrastText: mode === "light" ? "#000" : "#fff", // contrast text color for primary
      },
      secondary: {
        main: mode === "light" ? "#fff" : "#212121",
        light: mode === "light" ? "#f5f5f5" : "#484848", // light color for secondary
        dark: mode === "light" ? "#fff" : "#111", // dark color for secondary
        contrastText: mode === "light" ? "#000" : "#fff", // contrast text color for secondary
      },
      background: {
        default: mode === "light" ? "#fff" : "#212121",
        paper: mode === "light" ? "#fff" : "#424242",
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff", // Text color changes based on mode
        secondary: mode === "light" ? "#353535" : "#FAF9F6",
      },
    },
    typography: {
      fontFamily: [
        "Hind Vadodara",
        "Yantramanav",
        "Yrsa",
        "sans-serif",
        "serif",
      ].join(","),
      h1: {
        fontFamily: "Hind Vadodara, serif",
        fontWeight: 700, // Yrsa bold
      },
      h2: {
        fontFamily: "Hind Vadodara, sans-serif",
        fontWeight: 700, // Hind Vadodara medium
      },
      h4: {
        fontFamily: "Yantramanav, sans-serif",
        fontWeight: 500, // Yantramanav regular
      },
      h6: {
        fontFamily: "Hind Vadodara, sans-serif",
        fontWeight: 700, // Yantramanav regular
      },
      body1: {
        fontFamily: "Yrsa, sans-serif",
        fontWeight: 400, // Hind Vadodara regular
      },
      body2: {
        fontFamily: "Yantramanav, sans-serif",
        fontWeight: 400, // Yantramanav light
      },
      subtitle1: {
        fontFamily: "Yrsa, serif",
        fontWeight: 300, // Yrsa light
      },
      button: {
        fontFamily: "Yantramanav, serif",
        fontWeight: 600, // Yrsa light
      },
    },
  });
