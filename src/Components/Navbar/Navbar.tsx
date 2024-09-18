import React, { useState, useEffect, useRef, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme, useMediaQuery } from "@mui/material";
import avatarImage from "../../assets/Images/dp.png";
import AnimatedButton from "./AnimatedButton";
import StickyAvatar from "./StickyAvatar";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to handle the drawer
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // Theme and media query to detect screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // For xs screen size

  // Scroll handler to update isSticky state
  const handleScroll = useCallback(() => {
    if (navbarRef.current) {
      const navbarTop = navbarRef.current.getBoundingClientRect().top;
      setIsSticky(navbarTop <= 0);
    }
  }, []);

  // Memoizing toggleDrawer function to prevent unnecessary re-renders
  const toggleDrawer = useCallback((open: boolean) => {
    setDrawerOpen(open);
  }, []); // useCallback to memoize the function

  // Memoizing handleSmoothScroll for performance improvement
  const handleSmoothScroll = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []); // useCallback to memoize the function

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Effect cleanup on component unmount

  return (
    <AppBar
      position="sticky"
      ref={navbarRef}
      sx={{
        backgroundColor: "secondary.dark",
        height: "13vh",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 1100,
        display: "flex",
        justifyContent: "center",
        transition: "background-color 0.3s ease-in-out", // Added smooth transition for sticky effect
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", gap: "1.5vw" }}>
          {!isMobile && (
            <>
              {/* Use smooth scroll for non-mobile buttons */}
              <AnimatedButton
                href="#home"
                spanText="Home"
                afterContent="Home"
                onClick={() => handleSmoothScroll("home")} // Smooth scroll to home
              />
              <AnimatedButton
                href="#about"
                spanText="About"
                afterContent="About"
                onClick={() => handleSmoothScroll("about")} // Smooth scroll to about
              />
              <AnimatedButton
                href="#projects"
                spanText="Projects"
                afterContent="Projects"
                onClick={() => handleSmoothScroll("projects")} // Smooth scroll to projects
              />
            </>
          )}
        </Box>

        {/* Center Section with Sticky Avatar */}
        <StickyAvatar
          isSticky={isSticky}
          avatarImage={avatarImage}
          name="Rithik Ramachandran"
          title="Developer"
        />

        {/* Right Section */}
        <Box sx={{ display: "flex", gap: "1.5vw" }}>
          {!isMobile && (
            <>
              {/* Use smooth scroll for non-mobile buttons */}
              <AnimatedButton
                href="#skills"
                spanText="Skills"
                afterContent="Skills"
                onClick={() => handleSmoothScroll("skills")} // Smooth scroll to skills
              />
              <AnimatedButton
                href="#contact"
                spanText="Contact"
                afterContent="Contact"
                onClick={() => handleSmoothScroll("contact")} // Smooth scroll to contact
              />
              <AnimatedButton
                href="#blog"
                spanText="Blog"
                afterContent="Blog"
                onClick={() => handleSmoothScroll("blog")} // Smooth scroll to blog
              />
            </>
          )}

          {/* Hamburger Menu for Mobile View */}
          {isMobile && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }} // Drawer overlay effect
              >
                <List>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("home");
                    }}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("about");
                    }}
                  >
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("projects");
                    }}
                  >
                    <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("skills");
                    }}
                  >
                    <ListItemText primary="Skills" />
                  </ListItem>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("contact");
                    }}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                  <ListItem
                    component="button"
                    onClick={() => {
                      toggleDrawer(false);
                      handleSmoothScroll("blog");
                    }}
                  >
                    <ListItemText primary="Blog" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
