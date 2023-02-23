import React, { useState } from "react";
import "./HappyText1.css";
import Happyfirst1 from "../Music/Happyfirst1";
import Happyfirst2 from "../Music/Happyfirst2";



const HappyText1 = () => {
  const [visible,setVisible] = useState(1);
  const [visible2,setVisible2] = useState(1);

  const isHovering = () =>{
    if (visible === 1){
      return <div className="hover2" onClick={()=>{
        setVisible(0)
      }}
      >음악 1(앞면)</div>
    }
    else {
      return "";
    }
  }

  const isHovering2 = () =>{
    if (visible2 === 1){
      return <div className="selec_2" onClick={()=>{
        setVisible2(0)
      }}
      >음악 2 (앞면)</div>
    }
    else {
      return "";
    }
  }

  return (
    <>
      <div className="selec_1" onMouseOut={()=>{setVisible2(1)}} > <Happyfirst2 /></div>
      <div className="hover1" onMouseOut={()=>{setVisible(1)}} > <Happyfirst1 /></div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

export default HappyText1;
