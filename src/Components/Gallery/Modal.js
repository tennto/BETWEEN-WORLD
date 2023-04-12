import React from "react";
import "../../css/Gallery.css";
import ReactHowler from "../../howler/ReactHowler.js";

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
            volume={1.0}
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
            volume={1.0}
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
            volume={1.0}
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
            volume={1.0}
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
            volume={1.0}
          />
        </div>
      );
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
          {showData1()} <br />
          이미지가 들어갈 자리입니다.
          {showData2()} <br />
          {showData4()} <br />
          {showData6()} <br />
          {showData7()} <br />
          {showData8()}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Modal;

//음원 Null로 저장하지 말기
