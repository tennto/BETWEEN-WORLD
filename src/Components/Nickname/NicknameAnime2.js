import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import data1 from "./data1.json";

const MoodSelectAnime = () => {
  return (
    <div className="fadelick1">
      <Player
        src={data1}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default MoodSelectAnime;
