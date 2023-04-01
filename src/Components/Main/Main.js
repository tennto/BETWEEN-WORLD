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
import SOMAnimeGirl from "../ChapterGirl/SOMAnimeGirl";
import CGAnimeGirl from "../ChapterGirl/CGAnimeGirl";
import ChapterBoyStart from "../ChapterBoy/ChapterBoyStart";
import ChapterGirlStart from "../ChapterGirl/ChapterGirlStart";
import SOMAnimeBoy from "../ChapterBoy/SOMAnimeBoy";
import C3AnimeBoy from "../ChapterBoy/C3AnimeBoy";
import HappyAnimeBoy from "../ChapterBoy/HappyAnimeBoy";
import SadAnimeBoy from "../ChapterBoy/SadAnimeBoy";
import ThrillAnimeBoy from "../ChapterBoy/ThrillAnimeBoy";

import RTRAnimeBoy1 from "../ChapterBoy/RTRAnimeBoy1";
import RTRAnimeBoy2 from "../ChapterBoy/RTRAnimeBoy2";
import RTRAnimeBoy3 from "../ChapterBoy/RTRAnimeBoy3";
import RTRAnimeGirl1 from "../ChapterGirl/RTRAnimeGirl1";
import RTRAnimeGirl2 from "../ChapterGirl/RTRAnimeGirl2";
import RTRAnimeGirl3 from "../ChapterGirl/RTRAnimeGirl3";
import CKAnimeBoy1 from "../ChapterBoy/CKAnimeBoy1";
import CKAnimeBoy2 from "../ChapterBoy/CKAnimeBoy2";
import CKAnimeBoy3 from "../ChapterBoy/CKAnimeBoy3";
import CKAnimeGirl1 from "../ChapterGirl/CKAnimeGirl1";
import CKAnimeGirl2 from "../ChapterGirl/CKAnimeGirl2";
import CKAnimeGirl3 from "../ChapterGirl/CKAnimeGirl3";
import BIRDAnimeBoy1 from "../ChapterBoy/BIRDAnimeBoy1";
import BIRDAnimeBoy2 from "../ChapterBoy/BIRDAnimeBoy2";
import BIRDAnimeBoy3 from "../ChapterBoy/BIRDAnimeBoy3";
import BIRDAnimeGirl1 from "../ChapterGirl/BIRDAnimeGirl1";
import BIRDAnimeGirl2 from "../ChapterGirl/BIRDAnimeGirl2";
import BIRDAnimeGirl3 from "../ChapterGirl/BIRDAnimeGirl3";

import ChapterThrillStart from "../ChapterBoy/ChapterThrillStart";
import ChapterThrillStartG from "../ChapterGirl/ChapterThrillStartG";
import ChapterBoyStart2001 from "../ChapterBoy/ChapterBoyStart2001";
import ChapterGirlStart2401 from "../ChapterGirl/ChapterGirlStart2401";
/////////////////////////////////////////////////////////////////////////
import SeaOrMountainBoy from "../ChapterBoy/SeaOrMountainBoy";
import SeaOrMountainBoy2002 from "../ChapterBoy/SeaOrMountainBoy2002";
import SeaOrMountainBoy3002 from "../ChapterBoy/SeaOrMountainBoy3002";

import RainTaeRuBoy from "../ChapterBoy/RainTaeRuBoy";
import RainTaeRuBoy2003 from "../ChapterBoy/RainTaeRuBoy2003";
import RainTaeRuBoy3003 from "../ChapterBoy/RainTaeRuBoy3003";

import CricKatBoy from "../ChapterBoy/CricKatBoy";
import CricKatBoy2004 from "../ChapterBoy/CricKatBoy2004";
import CricKatBoy3004 from "../ChapterBoy/CricKatBoy3004";

import BirdBoy from "../ChapterBoy/BirdBoy";
import BirdBoy2005 from "../ChapterBoy/BirdBoy2005";
import BirdBoy3005 from "../ChapterBoy/BirdBoy3005";
/////////////////////////////////////////////////////////////////////////
import SeaOrMountainGirl from "../ChapterGirl/SeaOrMountainGirl";
import SeaOrMountainGirl2402 from "../ChapterGirl/SeaOrMountainGirl2402";
import SeaOrMountainGirl3402 from "../ChapterGirl/SeaOrMountainGirl3402";

import RainTaeRuGirl from "../ChapterGirl/RainTaeRuGirl";
import RainTaeRuGirl2403 from "../ChapterGirl/RainTaeRuGirl2403";
import RainTaeRuGirl3403 from "../ChapterGirl/RainTaeRuGirl3403";

import CricKatGirl from "../ChapterGirl/CricKatGirl";
import CricKatGirl2404 from "../ChapterGirl/CricKatGirl2404";
import CricKatGirl3404 from "../ChapterGirl/CricKatGirl3404";

import BirdGirl from "../ChapterGirl/BirdGirl";
import BirdGirl2405 from "../ChapterGirl/BirdGirl2405";
import BirdGirl3405 from "../ChapterGirl/BirdGirl3405";
/////////////////////////////////////////////////////////////////////////

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
    }

    // 분기 시작
    else if (status.moodSelect === 1000) {
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
    }

    /// BIGNOSE CHAPTER BOY ////
    else if (status.moodSelect === 1001) {
      return <ChapterBoyStart />;
    } else if (status.moodSelect === 2001) {
      return <ChapterBoyStart2001 />;
    } else if (status.moodSelect === 3001) {
      return <ChapterThrillStart />;
    }

    /// BIGNOSE CHAPTER GIRL ///
    else if (status.moodSelect === 1401) {
      return <ChapterGirlStart />;
    } else if (status.moodSelect == 2401) {
      return <ChapterGirlStart2401 />;
    } else if (status.moodSelect === 3401) {
      return <ChapterThrillStartG />;
    }

    /// SEA OR MOUNTAIN BOY ///
    else if (status.moodSelect === 1002) {
      return <SeaOrMountainBoy />;
    } else if (status.moodSelect === 2002) {
      return <SeaOrMountainBoy2002 />;
    } else if (status.moodSelect === 3002) {
      return <SeaOrMountainBoy3002 />;
    }

    /// SEA OR MOUNTAIN GIRL ///
    else if (status.moodSelect === 1402) {
      return <SeaOrMountainGirl />;
    } else if (status.moodSelect === 2402) {
      return <SeaOrMountainGirl2402 />;
    } else if (status.moodSelect === 3402) {
      return <SeaOrMountainGirl3402 />;
    }

    /// RTR BOY ///
    else if (status.moodSelect === 1003) {
      return <RainTaeRuBoy />;
    } else if (status.moodSelect === 1013) {
      return <RainTaeRuBoy />;
    } else if (status.moodSelect === 1023) {
      return <RainTaeRuBoy />;
    } else if (status.moodSelect === 2003) {
      return <RainTaeRuBoy2003 />;
    } else if (status.moodSelect === 2013) {
      return <RainTaeRuBoy2003 />;
    } else if (status.moodSelect === 2023) {
      return <RainTaeRuBoy2003 />;
    } else if (status.moodSelect === 3003) {
      return <RainTaeRuBoy3003 />;
    } else if (status.moodSelect === 3013) {
      return <RainTaeRuBoy3003 />;
    } else if (status.moodSelect === 3023) {
      return <RainTaeRuBoy3003 />;
    }

    /// RTR GIRL ///
    else if (status.moodSelect === 1403) {
      return <RainTaeRuGirl />;
    } else if (status.moodSelect === 1413) {
      return <RainTaeRuGirl />;
    } else if (status.moodSelect === 1423) {
      return <RainTaeRuGirl />;
    } else if (status.moodSelect === 2403) {
      return <RainTaeRuGirl2403 />;
    } else if (status.moodSelect === 2413) {
      return <RainTaeRuGirl2403 />;
    } else if (status.moodSelect === 2423) {
      return <RainTaeRuGirl2403 />;
    } else if (status.moodSelect === 3403) {
      return <RainTaeRuGirl3403 />;
    } else if (status.moodSelect === 3413) {
      return <RainTaeRuGirl3403 />;
    } else if (status.moodSelect === 3423) {
      return <RainTaeRuGirl3403 />;
    }

    /// CRICKAT BOY ///
    else if (status.moodSelect === 1004) {
      return <CricKatBoy />;
    } else if (status.moodSelect === 1014) {
      return <CricKatBoy />;
    } else if (status.moodSelect === 1024) {
      return <CricKatBoy />;
    } else if (status.moodSelect === 2004) {
      return <CricKatBoy2004 />;
    } else if (status.moodSelect === 2014) {
      return <CricKatBoy2004 />;
    } else if (status.moodSelect === 2024) {
      return <CricKatBoy2004 />;
    } else if (status.moodSelect === 3004) {
      return <CricKatBoy3004 />;
    } else if (status.moodSelect === 3014) {
      return <CricKatBoy3004 />;
    } else if (status.moodSelect === 3024) {
      return <CricKatBoy3004 />;
    }

    /// CRICKAT GIRL ///
    else if (status.moodSelect === 1404) {
      return <CricKatGirl />;
    } else if (status.moodSelect === 1414) {
      return <CricKatGirl />;
    } else if (status.moodSelect === 1424) {
      return <CricKatGirl />;
    } else if (status.moodSelect === 2404) {
      return <CricKatGirl2404 />;
    } else if (status.moodSelect === 2414) {
      return <CricKatGirl2404 />;
    } else if (status.moodSelect === 2424) {
      return <CricKatGirl2404 />;
    } else if (status.moodSelect === 3404) {
      return <CricKatGirl3404 />;
    } else if (status.moodSelect === 3414) {
      return <CricKatGirl3404 />;
    } else if (status.moodSelect === 3424) {
      return <CricKatGirl3404 />;
    }

    /// BIRD BOY ///
    else if (status.moodSelect === 1005) {
      return <BirdBoy />;
    } else if (status.moodSelect === 1015) {
      return <BirdBoy />;
    } else if (status.moodSelect === 1025) {
      return <BirdBoy />;
    } else if (status.moodSelect === 2005) {
      return <BirdBoy2005 />;
    } else if (status.moodSelect === 2015) {
      return <BirdBoy2005 />;
    } else if (status.moodSelect === 2025) {
      return <BirdBoy2005 />;
    } else if (status.moodSelect === 3005) {
      return <BirdBoy3005 />;
    } else if (status.moodSelect === 3015) {
      return <BirdBoy3005 />;
    } else if (status.moodSelect === 3025) {
      return <BirdBoy3005 />;
    }

    /// BIRD GIRL ///
    else if (status.moodSelect === 1405) {
      return <BirdGirl />;
    } else if (status.moodSelect === 1415) {
      return <BirdGirl />;
    } else if (status.moodSelect === 1425) {
      return <BirdGirl />;
    } else if (status.moodSelect === 2405) {
      return <BirdGirl2405 />;
    } else if (status.moodSelect === 2415) {
      return <BirdGirl2405 />;
    } else if (status.moodSelect === 2425) {
      return <BirdGirl2405 />;
    } else if (status.moodSelect === 3405) {
      return <BirdGirl3405 />;
    } else if (status.moodSelect === 3415) {
      return <BirdGirl3405 />;
    } else if (status.moodSelect === 3425) {
      return <BirdGirl3405 />;
    }
  };

  // State 별 표시할 애니메이션 컴포넌트 선언
  // 확인 후 컴포넌트 변경 예정
  const setAnimation = () => {
    // 닉네임 애니메이션
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
    }
    ////////////////////////////////////////////////
    else if (status.moodSelect === 1003) {
      return <RTRAnimeBoy1 />;
    } else if (status.moodSelect === 1013) {
      return <RTRAnimeBoy2 />;
    } else if (status.moodSelect === 1023) {
      return <RTRAnimeBoy3 />;
    } else if (status.moodSelect === 2003) {
      return <RTRAnimeBoySad1 />;
    } else if (status.moodSelect === 2013) {
      return <RTRAnimeBoySad2 />;
    } else if (status.moodSelect === 2023) {
      return <RTRAnimeBoySad3 />;
    } else if (status.moodSelect === 3003) {
      return <RTRAnimeBoyThrill1 />;
    } else if (status.moodSelect === 3013) {
      return <RTRAnimeBoyThrill2 />;
    } else if (status.moodSelect === 3023) {
      return <RTRAnimeBoyThrill3 />;
    }
    ////////////////////////////////////////////////
    else if (status.moodSelect === 1004) {
      return <CKAnimeBoy1 />;
    } else if (status.moodSelect === 1014) {
      return <CKAnimeBoy2 />;
    } else if (status.moodSelect === 1024) {
      return <CKAnimeBoy3 />;
    } else if (status.moodSelect === 2004) {
      return <CKAnimeBoySad1 />;
    } else if (status.moodSelect === 2014) {
      return <CKAnimeBoySad2 />;
    } else if (status.moodSelect === 2024) {
      return <CKAnimeBoySad3 />;
    } else if (status.moodSelect === 3004) {
      return <CKAnimeBoyThrill1 />;
    } else if (status.moodSelect === 3014) {
      return <CKAnimeBoyThrill2 />;
    } else if (status.moodSelect === 3024) {
      return <CKAnimeBoyThrill3 />;
    } else if (status.moodSelect === 1005) {
      return <BIRDAnimeBoy1 />;
    } else if (status.moodSelect === 1005) {
      return <BIRDAnimeBoy2 />;
    } else if (status.moodSelect === 1005) {
      return <BIRDAnimeBoy3 />;
    } else if (status.moodSelect === 2005) {
      return <BIRDAnimeBoySad1 />;
    } else if (status.moodSelect === 2015) {
      return <BIRDAnimeBoySad2 />;
    } else if (status.moodSelect === 2025) {
      return <BIRDAnimeBoySad3 />;
    } else if (status.moodSelect === 3005) {
      return <BIRDAnimeBoyThrill1 />;
    } else if (status.moodSelect === 3015) {
      return <BIRDAnimeBoyThrill2 />;
    } else if (status.moodSelect === 3025) {
      return <BIRDAnimeBoyThrill3 />;
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
    }
    // else if (status.moodSelect === 1400) {
    //   return <HappyAnimeGirl />;
    // }
    else if (status.moodSelect === 1401) {
      return <C3AnimeGirl />;
    } else if (status.moodSelect === 1402) {
      return <C3AnimeGirl />;
    }
    ////////////////////////////////////////////
    else if (status.moodSelect === 1403) {
      return <RTRAnimeGirl1 />;
    } else if (status.moodSelect === 1413) {
      return <RTRAnimeGirl2 />;
    } else if (status.moodSelect === 1423) {
      return <RTRAnimeGirl3 />;
    }
    ////////////////////////////////////////////
    else if (status.moodSelect === 2403) {
      return <RTRAnimeGirlSad1 />;
    } else if (status.moodSelect === 2413) {
      return <RTRAnimeGirlSad2 />;
    } else if (status.moodSelect === 2423) {
      return <RTRAnimeGirlSad3 />;
    }
    ////////////////////////////////////////////
    else if (status.moodSelect === 3403) {
      return <RTRAnimeGirlThrill1 />;
    } else if (status.moodSelect === 3413) {
      return <RTRAnimeGirlThrill2 />;
    } else if (status.moodSelect === 3413) {
      return <RTRAnimeGirlThrill3 />;
    }
    ////////////////////////////////////////
    else if (status.moodSelect === 1404) {
      return <CKAnimeGirl1 />;
    } else if (status.moodSelect === 1414) {
      return <CKAnimeGirl2 />;
    } else if (status.moodSelect === 1424) {
      return <CKAnimeGirl3 />;
    } else if (status.moodSelect === 2404) {
      return <CKAnimeGirlSad1 />;
    } else if (status.moodSelect === 2414) {
      return <CKAnimeGirlSad2 />;
    } else if (status.moodSelect === 2424) {
      return <CKAnimeGirlSad3 />;
    } else if (status.moodSelect === 3404) {
      return <CKAnimeGirlThrill1 />;
    } else if (status.moodSelect === 3414) {
      return <CKAnimeGirlThrill2 />;
    } else if (status.moodSelect === 3424) {
      return <CKAnimeGirlThrill3 />;
    }
    /////////////////////////////////////////
    else if (status.moodSelect === 1405) {
      return <BIRDAnimeGirl1 />;
    } else if (status.moodSelect === 1415) {
      return <BIRDAnimeGirl2 />;
    } else if (status.moodSelect === 1425) {
      return <BIRDAnimeGirl3 />;
    } else if (status.moodSelect === 2405) {
      return <BIRDAnimeGirlSad1 />;
    } else if (status.moodSelect === 2415) {
      return <BIRDAnimeGirlSad2 />;
    } else if (status.moodSelect === 2425) {
      return <BIRDAnimeGirlSad3 />;
    } else if (status.moodSelect === 3405) {
      return <BIRDAnimeGirlThrill1 />;
    } else if (status.moodSelect === 3415) {
      return <BIRDAnimeGirlThrill2 />;
    } else if (status.moodSelect === 3425) {
      return <BIRDAnimeGirlThrill3 />;
    }
    // else if (status.moodSelect === 2400) {
    //   return <SadAnimeGirl />;
    // } else if (status.moodSelect === 3400) {
    //   return <ThrillAnimeGirl />;
    // }
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
