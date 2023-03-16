import React, { useState } from "react";
import Sound2in2 from "../Boymusic/Sound2in2";
import Sound2in1 from "../Boymusic/Sound2in1";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";

const SadTextBoy = () => {
  return (
    <>
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            사운드 1앞면
          </div>
          <div className="card-back">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <Sound2in1 />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            사운드 2앞면
          </div>
          <div className="card-back2">
            <Sound2in2 />
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SadTextBoy;
