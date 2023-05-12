import React from "react";
import "../../css/Gallery.css";
import ReactHowler from "../../howler/ReactHowler.js";
import bgmountainH from "./hapsan.png";
import bgmountainS from "./sadsan.png";
import bgmountainT from "./thrillsan.png";
import bgseaH from "./hsea.png";
import bgseaT from "./tsea.png";

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
        return <img className="popbg" src={bgseaH} alt="seaH" />;
      } else {
        return <img className="popbg" src={bgseaT} alt="seaT" />;
      }
    }
  };
  const textReturn = () => {
    if (
      idCheck.sound1 === "기쁨노래1.mp3" ||
      idCheck.sound1 === "기쁨노래2.mp3"
    ) {
      return "밝은 분위기 선택";
    } else if (
      idCheck.sound1 === "슬픔노래1.mp3" ||
      idCheck.sound1 === "슬픔노래2.mp3"
    ) {
      return "우울한 분위기 선택";
    } else {
      return "오싹한 분위기 선택";
    }
  };
  return (
    <div className="Overlay">
      {console.log(idCheck)}
      <div className="ModalWrap">
        <button className="CloseButton" onClick={handleClose}>
          X
        </button>
        <div className="Contents">
          {bgReturn()}
          <p className="poptext">{textReturn()}</p>
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
