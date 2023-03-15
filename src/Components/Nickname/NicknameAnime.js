import React from "react";
import { useSelector } from "react-redux";
import anime1 from "./bg0.png";
import "./Anime1.css";
// import { Player } from "@lottiefiles/react-lottie-player";
// import nick1 from "./data1.json";

const NicknameAnime = () => {
  return (
    <div>
      <img className="bg_1" src={anime1} alt="anime1" />
    </div>
  );
};

export default NicknameAnime;
