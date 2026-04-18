import React, { useState } from "react";
import styles from "./Carousel.module.css"; // Import the CSS module
import Delhi from "../../assets/Images/Delhi.png";
import Gujarat from "../../assets/Images/Gujarat.png";
import Harihar_fort from "../../assets/Images/Harihar_fort.png";
import Harischandragad from "../../assets/Images/Harischandragad.png";
import Munnar from "../../assets/Images/Munnar.png";
import Pondy from "../../assets/Images/Pondy.png";
import Punjab from "../../assets/Images/Punjab.png";
import Rajasthan from "../../assets/Images/Rajasthan.png";
import anayadikuthu from "../../assets/Images/anayadikuthu.png";
import kolukkumalai from "../../assets/Images/kolukkumalai.png";
import { Box, Typography } from "@mui/material";

const Carousel: React.FC = () => {
  const [direction, setDirection] = useState(styles.moveRight); // Manage the carousel direction

  // Function to handle left button click
  const handleLeftClick = () => {
    setDirection(styles.moveRight); // Change direction to moveLeft
  };

  // Function to handle right button click
  const handleRightClick = () => {
    setDirection(styles.moveLeft); // Change direction to moveRight
  };

  const items = [
    {
      name: "Delhi",
      img: Delhi,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTkzMjUwMDkxOTExNzU5?story_media_id=3146125933249883648_39391045872&igsh=MjNzOTAxc3MydnNr",
    },
    {
      name: "Gujarat",
      img: Gujarat,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTYzOTk3MjAzNDA0MDkz?story_media_id=3141410724459372822_39391045872&igsh=MWRrbnBjYzl1a2VnNw==",
    },
    {
      name: "Harihar Fort",
      img: Harihar_fort,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE2OTQyMjUyOTczMzA5?story_media_id=3259169882150619764_39391045872&igsh=a3A3aGlxbnczcTEx",
    },
    {
      name: "Harischandragad",
      img: Harischandragad,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMwNzU1OTU5OTQwOTA2?story_media_id=3343227779253727320_39391045872&igsh=MTAyM3FpcmRicWdyZg==",
    },
    {
      name: "Munnar",
      img: Munnar,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4NDI5NzA0Mzk1MDIxOTQx?story_media_id=3370096264119859443_39391045872&igsh=bnNlODhsMWcwYWg=",
    },
    {
      name: "Pondy",
      img: Pondy,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODU1NjA2NDAyODQ4MzY1?story_media_id=2999700238637235871_39391045872&igsh=b2RhYW43ejJiOXZt",
    },
    {
      name: "Punjab",
      img: Punjab,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MjE4MTYyMDExMjQ1MTcy?story_media_id=3148323911234527690_39391045872&igsh=bG1iaWN0enRzejc3",
    },
    {
      name: "Rajasthan",
      img: Rajasthan,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0MDg5MzQyMDU2OTU1?story_media_id=3141715528401681826_39391045872&igsh=MTRleDF4bHJ1bHgwbw==",
    },
    {
      name: "Anayadikuthu",
      img: anayadikuthu,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE3MDI0ODU0NTgzNDE5?story_media_id=3103878966960736816_39391045872&igsh=bW9vMDB4MnQ1eW83",
    },
    {
      name: "Kolukkumalai",
      img: kolukkumalai,
      link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MzU5MTk0MDYzMDE5MTg0?story_media_id=3094479906569928695_39391045872&igsh=d2l6b2ZkczRvY3N1",
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // bgcolor="pink"
      height={{
        xs: "45vh",
        sm: "50vh",
        md: "70vh",
        lg: "70vh",
        xl: "80vh",
      }}
    >
      <div
        className={`${styles["carousel-control-button"]} ${styles.left}`}
        onClick={handleLeftClick} // Handle left click
        title="Change Direction to left"
      ></div>
      <div
        className={`${styles["carousel-control-button"]} ${styles.right}`}
        onClick={handleRightClick} // Handle right click
        title="Change Direction to right"
      ></div>
      <div
        className={styles.carousel}
        title="Move the pointer for the carousel effect."
      >
        <div
          className={`${styles["carousel-rotation-direction"]} ${direction}`}
        >
          {/* Carousel Items */}
          <ul
            className={styles["carousel-item-wrapper"]}
            style={{ "--_num-elements": items.length } as React.CSSProperties}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={styles["carousel-item"]}
                style={{ "--_index": index + 1 } as React.CSSProperties}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></a>
                <div
                  className={styles.reflection}
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "3vw", // Extra small screens
                      sm: "1.9vw", // Small screens
                      md: "1.9vw", // Medium screens
                      lg: "1.6vw", // Large screens
                      xl: "1.9vw", // Extra large screens,
                    },
                    color: "primary.main",
                  }}
                  className={styles.itemName}
                >
                  {item.name}
                </Typography>
              </li>
            ))}
            <li className={styles["carousel-ground"]}></li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Carousel;

// import React, { useState } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { keyframes } from "@emotion/react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Delhi from "../../assets/Images/Delhi.png";
// import Gujarat from "../../assets/Images/Gujarat.png";
// import Harihar_fort from "../../assets/Images/Harihar_fort.png";
// import Harischandragad from "../../assets/Images/Harischandragad.png";
// import Munnar from "../../assets/Images/Munnar.png";
// import Pondy from "../../assets/Images/Pondy.png";
// import Punjab from "../../assets/Images/Punjab.png";
// import Rajasthan from "../../assets/Images/Rajasthan.png";
// import anayadikuthu from "../../assets/Images/anayadikuthu.png";
// import kolukkumalai from "../../assets/Images/kolukkumalai.png";

// // Keyframes for auto-rotation
// const rotateCarousel = keyframes`
//   from {
//     transform: translateZ(-30vw) rotateY(0deg);
//   }
//   to {
//     transform: translateZ(-30vw) rotateY(360deg);
//   }
// `;

// const reflectionGradient = `linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))`;

// const Carousel: React.FC = () => {
//   const [paused, setPaused] = useState(false);
//   const [direction, setDirection] = useState<"left" | "right">("right");

//   const items = [
//     { name: "Delhi", img: Delhi, link: "#" },
//     { name: "Gujarat", img: Gujarat, link: "#" },
//     { name: "Harihar Fort", img: Harihar_fort, link: "#" },
//     { name: "Harischandragad", img: Harischandragad, link: "#" },
//     { name: "Munnar", img: Munnar, link: "#" },
//     { name: "Pondy", img: Pondy, link: "#" },
//     { name: "Punjab", img: Punjab, link: "#" },
//     { name: "Rajasthan", img: Rajasthan, link: "#" },
//     { name: "Anayadikuthu", img: anayadikuthu, link: "#" },
//     { name: "Kolukkumalai", img: kolukkumalai, link: "#" },
//   ];

//   // Toggle the direction of the carousel on button click
//   const handleLeftClick = () => setDirection("left");
//   const handleRightClick = () => setDirection("right");

//   return (
//     <Box
//       width="100%"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height={{
//         xs: "30vh",
//         sm: "50vh",
//         md: "70vh",
//         lg: "70vh",
//         xl: "80vh",
//       }}
//       position="relative"
//       onMouseEnter={() => setPaused(true)} // Pause on hover
//       onMouseLeave={() => setPaused(false)} // Resume auto-rotation
//     >
//       {/* Left Arrow */}
//       <IconButton
//         onClick={handleLeftClick}
//         sx={{
//           position: "absolute",
//           left: "0",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 2,
//         }}
//       >
//         <ArrowBackIosNewIcon />
//       </IconButton>

//       {/* Right Arrow */}
//       <IconButton
//         onClick={handleRightClick}
//         sx={{
//           position: "absolute",
//           right: "0",
//           top: "50%",
//           transform: "translateY(-50%)",
//           zIndex: 2,
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>

//       <Box
//         sx={{
//           width: "60vw",
//           height: "60vw",
//           perspective: "1000px",
//           perspectiveOrigin: "50% 20%",
//         }}
//       >
//         {/* Rotating Carousel */}
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             transformStyle: "preserve-3d",
//             animation: `${rotateCarousel} 20s linear infinite`,
//             animationPlayState: paused ? "paused" : "running", // Pause animation when paused is true
//             transform: `translateZ(-30vw) rotateY(${
//               direction === "right" ? "0deg" : "360deg"
//             })`,
//           }}
//         >
//           {items.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: "14.5vw",
//                 height: "21.7vw",
//                 position: "absolute",
//                 left: "50%",
//                 top: "50%",
//                 transform: `rotateY(calc(36deg * ${index})) translateZ(30vw)`,
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   height: "100%",
//                   backgroundImage: `url(${item.img})`,
//                   backgroundPosition: "center",
//                   backgroundSize: "cover",
//                 }}
//               ></a>
//               {/* Reflection Effect */}
//               <Box
//                 sx={{
//                   marginTop: "-105%",
//                   height: "70%",
//                   backgroundImage: `url(${item.img}), ${reflectionGradient}`,
//                   backgroundSize: "cover",
//                   filter: "blur(2px)",
//                   transform: "scaleY(-1)",
//                   opacity: 0.5,
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "primary.main",
//                   textAlign: "center",
//                   fontSize: {
//                     xs: "3vw",
//                     sm: "1.9vw",
//                     md: "1.9vw",
//                     lg: "1.6vw",
//                     xl: "1.9vw",
//                   },
//                   textShadow: "3px 3px 0px rgba(0, 0, 0, 0.2)",
//                 }}
//               >
//                 {item.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Carousel;
