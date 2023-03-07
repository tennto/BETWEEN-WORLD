import React, { useState } from "react";
import "../../css/HappyText.css";
import Sound2in2 from "../Boymusic/Sound2in2";
import Sound2in1 from "../Boymusic/Sound2in1";

const SadTextBoy = () => {
  const [visible, setVisible] = useState(1);
  const [visible2, setVisible2] = useState(1);

  const isHovering = () => {
    if (visible === 1) {
      return (
        <div
          className="hover2"
          onClick={() => {
            setVisible(0);
          }}
        >
          음악 1(앞면)
        </div>
      );
    } else {
      return "";
    }
  };

  const isHovering2 = () => {
    if (visible2 === 1) {
      return (
        <div
          className="selec_2"
          onClick={() => {
            setVisible2(0);
          }}
        >
          음악 2 (앞면)
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <>
      <div
        className="selec_1"
        onMouseOut={() => {
          setVisible2(1);
        }}
      >
        {" "}
        <Sound2in2 />
      </div>
      <div
        className="hover1"
        onMouseOut={() => {
          setVisible(1);
        }}
      >
        {" "}
        <Sound2in1 />
      </div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

export default SadTextBoy;
