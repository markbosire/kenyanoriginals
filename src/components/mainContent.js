import { React, useState, useEffect } from "react";
import "../index.css"; // Assuming you have a separate CSS file for styling

const MainContent = ({ color }) => {
  const [angle, setAngle] = useState(0);
  const [currentImage, setCurrentImage] = useState("");

  // Switch the image based on the color prop
  useEffect(() => {
    if (color === "#EE6F63") {
      setCurrentImage("image1");
    } else {
      setCurrentImage("image2");
    }
  }, [color]);

  const handleMouseMove = (event) => {
    // Get the position of the image
    const image = document.querySelector(".image");
    const rect = image.getBoundingClientRect();
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    // Get the position of the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the angle between the mouse and the image
    const angle = Math.atan2(mouseY - imageY, mouseX - imageX);
    setAngle(angle);
  };

  return (
    <div className="main-content" onMouseMove={handleMouseMove}>
      <div className="row">
        <div className="titleContainer">
          <h1
            className="title"
            style={{
              color: `${color}`,
            }}
          >
            KENYAN
          </h1>
          <h1
            className="title"
            style={{
              color: `${color}`,
            }}
          >
            ORIGINALS
          </h1>
          <div className="svgRow">
            <div className="gifContainer">
              <img
                className="gif1"
                alt="can"
                src={`./assets/images/${
                  currentImage === "image1" ? "gif1.gif" : "gif2.gif"
                }`}
              />
            </div>
            <div className="gifContainer">
              <img
                className="gif1"
                alt="can"
                src={`./assets/images/${
                  currentImage === "image1" ? "gif1.gif" : "gif2.gif"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img
            className={`image ${
              currentImage === "image1" ? "show rotate" : ""
            }`}
            id="image1"
            alt="can"
            src="./assets/images/can1.png"
            style={{
              transform: `rotate(${angle / 50}rad)`,
            }}
          />
          <img
            className={`image ${
              currentImage === "image2" ? "show rotate" : ""
            }`}
            id="image2"
            alt="can"
            src="./assets/images/can2.png"
            style={{
              transform: `rotate(${angle / 50}rad)`,
            }}
          />
        </div>
        <div className="shopbutton">SHOP NOW</div>
      </div>
    </div>
  );
};

export default MainContent;
