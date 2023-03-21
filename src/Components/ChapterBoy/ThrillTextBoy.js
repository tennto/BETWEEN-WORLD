import React, { useState } from "react";
import Sound3in2 from "../Boymusic/Sound3in2";
import Sound3in1 from "../Boymusic/Sound3in1";
import "../../css/Card.css";
import "../../css/Chapter2.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import coverdeco from "../backdeco.png";

const ThrillTextBoy = () => {
  return (
    <div className="fadelick">
      <div className="wrap">
        <div className="card">
          <div className="card-front">
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
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
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back2">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <Sound3in2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThrillTextBoy;
