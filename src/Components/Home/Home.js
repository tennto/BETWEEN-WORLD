import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import popupdeco from "../popupdeco.png";
import { Player } from "@lottiefiles/react-lottie-player";
import LM from "./logo_motion.json";
import "./Home.css";

const Home = () => {
  let [checkInfo, setCheckInfo] = useState(0);
  let [pageOne, setPageOne] = useState(0);
  let [pageTwo, setPageTwo] = useState(0);

  const popupInfo = () => {
    if (pageTwo === 0) {
      return <Popup1 pageTwo={pageTwo} setPageTwo={setPageTwo} />;
    }
    if (pageTwo === 1) {
      return <Popup2 pageTwo={pageTwo} setPageTwo={setPageTwo} />;
    }
    if (pageTwo === 2) {
      return <Popup3 />;
    }
  };

  return (
    <div className="container">
      <Player
        className="homelogo"
        src={LM}
        style={{ width: "1500px" }}
        autoplay={true}
        loop={true}
        speed={1}
      />
      {/* <h1 className="Title_0">Between World</h1> */}
      <div className={"popup" + pageOne}></div>
      <div className={"popupBox" + pageOne}>
        <img className="pdeco" src={popupdeco} alt="pdeco" />
        {popupInfo()}
      </div>
      <button
        className={"enterBtn" + checkInfo}
        onClick={() => {
          setPageOne(1);
          setCheckInfo(1);
        }}
      >
        시작합니다
      </button>
    </div>
  );
};

const Popup1 = (props) => {
  return (
    <>
      <div className="popStyle">
        <p>
          앞쪽에 비치된 헤드폰을 착용하여 주시고,
          <br />
          진행되는 대화를 마음 속으로 천천히 따라 읽으시면
          <br />
          작품을 더욱 재미있게 감상하실 수 있습니다.
        </p>
      </div>
      <button
        className="homeNext"
        onClick={() => {
          props.setPageTwo(1);
        }}
      >
        NEXT
      </button>
    </>
  );
};

const Popup2 = (props) => {
  return (
    <>
      <div className="popStyle2">
        <p>
          선택에 따라 스토리 및 사운드가 달라지므로
          <br />각 선택지 카드를 신중하게 확인하시길 바랍니다
        </p>
      </div>
      <button
        className="homeNext"
        onClick={() => {
          props.setPageTwo(2);
          console.log(props.pageTwo);
        }}
      >
        NEXT
      </button>
    </>
  );
};

const Popup3 = () => {
  return (
    <>
      <div className="popStyle3">
        <p>
          덮여있는 카드에 마우스 커서를 올리면
          <br />
          카드가 뒤집히며 음원 미리듣기가 가능합니다
          <br /> 앞서 말씀드린 사항을 유의하여 주시고, 시작해 주세요
        </p>
      </div>
      <Link to="/main">
        <button className="homeNext2">START</button>
      </Link>
    </>
  );
};

export default Home;
