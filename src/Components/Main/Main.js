/* eslint-disable */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import SnowManBoy from "../ChapterBoy/SnowManBoy";
import SMAnimeBoy from "../ChapterBoy/SMAnimeBoy";
import SnowManGirl from "../ChapterGirl/SnowManGirl";
import SMAnimeGirl from "../ChapterGirl/SMAnimeGirl";
import RainTaeRuBoy from "../ChapterBoy/RainTaeRuBoy";
import RTRAnimeBoy from "../ChapterBoy/RTRAnimeBoy";
import RTRAnimeGirl from "../ChapterGirl/RTRAnimeGirl";
import RainTaeRuGirl from "../ChapterGirl/RainTaeRuGirl";
import CricKatBoy from "../ChapterBoy/CricKatBoy";
import CKAnimeBoy from "../ChapterBoy/CKAnimeBoy";
import CKAnimeGirl from "../ChapterGirl/CKAnimeGirl";
import CricKatGirl from "../ChapterGirl/CricKatGirl";
import BIRDAnimeBoy from "../ChapterBoy/BIRDAnimeBoy";
import BirdBoy from "../ChapterBoy/BirdBoy";
import BIRDAnimeGirl from "../ChapterGirl/BIRDAnimeGirl";
import BirdGirl from "../ChapterGirl/BirdGirl";
import ChapterThrillStart from "../ChapterBoy/ChapterThrillStart";
import ChapterThrillStartG from "../ChapterGirl/ChapterThrillStartG";

// import axios from "axios";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(true);
  //왼쪽 상단 플레이리스트 저장
  const savePlaylist1 = () => {
    if (status.sound1 === "") {
      return "";
    } else {
      return (
        <>
          <div className="playlistBox">사운드 1</div>
          <ReactHowler
            src={status.sound1}
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
  const savePlaylist2 = () => {
    if (status.sound2 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 2</p>
          <ReactHowler
            src={status.sound2}
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
  const savePlaylist3 = () => {
    if (status.sound3 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 3</p>
          <ReactHowler
            src={status.sound3}
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
  const savePlaylist4 = () => {
    if (status.sound4 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 4</p>
          <ReactHowler
            src={status.sound4}
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
  const savePlaylist5 = () => {
    if (status.sound5 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 5</p>
          <ReactHowler
            src={status.sound5}
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
  const savePlaylist6 = () => {
    if (status.sound6 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 6</p>
          <ReactHowler
            src={status.sound6}
            playing={play}
            loop={false}
            mute={false}
            volume={0.1}
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
  const savePlaylist7 = () => {
    if (status.sound7 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 7</p>
          <ReactHowler
            src={status.sound7}
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
  const savePlaylist8 = () => {
    if (status.sound8 === "") {
      return "";
    } else {
      return (
        <>
          <p>사운드 8</p>
          <ReactHowler
            src={status.sound8}
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
    } else if (status.moodSelect === 2001) {
      return <ChapterBoyStart />;
    } else if (status.moodSelect === 3001) {
      return <ChapterThrillStart />;
    } else if (status.moodSelect === 1401) {
      return <ChapterGirlStart />;
    } else if (status.moodSelect === 3401) {
      return <ChapterThrillStartG />;
    } else if (status.moodSelect === 1002) {
      return <SeaOrMountainBoy />;
    } else if (status.moodSelect === 1402) {
      return <SeaOrMountainGirl />;
    } else if (status.moodSelect === 1003) {
      return <RainTaeRuBoy />;
    } else if (status.moodSelect === 1403) {
      return <RainTaeRuGirl />;
    } else if (status.moodSelect === 1004) {
      return <CricKatBoy />;
    } else if (status.moodSelect === 1404) {
      return <CricKatGirl />;
    } else if (status.moodSelect === 1005) {
      return <BirdBoy />;
    } else if (status.moodSelect === 1405) {
      return <BirdGirl />;
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
      return <NicknameAnime2 />;
    } else if (status.moodSelect === 4) {
      return <NicknameAnime2 />;
    } else if (status.moodSelect === 5) {
      return <NicknameAnime2 />;
    } else if (status.moodSelect === 6) {
      // 남자 애니메이션 분기점
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 1000) {
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 1001) {
      return <C3AnimeBoy />;
    } else if (status.moodSelect === 1002) {
      return <C3AnimeBoy />;
    } else if (status.moodSelect === 1003) {
      return <RTRAnimeBoy />;
    } else if (status.moodSelect === 1004) {
      return <CKAnimeBoy />;
    } else if (status.moodSelect === 1005) {
      return <BIRDAnimeBoy />;
    }

    ////////////////////////남자 우울 애니메이션 /////////////////////////////
    else if (status.moodSelect === 2000) {
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 2001) {
      return <C3AnimeBoy />;
    } else if (status.moodSelect === 2002) {
      return <C3AnimeBoy />; // som 우울 그대로
    }

    ////////////////////////남자 긴장 애니메이션 /////////////////////////////
    else if (status.moodSelect === 3000) {
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 3001) {
      return <C3AnimeBoy />; // 긴장테마용 두둥실
    } else if (status.moodSelect === 3002) {
      return <C3AnimeBoy />; // 긴장테마용 두둥실 깜놀!!
    }

    /////////////////////////////////////////////////

    // 여자 애니메이션 분기점
    else if (status.moodSelect === 7) {
      return <CGAnimeGirl />;
    } else if (status.moodSelect === 1400) {
      return <HappyAnimeGirl />;
    } else if (status.moodSelect === 1401) {
      return <C3AnimeGirl />;
    } else if (status.moodSelect === 1402) {
      return <SOMAnimeGirl />;
    } else if (status.moodSelect === 1403) {
      return <RTRAnimeGirl />;
    } else if (status.moodSelect === 1404) {
      return <SMAnimeGirl />;
    } else if (status.moodSelect === 1405) {
      return <CKAnimeGirl />;
    } else if (status.moodSelect === 1406) {
      return <BIRDAnimeGirl />;
    } else if (status.moodSelect === 2400) {
      return <SadAnimeGirl />;
    } else if (status.moodSelect === 3400) {
      return <ThrillAnimeGirl />;
    }
  };

  return (
    <div className="maincomp">
      {/* <Link to="/gallery">
        <button
          onClick={() => {
            postData();
          }}
        >
          server save button
        </button>
      </Link> */}
      <button
        onClick={() => {
          dispatch({ type: "index/CKBOY_1005" });
        }}
      >
        Manager Test
      </button>
      <div className="Container_m">
        <table className="playlist">
          <tbody>
            <tr>
              <th>{savePlaylist1()}</th>
            </tr>
            <tr>
              <th>{savePlaylist2()}</th>
            </tr>
            <tr>
              <th>{savePlaylist3()}</th>
            </tr>
            <tr>
              <th>{savePlaylist4()}</th>
            </tr>
            <tr>
              <th>{savePlaylist6()}</th>
            </tr>
            <tr>
              <th>{savePlaylist5()}</th>
            </tr>
            <tr>
              <th>{savePlaylist7()}</th>
            </tr>
            <tr>
              <th>{savePlaylist8()}</th>
            </tr>
          </tbody>
        </table>
        <div className="Content_box">
          {/* <h2>Animation Area</h2> */}
          {setAnimation()}
        </div>
        <div className="textNselect">{setMoodStatus()}</div>
      </div>
    </div>
  );
};

export default Main;
