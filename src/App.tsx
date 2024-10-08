import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import Portfolio from "./Pages/Portfolio";

function App() {
  // Retrieve saved theme from localStorage or default to dark mode
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    savedTheme as "light" | "dark"
  );

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    localStorage.setItem("theme", newThemeMode); // Persist the theme in localStorage
  };

  // Clear localStorage when the window is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline /> {/* Resets and applies the theme */}
      <Portfolio themeMode={themeMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
