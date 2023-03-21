import React, { useState } from "react";
import GSound2in2 from "../Girlmusic/GSound2in2";
import GSound2in1 from "../Girlmusic/GSound2in1";
import "../../css/Card.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import coverdeco from "../backdeco.png";
import "../../css/Chapter2.css";

const SadTextGirl = () => {
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
            <GSound2in1 />
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="card2">
          <div className="card-front2">
            {" "}
            <img className="carddeco" src={carddeco} alt="carddeco1" />
            <img className="coverdeco" src={coverdeco} alt="coverdeco" />
          </div>
          <div className="card-back2">
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
            <GSound2in2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadTextGirl;
