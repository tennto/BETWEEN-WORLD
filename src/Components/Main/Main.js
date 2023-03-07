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
import ChapterNo3 from "../../chapterNo3/ChapterNo3";
import NicknameAnime5 from "../Nickname/NicknameAnime5";
import C2Anime1 from "../chapterNo2/C2Anime1";
import ReactHowler from "../../howler/ReactHowler.js";
import { useState } from "react";
import C3Anime1 from "../../chapterNo3/C3Anime1";
import SeaOrMountainGirl from "../SeaOrMountain/SeaOrMountainGirl";
import SOMAnimeGirl1 from "../SeaOrMountain/SOMAnimeGirl1";
import CGAnime1 from "../ChapterGirl/CGAnime1";
import ChapterGirl from "../ChapterGirl/ChapterGirl";
import SOMAnimeBoy1 from "../SeaOrMountain/SOMAnimeBoy1";
import C3AnimeBoy1 from "../../chapterNo3/C3AnimeBoy1";
import HappyAnimeBoy1 from "../AnimationLine/Happy/HappyAnimeBoy1";
import SadAnimeBoy1 from "../AnimationLine/Sad/SadAnimeBoy1";
import ThrillAnimeBoy1 from "../AnimationLine/Thrill/ThrillAnimeBoy1";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(true);
  const playerplaylist = [];

  //왼쪽 상단 플레이리스트 저장
  const savePlaylist = () => {
    if (status.playersound.sound1 !== "") {
      playerplaylist.push(status.playersound.sound1);
    }
    if (status.playersound.sound2 !== "") {
      playerplaylist.push(status.playersound.sound2);
    }
    return (
      <>
        <ReactHowler
          src={"example_sound.mp3"}
          playing={play}
          loop={false}
          mute={false}
          volume={1.0}
        />
        <button
          onClick={() => {
            setPlaying(false);
          }}
        >
          멈춤
        </button>
        <button
          onClick={() => {
            setPlaying(true);
          }}
        >
          실행
        </button>
      </>
    );
  };

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
    } else if (status.moodSelect === 7) {
      return <ChapterGirl />;
    } else if (status.moodSelect === 1000) {
      return <HappyText1 />;
    } else if (status.moodSelect === 1400) {
      return <HappyText1 />;
    } else if (status.moodSelect === 1001) {
      return <ChapterNo3 />;
    } else if (status.moodSelect === 1401) {
      return <ChapterGirl />; // Example 3 /4 에서 디스패치 1401번대 요청
    } else if (status.moodSelect === 1002) {
      return <SeaOrMountainGirl />;
    } else if (status.moodSelect === 2000) {
      return <SadText1 />;
    } else if (status.moodSelect === 3000) {
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
      // 남자 애니메이션 분기점
      return <C2Anime1 />;
    } else if (status.moodSelect === 1000) {
      return <HappyAnimeBoy1 />;
    } else if (status.moodSelect === 1001) {
      return <C3AnimeBoy1 />;
    } else if (status.moodSelect === 1002) {
      return <SOMAnimeBoy1 />;
    } else if (status.moodSelect === 2000) {
      return <SadAnimeBoy1 />;
    } else if (status.moodSelect === 3000) {
      return <ThrillAnimeBoy1 />;
    }
    // 여자 애니메이션 분기점
    else if (status.moodSelect === 7) {
      return <CGAnime1 />;
    } else if (status.moodSelect === 1400) {
      return <HappyAnime1 />; // HappyAnimeGirl 로 변경 -> Example 3/4
    } else if (status.moodSelect === 1401) {
      return <C3Anime1 />;
    } else if (status.moodSelect === 1402) {
      return <SOMAnimeGirl1 />;
    } else if (status.moodSelect === 2400) {
      return <SadAnime1 />;
    } else if (status.moodSelect === 3400) {
      return <ThrillAnime1 />;
    }
  };

  return (
    <div className="maincomp">
      <div className="Container_m">
        <div className="playlist">{savePlaylist()}</div>
        <div className="Content_box">
          <h2>Animation Area</h2>
          {setAnimation()}
          <button
            onClick={() => {
              dispatch({ type: "index/HAPPY_MOOD" });
            }}
          >
            행복테마
          </button>
          <button
            onClick={() => {
              dispatch({ type: "index/SAD_MOOD" });
            }}
          >
            슬픈테마
          </button>
          <button
            onClick={() => {
              dispatch({ type: "index/THRILL_MOOD" });
            }}
          >
            긴장테마
          </button>
        </div>
        <div className="textNselect">{setMoodStatus()}</div>
      </div>
    </div>
  );
};

export default Main;
