import React from "react";
import "../../css/Gallery.css";
import { useEffect, useState } from "react";

const Loding = ({ onCloseing }) => {
  // useEffect(() => {
  //   onCloseing?.();
  // }, 3000);
  useEffect(() => {
    setTimeout(() => onCloseing?.(), 3000);
  }, []);

  return (
    <div className="all-screen">
      <div className="centering">
        <p className="Loding">B</p>
        <p className="Loding">E</p>
        <p className="Loding">T</p>
        <p className="Loding">W</p>
        <p className="Loding">E</p>
        <p className="Loding">E</p>
        <p className="Loding">N</p>
        <p className="Loding">W</p>
        <p className="Loding">O</p>
        <p className="Loding">R</p>
        <p className="Loding">L</p>
        <p className="Loding">D</p>
      </div>
    </div>
  );
};

export default Loding;
