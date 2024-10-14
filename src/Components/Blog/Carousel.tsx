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
        xs: "30vh", // small screens (mobile)
        sm: "50vh", // small to medium screens
        md: "70vh", // medium screens (tablet)
        lg: "70vh", // large screens (desktop)
        xl: "80vh", // extra large screens
      }}
    >
      <div
        className={styles.carousel}
        title="Move the pointer for the carousel effect."
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
