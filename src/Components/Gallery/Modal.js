import React from "react";
import "../../css/Gallery.css";
import ReactHowler from "../../howler/ReactHowler.js";
import bgmountainH from "./hapsan.png";
import bgmountainS from "./sadsan.png";
import bgmountainT from "./thrillsan.png";
import bgseaH from "./hsea2.png";
import bgseaT from "./tsea2.png";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import teru1 from "./terumotion.json";
import teru2 from "./terumotion2.json";
import hcl from "./happyCrikatLove.json";
import sce from "./sadCrikatEat.json";
import scne from "./sadCrikatNoEat.json";
import hbc from "./happyBirdCry.json";
import hbs from "./happyBirdSmile.json";
import sbc from "./sadBirdCry.json";
import sbs from "./sadBirdSmile.json";
import tce from "./thrillCrikatEatmotion.json";
import tcne from "./sadCrikatNoEat.json";
import tbc from "./thrillBirdCry.json";
import tbs from "./thrillBirdSmile.json";
import watamotion from "../Nickname/watarerender.json";
import wagimotion from "../Nickname/wagimotion.json";

function Modal({ onClose, idCheck }) {
  const handleClose = () => {
    onClose?.();
  };
  const showData1 = () => {
    if (idCheck.sound1 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound1]}
            playing={true}
            loop={true}
            mute={false}
            volume={1.0}
          />
        </div>
      );
    }
  };
  const showData2 = () => {
    if (idCheck.sound2 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound2]}
            playing={true}
            loop={true}
            mute={false}
            volume={0.5}
          />
        </div>
      );
    }
  };
  const showData4 = () => {
    if (idCheck.sound4 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound4]}
            playing={true}
            loop={true}
            mute={false}
            volume={0.5}
          />
        </div>
      );
    }
  };
  const showData6 = () => {
    if (idCheck.sound6 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound6]}
            playing={true}
            loop={true}
            mute={false}
            volume={0.2}
          />
        </div>
      );
    }
  };
  const showData7 = () => {
    if (idCheck.sound7 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound7]}
            playing={true}
            loop={true}
            mute={false}
            volume={0.5}
          />
        </div>
      );
    }
  };
  const showData8 = () => {
    if (idCheck.sound6 === "") {
      return "";
    } else {
      return (
        <div>
          <ReactHowler
            src={[idCheck.sound8]}
            playing={true}
            loop={true}
            mute={false}
            volume={0.5}
          />
        </div>
      );
    }
  };
  const bgReturn = () => {
    if (idCheck.sound4 === "산소리.mp3") {
      if (
        idCheck.sound1 === "기쁨노래1.mp3" ||
        idCheck.sound1 === "기쁨노래2.mp3"
      ) {
        return <img className="popbg" src={bgmountainH} alt="mountainH" />;
      } else if (
        idCheck.sound1 === "슬픔노래1.mp3" ||
        idCheck.sound1 === "슬픔노래2.mp3"
      ) {
        return <img className="popbg" src={bgmountainS} alt="mountainS" />;
      } else {
        return <img className="popbg" src={bgmountainT} alt="mountainT" />;
      }
    } else if (idCheck.sound4 === "바다소리.mp3") {
      if (
        idCheck.sound1 === "기쁨노래1.mp3" ||
        idCheck.sound1 === "기쁨노래2.mp3" ||
        idCheck.sound1 === "슬픔노래1.mp3" ||
        idCheck.sound1 === "슬픔노래2.mp3"
      ) {
        return <img className="popbg2" src={bgseaH} alt="seaH" />;
      } else {
        return <img className="popbg2" src={bgseaT} alt="seaT" />;
      }
    }
  };
  // const textReturn = () => {
  //   if (
  //     idCheck.sound1 === "기쁨노래1.mp3" ||
  //     idCheck.sound1 === "기쁨노래2.mp3"
  //   ) {
  //     return "밝은 분위기 선택";
  //   } else if (
  //     idCheck.sound1 === "슬픔노래1.mp3" ||
  //     idCheck.sound1 === "슬픔노래2.mp3"
  //   ) {
  //     return "우울한 분위기 선택";
  //   } else {
  //     return "오싹한 분위기 선택";
  //   }
  // };

  const watagiRetrun = () => {
    if (idCheck.userSex === 1) {
      return (
        <Player
          src={watamotion}
          style={{ width: "400px" }}
          autoplay={true}
          loop={true}
          speed={1}
        />
      ); // 와타 모션
    } else {
      return (
        <Player
          src={wagimotion}
          style={{ width: "400px" }}
          autoplay={true}
          loop={true}
          speed={1}
        />
      ); // 와기 모션
    }
  };

  const teruReturn = () => {
    if (idCheck.rtrCase === 1) {
      return (
        <Player
          className="terumotion"
          src={teru2}
          style={{ width: "400px" }}
          autoplay={true}
          loop={true}
          speed={1}
        />
      );
    } else {
      return (
        <Player
          className="terumotion"
          src={teru1}
          style={{ width: "400px" }}
          autoplay={true}
          loop={true}
          speed={1}
        />
      );
    }
  };

  const ckReturn = () => {
    if (
      idCheck.sound1 === "기쁨노래1.mp3" ||
      idCheck.sound1 === "기쁨노래2.mp3"
    ) {
      if (idCheck.ckCase === 1) {
        return (
          <Player
            src={hcl}
            style={{ width: "400px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 귀뚜 러브
      } else {
        return ""; // 귀뚜 런 ok
      }
    } else if (
      idCheck.sound1 === "슬픔노래1.mp3" ||
      idCheck.sound1 === "슬픔노래2.mp3"
    ) {
      if (idCheck.ckCase === 1) {
        return (
          <Player
            src={scne}
            style={{ width: "400px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 슬픔 노 이트
      } else {
        return (
          <Player
            src={sce}
            style={{ width: "400px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 슬픔 이트
      }
    } else {
      if (idCheck.ckCase === 1) {
        return (
          <Player
            src={tcne}
            style={{ width: "400px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 긴장 노이트
      } else {
        return (
          <Player
            src={tce}
            style={{ width: "400px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 긴장 이트
      }
    }
  };

  const bdReturn = () => {
    if (
      idCheck.sound1 === "기쁨노래1.mp3" ||
      idCheck.sound1 === "기쁨노래2.mp3"
    ) {
      if (idCheck.bdCase === 1) {
        return (
          <Player
            src={hbc}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 새 울음
      } else {
        return (
          <Player
            src={hbs}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 새 웃음
      }
    } else if (
      idCheck.sound1 === "슬픔노래1.mp3" ||
      idCheck.sound1 === "슬픔노래2.mp3"
    ) {
      if (idCheck.bdCase === 1) {
        return (
          <Player
            src={sbc}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 부엉이 울음
      } else {
        return (
          <Player
            src={sbs}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 부엉이 웃음
      }
    } else {
      if (idCheck.bdCase === 1) {
        return (
          <Player
            src={tbc}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 까마귀 울음
      } else {
        return (
          <Player
            src={tbs}
            style={{ width: "320px" }}
            autoplay={true}
            loop={true}
            speed={1}
          />
        ); // 까마귀 웃음
      }
    }
  };

  return (
    <div className="Overlay">
      {console.log(idCheck)}
      <div className="ModalWrap">
        <button className="CloseButton" onClick={handleClose}>
          돌아가기
        </button>
        <div className="Contents">
          {bgReturn()}
          {/* <p className="poptext">{textReturn()}</p> */}
          <div className="terumotion">{teruReturn()}</div>
          <div className="ckmotion">{ckReturn()}</div>
          <div className="bdmotion">{bdReturn()}</div>
          <div className="watagimotion">{watagiRetrun()}</div>
          {showData1()}
          <br />
          {showData2()} <br />
          {showData4()} <br />
          {showData6()} <br />
          {showData7()}
          <br />
          {showData8()}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Modal;

//음원 Null로 저장하지 말기
