import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import Nickname from "../Nickname/Nickname";
import HappyTextBoy from "../ChapterBoy/HappyTextBoy";
import HappyTextGirl from "../ChapterGirl/HappyTextGirl";
import SadTextBoy from "../ChapterBoy/SadTextBoy";
import ThrillTextBoy from "../ChapterBoy/ThrillTextBoy";
import SadTextGirl from "../ChapterGirl/SadTextGirl";
import ThrillTextGirl from "../ChapterGirl/ThrillTextGirl";
import HappyAnimeGirl from "../ChapterGirl/HappyAnimeGirl";
import SadAnimeGirl from "../ChapterGirl/SadAnimeGirl";
import ThrillAnimeGirl from "../ChapterGirl/ThrillAnimeGirl";
import NicknameAnime from "../Nickname/NicknameAnime";
import NicknameAnime2 from "../Nickname/NicknameAnime2";
import NicknameAnime3 from "../Nickname/NicknameAnime3";
import NicknameAnime4 from "../Nickname/NicknameAnime4";
import ChapterBoy from "../ChapterBoy/ChapterBoy";
import ChapterGirl from "../ChapterGirl/ChapterGirl";
import NicknameAnime5 from "../Nickname/NicknameAnime5";
import C2AnimeBoy from "../ChapterBoy/C2AnimeBoy";
import ReactHowler from "../../howler/ReactHowler.js";
import { useState } from "react";
import C3AnimeGirl from "../ChapterGirl/C3AnimeGirl";
import SeaOrMountainGirl from "../ChapterGirl/SeaOrMountainGirl";
import SeaOrMountainBoy from "../ChapterBoy/SeaOrMountainBoy";
import SOMAnimeGirl from "../ChapterGirl/SOMAnimeGirl";
import CGAnimeGirl from "../ChapterGirl/CGAnimeGirl";
import ChapterBoyStart from "../ChapterBoy/ChapterBoyStart";
import ChapterGirlStart from "../ChapterGirl/ChapterGirlStart";
import SOMAnimeBoy from "../ChapterBoy/SOMAnimeBoy";
import C3AnimeBoy from "../ChapterBoy/C3AnimeBoy";
import HappyAnimeBoy from "../ChapterBoy/HappyAnimeBoy";
import SadAnimeBoy from "../ChapterBoy/SadAnimeBoy";
import ThrillAnimeBoy from "../ChapterBoy/ThrillAnimeBoy";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(true);
  const playarr = [];

  //왼쪽 상단 플레이리스트 저장
  const savePlaylist = () => {
    for (var i = 1; i < 5; i++) {
      if (status.playersound.sound1 !== "") {
        playarr.push(status.playersound.sound1);
        console.log(playarr[i - 1]);
      }
    }

    if (playarr[0] === undefined) {
      return "";
    } else {
      return (
        <>
          <p>사운드 1</p>
          <ReactHowler
            src={playarr[0]}
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
    }
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
      return <ChapterBoy />;
    } else if (status.moodSelect === 7) {
      return <ChapterGirl />;
    } else if (status.moodSelect === 1000) {
      return <HappyTextBoy />;
    } else if (status.moodSelect === 1400) {
      return <HappyTextGirl />;
    } else if (status.moodSelect === 2000) {
      return <SadTextBoy />;
    } else if (status.moodSelect === 2400) {
      return <SadTextGirl />;
    } else if (status.moodSelect === 3000) {
      return <ThrillTextBoy />;
    } else if (status.moodSelect === 3400) {
      return <ThrillTextGirl />;
    } else if (status.moodSelect === 1001) {
      return <ChapterBoyStart />;
    } else if (status.moodSelect === 1401) {
      return <ChapterGirlStart />;
    } else if (status.moodSelect === 1002) {
      return <SeaOrMountainBoy />;
    } else if (status.moodSelect === 1402) {
      return <SeaOrMountainGirl />;
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
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 1000) {
      return <HappyAnimeBoy />;
    } else if (status.moodSelect === 1001) {
      return <C3AnimeBoy />;
    } else if (status.moodSelect === 1002) {
      return <SOMAnimeBoy />;
    } else if (status.moodSelect === 2000) {
      return <SadAnimeBoy />;
    } else if (status.moodSelect === 3000) {
      return <ThrillAnimeBoy />;
    }
    // 여자 애니메이션 분기점
    else if (status.moodSelect === 7) {
      return <CGAnimeGirl />;
    } else if (status.moodSelect === 1400) {
      return <HappyAnimeGirl />;
    } else if (status.moodSelect === 1401) {
      return <C3AnimeGirl />;
    } else if (status.moodSelect === 1402) {
      return <SOMAnimeGirl />;
    } else if (status.moodSelect === 2400) {
      return <SadAnimeGirl />;
    } else if (status.moodSelect === 3400) {
      return <ThrillAnimeGirl />;
    }
  };

  return (
    <div className="maincomp">
      <div className="Container_m">
        <div className="playlist">{savePlaylist()}</div>
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
