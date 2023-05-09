/* eslint-disable */

import React from "react";
import ReactHowler from "../../howler/ReactHowler.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import Nickname from "../Nickname/Nickname";
import NicknameAnime from "../Nickname/NicknameAnime";
import NicknameAnime2 from "../Nickname/NicknameAnime2";
import NicknameAnime3 from "../Nickname/NicknameAnime3";
import NicknameAnime4 from "../Nickname/NicknameAnime4";
import C2AnimeBoy from "../ChapterBoy/C2AnimeBoy";
import C3AnimeBoy from "../ChapterBoy/C3AnimeBoy";
import C4AnimeBoy from "../ChapterBoy/C4AnimeBoy.js";

///텍스트
import ChapterStart from "../ChapterBoy/ChapterStart";
//
import SeaOrMountain from "../ChapterBoy/SeaOrMountain";
//
import MoodSelect from "../Mood/MoodSelect";
import HappyText from "../Mood/HappyText";
import SadText from "../Mood/SadText";
import ThrillText from "../Mood/ThrillText";
//
import RainTaeRu from "../RainTaeRu/RainTaeRu";
import CricKat from "../Crickat/CricKat";
import Bird from "../Bird/Bird";
import Bell from "../Bell/Bell";
import BellYes from "../Bell/BellYes";
import BellNo from "../Bell/BellNo";
//////애니메이션
import SOMAnime from "../ChapterBoy/SOMAnime";
//
import MOODAnime from "../Mood/MoodAnime";
//
import RTRAnimeMF from "../RainTaeRu/RTRAnimeMF";
import RTRAnimeMH from "../RainTaeRu/RTRAnimeMH";
import RTRAnimeMS from "../RainTaeRu/RTRAnimeMS";
import RTRAnimeMT from "../RainTaeRu/RTRAnimeMT";
import RTRAnimeSF from "../RainTaeRu/RTRAnimeSF";
import RTRAnimeSH from "../RainTaeRu/RTRAnimeSH";
import RTRAnimeSS from "../RainTaeRu/RTRAnimeSS";
import RTRAnimeST from "../RainTaeRu/RTRAnimeST";
//
import CKAnimeMF from "../Crickat/CKAnimeMF";
import CKAnimeMH from "../Crickat/CKAnimeMH";
import CKAnimeMS from "../Crickat/CKAnimeMS";
import CKAnimeMT from "../Crickat/CKAnimeMT";
import CKAnimeSF from "../Crickat/CKAnimeSF";
import CKAnimeSH from "../Crickat/CKAnimeSH";
import CKAnimeSS from "../Crickat/CKAnimeSS";
import CKAnimeST from "../Crickat/CKAnimeST";
//
import BIRDAnimeMF from "../Bird/BIRDAnimeMF";
import BIRDAnimeMH from "../Bird/BIRDAnimeMH";
import BIRDAnimeMS from "../Bird/BIRDAnimeMS";
import BIRDAnimeMT from "../Bird/BIRDAnimeMT";
import BIRDAnimeSF from "../Bird/BIRDAnimeSF";
import BIRDAnimeSH from "../Bird/BIRDAnimeSH";
import BIRDAnimeSS from "../Bird/BIRDAnimeSS";
import BIRDAnimeST from "../Bird/BIRDAnimeST";
//
import BELLYesAnime from "../Bell/BELLYesAnime";
import BELLNoAnime from "../Bell/BELLNoAnime";
import BELLAnimeF from "../Bell/BELLAnimeF";

/////////////////////////////////////////////////////////////////////////

import axios from "axios";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(true);
  //왼쪽 상단 플레이리스트 저장
  //기쁨,슬픔,긴장

  const savePlaylist1 = () => {
    if (status.sound1 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound1}
            playing={play}
            loop={true}
            mute={false}
            volume={1.0}
          />
        </>
      );
    }
  };
  //종
  const savePlaylist2 = () => {
    if (status.sound2 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound2}
            playing={play}
            loop={true}
            mute={false}
            volume={0.3}
          />
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
          <ReactHowler
            src={status.sound3}
            playing={play}
            loop={true}
            mute={false}
            volume={1.0}
          />
        </>
      );
    }
  };
  //산,바다
  const savePlaylist4 = () => {
    if (status.sound4 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound4}
            playing={play}
            loop={true}
            mute={false}
            volume={0.35}
          />
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
          <ReactHowler
            src={status.sound5}
            playing={play}
            loop={true}
            mute={false}
            volume={1.0}
          />
        </>
      );
    }
  };
  //비
  const savePlaylist6 = () => {
    if (status.sound6 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound6}
            playing={play}
            loop={true}
            mute={false}
            volume={0.1}
          />
        </>
      );
    }
  };
  //귀뚜라미
  const savePlaylist7 = () => {
    if (status.sound7 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound7}
            playing={play}
            loop={true}
            mute={false}
            volume={0.3}
          />
        </>
      );
    }
  };
  //새/까마귀/부엉이
  const savePlaylist8 = () => {
    if (status.sound8 === "") {
      return "";
    } else {
      return (
        <>
          <ReactHowler
            src={status.sound8}
            playing={play}
            loop={true}
            mute={false}
            volume={0.5}
          />
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
    }
    /// BIGNOSE CHAPTER  ////
    else if (status.moodSelect === 6) {
      return <ChapterStart />;
    }
    /// SEA OR MOUNTAIN  ///
    else if (status.moodSelect === 7) {
      return <SeaOrMountain />;
    }
    // 분기 시작
    //chapter (음악 분류 (기쁨/슬픔/우울))
    else if (status.moodSelect === 1000) {
      return <MoodSelect />;
    } else if (status.moodSelect === 1010) {
      return <HappyText />;
    } else if (status.moodSelect === 1020) {
      return <SadText />;
    } else if (status.moodSelect === 1030) {
      return <ThrillText />;
    }
    /// RTR /////////////////
    else if (status.moodSelect === 1040) {
      return <RainTaeRu />;
    }
    /// CRICKAT /////////////
    else if (status.moodSelect === 1050) {
      return <CricKat />;
    }
    /// BIRD ////////////////
    else if (status.moodSelect === 1060) {
      return <Bird />;
    }
    /// BELL ////////////////
    else if (status.moodSelect === 1070) {
      return <Bell />;
    } else if (status.moodSelect === 1080) {
      return <BellYes />;
    } else if (status.moodSelect === 1090) {
      return <BellNo />;
    }
  };

  // State 별 표시할 애니메이션 컴포넌트 선언
  // 확인 후 컴포넌트 변경 예정
  const setAnimation = () => {
    // 닉네임 애니메이션
    if (status.aniSelect === 1) {
      return <NicknameAnime />; //교체
    } else if (status.aniSelect === 2) {
      return <NicknameAnime2 />; //교체
    } else if (status.aniSelect === 3) {
      return <NicknameAnime2 />;
    } else if (status.aniSelect === 4) {
      return <NicknameAnime2 />;
    } else if (status.aniSelect === 5) {
      return <NicknameAnime2 />;
    } else if (status.aniSelect === 6) {
      // 남자 애니메이션 분기점
      return <C2AnimeBoy />; //교체
    } else if (status.aniSelect === 1010) {
      return <C3AnimeBoy />;
      // <SOMAnime />;
    } else if (status.aniSelect === 1000) {
      return <C4AnimeBoy />; //농담이사라지는 에니메이션
    }
    /// RainTaeRu Animation /////////////////////////////////////////////////////////////////////
    else if (status.aniSelect === 1040) {
      return <RTRAnimeMF />;
    }
    // // //  // // // 산
    else if (status.aniSelect === 1041) {
      return <RTRAnimeMH />;
    } else if (status.aniSelect === 1042) {
      return <RTRAnimeMS />;
    } else if (status.aniSelect === 1043) {
      return <RTRAnimeMT />;
    }
    //
    else if (status.aniSelect === 1045) {
      return <RTRAnimeSF />;
    }
    // // // // // // 바다
    else if (status.aniSelect === 1046) {
      return <RTRAnimeSH />;
    } else if (status.aniSelect === 1047) {
      return <RTRAnimeSS />;
    } else if (status.aniSelect === 1048) {
      return <RTRAnimeST />;
    }

    /// Crickat Animation /////////////////////////////////////////////////////////////////////
    else if (status.aniSelect === 1050) {
      return <CKAnimeMF />;
    }
    // 기쁨
    else if (status.aniSelect === 1051) {
      return <CKAnimeMH />;
    } else if (status.aniSelect === 1052) {
      return <CKAnimeMS />;
    } else if (status.aniSelect === 1053) {
      return <CKAnimeMT />;
    }
    // // // // // //바다
    else if (status.aniSelect === 1055) {
      return <CKAnimeSF />;
    } else if (status.aniSelect === 1056) {
      return <CKAnimeSH />;
    } else if (status.aniSelect === 1057) {
      return <CKAnimeSS />;
    } else if (status.aniSelect === 1058) {
      return <CKAnimeST />;
    }

    /// Bird Animation /////////////////////////////////////////////////////////////////////
    else if (status.aniSelect === 1060) {
      return <BIRDAnimeMF />;
    }
    // 기쁨
    else if (status.aniSelect === 1061) {
      return <BIRDAnimeMH />;
    } else if (status.aniSelect === 1062) {
      return <BIRDAnimeMS />;
    } else if (status.aniSelect === 1063) {
      return <BIRDAnimeMT />;
    }
    // // // // // //바다
    else if (status.aniSelect === 1065) {
      return <BIRDAnimeSF />;
    } else if (status.aniSelect === 1066) {
      return <BIRDAnimeSH />;
    } else if (status.aniSelect === 1067) {
      return <BIRDAnimeSS />;
    } else if (status.aniSelect === 1068) {
      return <BIRDAnimeST />;
    }
    /////////////////////
    else if (status.aniSelect === 1066) {
      return <BIRDAnimeSH />;
    } else if (status.aniSelect === 1067) {
      return <BIRDAnimeSS />;
    } else if (status.aniSelect === 1068) {
      return <BIRDAnimeST />;
    } else if (status.aniSelect === 1070) {
      return <BELLAnimeF />;
    } else if (status.aniSelect === 1071) {
      return <BELLYesAnime />;
    } else if (status.aniSelect === 1072) {
      return <BELLNoAnime />; //
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

    /////////////////////////////////////////////////

    // else if (status.moodSelect === 2400) {
    //   return <SadAnimeGirl />;
    // } else if (status.moodSelect === 3400) {
    //   return <ThrillAnimeGirl />;
    // }
  };

  //main 기본 재생음악 함수//////////////////////////////////////////////
  var audio = (
    <ReactHowler
      src={["메인사운드.wav"]}
      playing={status.mainSound}
      loop={true}
      volume={0.05}
    />
  );

  // const mainPlayStop = () => {
  //   if (status.moodSelect === 7) {
  //     mainsetPlaying(false);
  //   }
  // };

  const navigate = useNavigate();

  const gotoGallery = () => {
    navigate("/gallery", {
      state: status,
    });
  };

  return (
    <div className="maincomp">
      {/* <button
        onClick={() => {
          dataSubmit();
        }}
      >
        포스트요청하기
      </button> */}
      {audio}
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
      <div className="Container_m">
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
