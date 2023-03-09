import React from "react";
import { useSelector } from "react-redux";
import anime1 from "./anime1.png";
import "./Anime1.css";

const NicknameAnime = () => {
  return (
    <div>
      <img className="bg_1" src={anime1} alt="anime1" />
    </div>
  );
};

export default NicknameAnime;
