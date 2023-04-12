/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data3 from "./data3.json";

const C3AnimeBoy = () => {
  return (
    <div>
      <Player
        src={data3}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default C3AnimeBoy;
