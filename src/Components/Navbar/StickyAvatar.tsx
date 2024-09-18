import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import styles from "./Navbar.module.css"; // Assuming you have the styles for CSSTransition

// Define the props for the component
interface StickyAvatarProps {
  isSticky: boolean;
  avatarImage: string;
  name: string;
  title: string;
}

const StickyAvatar: React.FC<StickyAvatarProps> = ({
  isSticky,
  avatarImage,
  name,
  title,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ flexGrow: 1, position: "relative" }}
    >
      {/* Avatar transition */}
      <CSSTransition
        in={!isSticky}
        timeout={300}
        classNames={{
          enter: styles.avatarEnter,
          enterActive: styles.avatarEnterActive,
          exit: styles.avatarExit,
          exitActive: styles.avatarExitActive,
        }}
        unmountOnExit
      >
        <Avatar
          alt={name}
          src={avatarImage}
          sx={{
            width: {
              xs: "20vh", // Extra small screens
              sm: "19vh", // Small screens
              md: "19vh", // Medium screens
              lg: "13vw", // Large screens
              xl: "13vw", // Extra large screens
            }, // Larger size for the avatar
            height: {
              xs: "20vh", // Extra small screens
              sm: "19vh", // Small screens
              md: "19vh", // Medium screens
              lg: "13vw", // Large screens
              xl: "13vw", // Extra large screens
            }, // Larger size for the avatar
            border: "11px solid ",
            borderColor: "secondary.main", // Thicker border
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Stronger shadow for more emphasis
            position: "absolute",
            top: {
              xs: "-10vh", // Extra small screens
              sm: "-9.5vh", // Small screens
              md: "-9.5vh", // Medium screens
              lg: "-6.5vw", // Large screens
              xl: "-6.5vw", // Extra large screens
            },
          }}
        />
      </CSSTransition>

      {/* Text transition */}
      <CSSTransition
        in={isSticky}
        timeout={300}
        classNames={{
          enter: styles.textEnter,
          enterActive: styles.textEnterActive,
          exit: styles.textExit,
          exitActive: styles.textExitActive,
        }}
        unmountOnExit
      >
        <Box ml={2} display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              fontSize: {
                xs: "3.5vw", // Extra small screens
                sm: "2.1vw", // Small screens
                md: "2vw", // Medium screens
                lg: "2vw", // Large screens
                xl: "2vw", // Extra large screens
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontSize: {
                xs: "3vw", // Extra small screens
                sm: "1.9vw", // Small screens
                md: "1.9vw", // Medium screens
                lg: "1.9vw", // Large screens
                xl: "1.9vw", // Extra large screens
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      </CSSTransition>
    </Box>
  );
};

export default StickyAvatar;
