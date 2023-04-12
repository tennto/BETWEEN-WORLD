/* eslint-disable */

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import fadeout_bignose from "./fadeout_bignose.json";

const C4AnimeBoy = () => {
  return (
    <div>
      <Player
        src={fadeout_bignose}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default C4AnimeBoy;
