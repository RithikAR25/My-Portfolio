import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import Portfolio from "./Pages/Portfolio";

function App() {
  // Retrieve saved theme from localStorage or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    savedTheme as "light" | "dark"
  );

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    localStorage.setItem("theme", newThemeMode); // Persist the theme in localStorage
  };

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline /> {/* Resets and applies the theme */}
      <Portfolio themeMode={themeMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
