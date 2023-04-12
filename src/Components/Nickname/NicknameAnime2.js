import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import siloute1 from "./silouet1.json";

const MoodSelectAnime = () => {
  return (
    <div className="fadelick1">
      <Player
        src={siloute1}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default MoodSelectAnime;
