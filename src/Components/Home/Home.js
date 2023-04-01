import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import popupdeco from "../popupdeco.png";
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
      return <Popup2 />;
    }
  };

  return (
    <div className="container">
      <h1 className="Title_0">Between World</h1>
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
          앞쪽에 비치된 헤드폰을 착용하여주시고
          <br />
          진행되는 대화를 천천히 마음 속으로 따라 읽으시면
          <br />
          작품을 더욱 재미있게 체험하실 수 있습니다.
        </p>
      </div>
      <button
        className="homeNext"
        onClick={() => {
          props.setPageTwo(1);
        }}
      >
        다음
      </button>
    </>
  );
};

const Popup2 = () => {
  return (
    <>
      <div className="popStyle2">
        <p>
          분위기 멜로디의 선택사항에 따라
          <br />
          표시되는 오브젝트 및 화면이 달라지게되며
          <br />각 선택지 카드를 확인 후 선택해주시기 바랍니다
        </p>
      </div>
      <Link to="/main">
        <button className="homeNext2">알겠습니다</button>
      </Link>
    </>
  );
};

export default Home;
