/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data2 from "./data2.json";
import "../Nickname/Anime1.css";

const C2AnimeBoy = () => {
  return (
    <div className="fadelick1">
      <Player
        src={data2}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default C2AnimeBoy;
