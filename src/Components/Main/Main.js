import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import Nickname from "../Nickname/Nickname";
import HappyText1 from "../MoodLine/HappyText1";
import SadText1 from "../MoodLine/SadText1";
import ThrillText1 from "../MoodLine/ThrillText1";
import HappyAnime1 from "../AnimationLine/Happy/HappyAnime1";
import SadAnime1 from "../AnimationLine/Sad/SadAnime1";
import ThrillAnime1 from "../AnimationLine/Thrill/ThrillAnime1";
import NicknameAnime from "../Nickname/NicknameAnime";
import NicknameAnime2 from "../Nickname/NicknameAnime2";
import NicknameAnime3 from "../Nickname/NicknameAnime3";
import NicknameAnime4 from "../Nickname/NicknameAnime4";
import ChapterNo2 from "../chapterNo2/Chapter2";
import NicknameAnime5 from "../Nickname/NicknameAnime5";
import C2Anime1 from "../chapterNo2/C2Anime1";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();

  // 분위기 테마 별 State 및 최초 상위 리턴컴포넌트 선언
  const setMoodStatus = () => {
    if (status.moodSelect === 1) {
      return <Nickname />;
    } else if (status.moodSelect === 2) {
      return <Nickname />;
    } else if (status.moodSelect === 3) {
      return <Nickname />;
    } else if (status.moodSelect === 4) {
      return <Nickname />;
    } else if (status.moodSelect === 5) {
      return <Nickname />;
    } else if (status.moodSelect === 6) {
      return <ChapterNo2 />;
    } else if (status.moodSelect === 100) {
      return <HappyText1 />;
    } else if (status.moodSelect === 200) {
      return <SadText1 />;
    } else if (status.moodSelect === 300) {
      return <ThrillText1 />;
    }
  };

  // State 별 표시할 애니메이션 컴포넌트 선언
  // 확인 후 컴포넌트 변경 예정
  const setAnimation = () => {
    if (status.moodSelect === 1) {
      return <NicknameAnime />;
    } else if (status.moodSelect === 2) {
      return <NicknameAnime2 />;
    } else if (status.moodSelect === 3) {
      return <NicknameAnime3 />;
    } else if (status.moodSelect === 4) {
      return <NicknameAnime4 />;
    } else if (status.moodSelect === 5) {
      return <NicknameAnime5 />;
    } else if (status.moodSelect === 6) {
      return <C2Anime1 />;
    } else if (status.moodSelect === 100) {
      return <C2Anime1 />;
    } else if (status.moodSelect === 200) {
      return <SadAnime1 />;
    } else if (status.moodSelect === 300) {
      return <ThrillAnime1 />;
    }
  };

  return (
    <div className="maincomp">
      <div className="Container_m">
        <div className="Content_box">
          <h2>Animation Area</h2>
          {setAnimation()}
        </div>
        <div className="textNselect">{setMoodStatus()}</div>
      </div>
    </div>
  );
};

export default Main;
