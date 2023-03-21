import React, { useState } from "react";
import "../../css/Card.css";
import GSound3in2 from "../Girlmusic/GSound3in2";
import GSound3in1 from "../Girlmusic/GSound3in1";
import coverdeco from "../backdeco.png";
import carddeco from "../carddeco.png";
import "../../css/Chapter2.css";
import carddecoback from "../carddecoback.png";

const ThrillTextGirl = () => {
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
            <GSound3in1 />
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
            <GSound3in2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThrillTextGirl;
