import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import background from "./white-fabric-texture.jpg";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();

  // 분위기 테마 별 State 및 리턴컴포넌트 선언
  // const setMoodStatus = () => {
  //   if (status.moodSelect === 1) {
  //     return <Nickname />;
  //   } else if (status.moodSelect === 100) {
  //     return <HappyText1 />;
  //   } else if (status.moodSelect === 200) {
  //     return <SadText1 />;
  //   } else if (status.moodSelect === 300) {
  //     return <ThrillText1 />;
  //   }
  // };

  // State 별 표시할 애니메이션 컴포넌트 선언
  // const setAnimation = () => {
  //   if (status.moodSelect === 1) {
  //     return <NicknameAnime1 />;
  //   } else if (status === 100) {
  //     return <HappyAnime1 />;
  //   } else if (status === 200) {
  //     return <SadAnime1 />;
  //   } else if (status === 300) {
  //     return <ThrillAnime1 />;
  //   }
  // };

  return (
    <div className="maincomp">
      <div className="Container_m">
        <div className="Content_box">
          <h2>Animation Area</h2>
        </div>
        <div className="textNselect">
          <h2>Text & Select Area1</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
