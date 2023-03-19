import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import nick1 from "./data1.json";
import "./Anime1.css";

const MoodSelectAnime = () => {
  return (
    <div className="fadelick">
      <Player
        src={nick1}
        style={{ width: "1920px" }}
        autoplay={true}
        loop={false}
        speed={1}
      />
    </div>
  );
};

export default MoodSelectAnime;
