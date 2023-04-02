/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data5 from "./data5.json";
import "../Nickname/Anime1.css";

const BIRDAnimeBoy1 = () => {
  return (
    <div className="fadelick1">
      <Player
        src={data5}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default BIRDAnimeBoy1;
