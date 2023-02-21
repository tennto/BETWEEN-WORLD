import React, { useState } from "react";
import "./HappyText1.css";
import FullControl from "../Music/FullControl";
import Happy12 from "../Music/Happy12";



const HappyText1 = () => {
  const [visible,setVisible] = useState(1);
  const [visible2,setVisible2] = useState(1);

  const isHovering = () =>{
    if (visible === 1){
      return <div className="hover2" onClick={()=>{
        setVisible(0)
      }}
      >no.2 cover</div>
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
      >no.2 Select</div>
    }
    else {
      return "";
    }
  }

  return (
    <>
      <div className="selec_1" onMouseOut={()=>{setVisible2(1)}}> <Happy12 /></div>
      <div className="hover1" onMouseOut={()=>{setVisible(1)}}> <FullControl /></div>
      {isHovering2()}
      {isHovering()}
    </>
  );
};

export default HappyText1;
