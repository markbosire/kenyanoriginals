import React, { useState, useEffect } from "react";
import mySvg from "./background.svg";
import Marque from "./marquee";
import MainContent from "./mainContent";
import "../index.css";

const Homepage = () => {
  const [color, setColor] = useState("#EE6F63");
  const [fill1, setFill1] = useState("#EE6F63");
  const [fill2, setFill2] = useState("#8a8a8a");
  const [imgSrc, setImgSrc] = useState("");
  const [shadowStyle1, setShadowStyle1] = useState({
    WebkitFilter: "drop-shadow(0 0 max(4px,0.2vw) rgba(238, 111, 99, 1))",
    filter: "drop-shadow(0 0 max(4px,0.2vw) rgba(238, 111, 99, 1))",
  });
  const [shadowStyle2, setShadowStyle2] = useState({
    WebkitFilter: "drop-shadow(0 0 max(4px,0.2vw) #C97F00",
    filter: "drop-shadow(0 0 max(4px,0.2vw) #C97F00)",
  });

  const handleRedClick = () => {
    setColor("#EE6F63");
  };

  const handleYellowClick = () => {
    setColor("#C97F00");
  };

  const updateImgSrc = async () => {
    const response = await fetch(mySvg);
    const text = await response.text();
    const coloredText = text.replace('fill="#000000"', `fill="${color}"`);
    const base64 = btoa(coloredText);
    setImgSrc(`data:image/svg+xml;base64,${base64}`);
  };

  useEffect(() => {
    updateImgSrc();

    setFill1(color === "#EE6F63" ? color : "#8a8a8a");
    setFill2(color === "#C97F00" ? color : "#8a8a8a");
    setShadowStyle1(
      color === "#EE6F63"
        ? {
            WebkitFilter:
              "drop-shadow(0 0 max(4px,0.2vw) rgba(238, 111, 99, 1))",
            filter: "drop-shadow(0 0 max(4px,0.2vw) rgba(238, 111, 99, 1))",
          }
        : {}
    );
    setShadowStyle2(
      color === "#C97F00"
        ? {
            WebkitFilter: "drop-shadow(0 0 max(4px,0.2vw) #C97F00",
            filter: "drop-shadow(0 0 max(4px,0.2vw) #C97F00",
          }
        : {}
    );
  }, [color]);

  return (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        overflow: "auto",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: `${color}`,
          height: "fit-content",
        }}
      >
        <Marque />
      </div>

      <section
        style={{
          margin: "5px 80px",
        }}
      >
        <div className="container">
          <div className="rowFlavours">
            <p>FLAVOR:</p>
            <img
              src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
      <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
      <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)" fill="${fill1}"><path  d="M2880.2,4992.3c-217.3-28.8-498-90.4-728.7-161.5c-117.3-36.5-315.3-98.1-436.5-136.5c-317.2-98.1-580.7-107.7-997.9-32.7l-65.4,11.5l46.1-82.7c59.6-105.7,313.4-374.9,488.4-517.2c519.1-423,1353.6-830.6,1874.7-913.3c546.1-88.4,988.3-44.2,1424.7,142.3c90.4,38.5,313.4,157.7,494.1,267.3c180.7,107.7,373,211.5,426.9,230.7c51.9,19.2,101.9,38.5,107.7,46.1c19.2,17.3-509.5,180.7-755.7,232.7c-125,25-309.6,57.7-409.5,71.1c-248,34.6-878.7,30.8-1280.5-7.7c-465.3-46.2-480.7-38.5-46.1,25c457.6,67.3,761.4,96.1,990.2,96.1c394.2,0,922.9-78.8,1345.9-200c126.9-36.5,232.7-63.5,236.5-59.6c13.5,13.5-303.8,269.2-467.2,376.9C4428,4844.2,3562.8,5078.8,2880.2,4992.3z"/><path d="M6025.8,4065.5c-13.5-15.4-42.3-171.1-65.4-348l-40.4-319.2H5647c-544.1,0-994-132.7-1424.7-423C3078.2,2202.4,2524.5,1068,2522.6-504.8c0-588.4,153.8-1432.4,376.9-2078.5c353.8-1017.1,840.2-1640.1,1555.5-1988.1c678.7-330.7,1238.2-286.5,1720.8,134.6c69.2,61.5,301.9,250,519.1,419.2c571.1,449.9,709.5,569.1,999.8,859.5c761.4,757.5,1305.5,1667,1530.5,2549.5c88.4,355.7,123,628.7,123,1001.7c0,565.3-90.4,996-307.6,1459.4c-467.2,999.8-1397.8,1584.3-2518.8,1584.3H6368v296.1c0,240.3-5.7,300-28.8,319.2C6293,4090.5,6054.6,4102.1,6025.8,4065.5z M7579.3,2523.5c586.4-200,1028.7-757.6,1186.3-1495.9c25-115.4,34.6-244.2,34.6-474.9c-1.9-342.2-26.9-526.8-117.3-801.8c-53.8-165.4-196.1-476.8-213.4-461.5c-3.8,5.8,1.9,123.1,13.5,261.5c36.5,378.8,17.3,1030.6-38.5,1299.8c-57.7,290.3-140.4,542.2-251.9,765.2c-186.5,374.9-369.2,594.1-767.2,915.2C7358.2,2585,7404.4,2583.1,7579.3,2523.5z"/> </g></g>
    </svg>`
              )}`}
              alt="Inline SVG"
              width="30px"
              height="30px"
              onClick={handleRedClick}
              style={{ ...shadowStyle1 }}
            />
            <img
              src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="81.42 75.3 137.3 149.6">
          <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
          </metadata>
          <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="${fill2}" stroke="none">
          <path d="M1751 2021 c-374 -242 -364 -237 -426 -199 -41 25 -80 23 -99 -4 -9 -12 -16 -27 -16 -33 0 -15 146 -246 162 -257 22 -13 54 -9 72 10 12 14 16 36 15 81 -1 42 3 67 12 76 8 7 170 112 361 234 221 141 349 230 354 243 8 27 -26 72 -57 75 -16 1 -138 -72 -378 -226z"/>
          <path d="M1100 1802 c-28 -9 -50 -35 -50 -60 0 -25 178 -316 208 -339 37 -29 102 3 102 50 0 19 -159 283 -200 332 -13 16 -40 23 -60 17z"/>
          <path d="M936 1699 c-15 -12 -26 -30 -26 -45 0 -23 160 -285 203 -331 11 -13 30 -23 42 -23 30 0 65 36 65 66 0 29 -181 316 -213 339 -28 20 -39 19 -71 -6z"/>
          <path d="M834 1576 c-61 -45 29 -252 130 -300 53 -25 96 -2 96 52 0 17 -124 216 -152 244 -22 22 -47 23 -74 4z"/>
          <path d="M914 1231 c-10 -10 -3 -95 11 -128 22 -52 18 -91 -15 -158 -16 -33 -30 -66 -30 -73 0 -29 35 -85 64 -103 42 -26 79 -24 115 7 47 39 50 81 12 164 -43 93 -51 167 -22 213 11 19 21 45 21 58 0 23 -3 24 -76 24 -42 0 -78 -2 -80 -4z m12 -331 c-7 -30 -7 -49 1 -71 10 -25 10 -29 -2 -19 -22 18 -26 58 -11 95 20 47 26 44 12 -5z"/>
          </g>
          </svg>`
              )}`}
              alt="Inline SVG"
              width="30px"
              height="30px"
              onClick={handleYellowClick}
              style={{ ...shadowStyle2 }}
            />
          </div>
          <MainContent color={color} />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
