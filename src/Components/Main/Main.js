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
import SnowManBoy from "../ChapterBoy/SnowManBoy";
import SMAnimeBoy from "../ChapterBoy/SMAnimeBoy";
import SnowManGirl from "../ChapterGirl/SnowManGirl";
import SMAnimeGirl from "../ChapterGirl/SMAnimeGirl";
import RainTaeRuBoy from "../ChapterBoy/RainTaeRuBoy";
import RTRAnimeBoy from "../ChapterBoy/RTRAnimeBoy";
import RTRAnimeGirl from "../ChapterGirl/RTRAnimeGirl";
import RainTaeRuGirl from "../ChapterGirl/RainTaeRuGirl";

const Main = () => {
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play, setPlaying] = useState(true);
  //?????? ?????? ?????????????????? ??????
  const savePlaylist1 = () => {
    if (status.playersound.sound1 === undefined) {
      return "";
    } else {
      return (
        <>
          <p>????????? 1</p>
          <ReactHowler
            src={status.playersound.sound1}
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
            ??????
          </button>
          <button
            onClick={() => {
              setPlaying(true);
            }}
          >
            ??????
          </button>
        </>
      );
    }
  };
  const savePlaylist2 = () => {
    if (status.playersound.sound2 === undefined) {
      return "";
    } else {
      return (
        <>
          <p>????????? 2</p>
          <ReactHowler
            src={status.playersound.sound2}
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
            ??????
          </button>
          <button
            onClick={() => {
              setPlaying(true);
            }}
          >
            ??????
          </button>
        </>
      );
    }
  };
  const savePlaylist3 = () => {
    if (status.playersound.sound3 === undefined) {
      return "";
    } else {
      return (
        <>
          <p>????????? 3</p>
          <ReactHowler
            src={status.playersound.sound3}
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
            ??????
          </button>
          <button
            onClick={() => {
              setPlaying(true);
            }}
          >
            ??????
          </button>
        </>
      );
    }
  };
  const savePlaylist4 = () => {
    if (status.playersound.sound4 === undefined) {
      return "";
    } else {
      return (
        <>
          <p>????????? 4</p>
          <ReactHowler
            src={status.playersound.sound4}
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
            ??????
          </button>
          <button
            onClick={() => {
              setPlaying(true);
            }}
          >
            ??????
          </button>
        </>
      );
    }
  };
  const savePlaylist5 = () => {
    if (status.playersound.sound5 === undefined) {
      return "";
    } else {
      return (
        <>
          <p>????????? 5</p>
          <ReactHowler
            src={status.playersound.sound5}
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
            ??????
          </button>
          <button
            onClick={() => {
              setPlaying(true);
            }}
          >
            ??????
          </button>
        </>
      );
    }
  };

  // ????????? ?????? ??? State ??? ?????? ?????? ?????????????????? ??????
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
    } else if (status.moodSelect === 1004) {
      return <SnowManBoy />;
    } else if (status.moodSelect === 1404) {
      return <SnowManGirl />;
    } else if (status.moodSelect === 1003) {
      return <RainTaeRuBoy />;
    } else if (status.moodSelect === 1403) {
      return <RainTaeRuGirl />;
    }
  };

  // State ??? ????????? ??????????????? ???????????? ??????
  // ?????? ??? ???????????? ?????? ??????
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
      // ?????? ??????????????? ?????????
      return <C2AnimeBoy />;
    } else if (status.moodSelect === 1000) {
      return <HappyAnimeBoy />;
    } else if (status.moodSelect === 1001) {
      return <C3AnimeBoy />;
    } else if (status.moodSelect === 1002) {
      return <SOMAnimeBoy />;
    } else if (status.moodSelect === 1003) {
      return <RTRAnimeBoy />;
    } else if (status.moodSelect === 1004) {
      return <SMAnimeBoy />;
    } else if (status.moodSelect === 2000) {
      return <SadAnimeBoy />;
    } else if (status.moodSelect === 3000) {
      return <ThrillAnimeBoy />;
    }
    // ?????? ??????????????? ?????????
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
    } else if (status.moodSelect === 2400) {
      return <SadAnimeGirl />;
    } else if (status.moodSelect === 3400) {
      return <ThrillAnimeGirl />;
    }
  };

  return (
    <div className="maincomp">
      <div className="Container_m">
        <table className="playlist">
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
            <th>{savePlaylist5()}</th>
          </tr>
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
