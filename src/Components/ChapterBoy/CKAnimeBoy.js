/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data4 from "./data4.json";
import "../Nickname/Anime1.css";

const CKAnimeBoy = () => {
  return (
    <div className="fadelick1">
      <Player
        src={data4}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default CKAnimeBoy;
