/* eslint-disable */

import React, { useState } from "react";
import Sound2in2 from "../Boymusic/Sound2in2";
import Sound2in1 from "../Boymusic/Sound2in1";
import "../../css/Card.css";
import "../../css/Chapter2.css";
import carddeco from "../carddeco.png";
import carddecoback from "../carddecoback.png";
import coverdeco from "../backdeco.png";

const SadText = () => {
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
            <Sound2in1 />
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
            <Sound2in2 />
            <img className="carddeco" src={carddecoback} alt="carddeco1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadText;
