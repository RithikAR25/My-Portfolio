// import React, { useState } from "react";
// import styles from "./Carousel.module.css"; // Import the CSS module
// import Delhi from "../assets/Images/Delhi.png";
// import Gujarat from "../assets/Images/Gujarat.png";
// import Harihar_fort from "../assets/Images/Harihar_fort.png";
// import Harischandragad from "../assets/Images/Harischandragad.png";
// import Munnar from "../assets/Images/Munnar.png";
// import Pondy from "../assets/Images/Pondy.png";
// import Punjab from "../assets/Images/Punjab.png";
// import Rajasthan from "../assets/Images/Rajasthan.png";
// import anayadikuthu from "../assets/Images/anayadikuthu.png";
// import kolukkumalai from "../assets/Images/kolukkumalai.png";
// import { Box } from "@mui/material";

// const Carousel: React.FC = () => {
//   const [direction, setDirection] = useState(styles.moveRight); // Manage the carousel direction

//   // Function to handle left button click
//   const handleLeftClick = () => {
//     setDirection(styles.moveRight); // Change direction to moveLeft
//   };

//   // Function to handle right button click
//   const handleRightClick = () => {
//     setDirection(styles.moveLeft); // Change direction to moveRight
//   };

//   return (
//     <Box
//       width="100%"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <div className={styles.carousel}>
//         <div
//           className={`${styles["carousel-control-button"]} ${styles.left}`}
//           onClick={handleLeftClick} // Handle left click
//         ></div>
//         <div
//           className={`${styles["carousel-control-button"]} ${styles.right}`}
//           onClick={handleRightClick} // Handle right click
//         ></div>

//         <div
//           className={`${styles["carousel-rotation-direction"]} ${direction}`}
//         >
//           {/* Carousel Items */}
//           <ul
//             className={styles["carousel-item-wrapper"]}
//             style={{ "--_num-elements": 10 } as React.CSSProperties}
//           >
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 1 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTkzMjUwMDkxOTExNzU5?story_media_id=3146125933249883648_39391045872&igsh=MjNzOTAxc3MydnNr.com/s/aGlnaGxpZ2h0OjE4MDE2OTQyMjUyOTczMzA5?story_media_id=3259169882150619764_39391045872&igsh=a3A3aGlxbnczcTEx"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Delhi})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Delhi})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 2 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTYzOTk3MjAzNDA0MDkz?story_media_id=3141636059678839135_39391045872&igsh=MWRrbnBjYzl1a2VnNw=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Gujarat})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Gujarat})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 3 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE2OTQyMjUyOTczMzA5?story_media_id=3259169882150619764_39391045872&igsh=a3A3aGlxbnczcTEx"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Harihar_fort})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Harihar_fort})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 4 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMwNzU1OTU5OTQwOTA2?story_media_id=3345246468543630837_39391045872&igsh=MTAyM3FpcmRicWdyZg=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Harischandragad})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Harischandragad})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 5 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4NDI5NzA0Mzk1MDIxOTQx?story_media_id=3370096264119859443_39391045872&igsh=bnNlODhsMWcwYWg="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Munnar})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Munnar})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 6 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODU1NjA2NDAyODQ4MzY1?story_media_id=2999700238637235871_39391045872&igsh=b2RhYW43ejJiOXZt"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Pondy})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Pondy})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 7 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MjE4MTYyMDExMjQ1MTcy?story_media_id=3148323911234527690_39391045872&igsh=bG1iaWN0enRzejc3"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Punjab})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Punjab})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 8 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0MDg5MzQyMDU2OTU1?story_media_id=3145418362314405583_39391045872&igsh=MTRleDF4bHJ1bHgwbw=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${Rajasthan})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${Rajasthan})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 9 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDE3MDI0ODU0NTgzNDE5?story_media_id=3103878966960736816_39391045872&igsh=bW9vMDB4MnQ1eW83"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${anayadikuthu})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${anayadikuthu})` }}
//               ></div>
//             </li>
//             <li
//               className={styles["carousel-item"]}
//               style={{ "--_index": 10 } as React.CSSProperties}
//             >
//               <a
//                 href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MzU5MTk0MDYzMDE5MTg0?story_media_id=3094480606498512710_39391045872&igsh=d2l6b2ZkczRvY3N1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ backgroundImage: `url(${kolukkumalai})` }}
//               ></a>
//               <div
//                 className={styles.reflection}
//                 style={{ backgroundImage: `url(${kolukkumalai})` }}
//               ></div>
//             </li>
//             <li className={styles["carousel-ground"]}></li>
//           </ul>
//         </div>
//       </div>
//     </Box>
//   );
// };

//export default Carousel;

import React, { useState } from "react";
import styles from "./Carousel.module.css"; // Import the CSS module
import Delhi from "../assets/Images/Delhi.png";
import Gujarat from "../assets/Images/Gujarat.png";
import Harihar_fort from "../assets/Images/Harihar_fort.png";
import Harischandragad from "../assets/Images/Harischandragad.png";
import Munnar from "../assets/Images/Munnar.png";
import Pondy from "../assets/Images/Pondy.png";
import Punjab from "../assets/Images/Punjab.png";
import Rajasthan from "../assets/Images/Rajasthan.png";
import anayadikuthu from "../assets/Images/anayadikuthu.png";
import kolukkumalai from "../assets/Images/kolukkumalai.png";
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
    { name: "Delhi", img: Delhi, link: "https://www.instagram.com/delhi" },
    {
      name: "Gujarat",
      img: Gujarat,
      link: "https://www.instagram.com/gujarat",
    },
    {
      name: "Harihar Fort",
      img: Harihar_fort,
      link: "https://www.instagram.com/harihar",
    },
    {
      name: "Harischandragad",
      img: Harischandragad,
      link: "https://www.instagram.com/harischandragad",
    },
    { name: "Munnar", img: Munnar, link: "https://www.instagram.com/munnar" },
    { name: "Pondy", img: Pondy, link: "https://www.instagram.com/pondy" },
    { name: "Punjab", img: Punjab, link: "https://www.instagram.com/punjab" },
    {
      name: "Rajasthan",
      img: Rajasthan,
      link: "https://www.instagram.com/rajasthan",
    },
    {
      name: "Anayadikuthu",
      img: anayadikuthu,
      link: "https://www.instagram.com/anayadikuthu",
    },
    {
      name: "Kolukkumalai",
      img: kolukkumalai,
      link: "https://www.instagram.com/kolukkumalai",
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <div className={styles.carousel}>
        <div
          className={`${styles["carousel-control-button"]} ${styles.left}`}
          onClick={handleLeftClick} // Handle left click
        ></div>
        <div
          className={`${styles["carousel-control-button"]} ${styles.right}`}
          onClick={handleRightClick} // Handle right click
        ></div>

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
