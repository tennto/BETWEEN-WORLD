import React, { useState } from "react";
import Sound3in2 from "../Boymusic/Sound3in2";
import Sound3in1 from "../Boymusic/Sound3in1";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";

const ThrillTextBoy = () => {
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
            <Sound3in1 />
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
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <Sound3in2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThrillTextBoy;
