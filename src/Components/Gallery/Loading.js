import React from "react";
import "../../css/Gallery.css";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";

const Loding = () => {
  const [displayNow, setDisplay] = useState(true);

  useEffect(() => {
    setDisplay(false);
  }, 3000);

  return (
    <div>
      <div className="all-screen">
        <div className="centering">
          <p className="Loding">B</p>
          <p className="Loding">E</p>
          <p className="Loding">T</p>
          <p className="Loding">W</p>
          <p className="Loding">E</p>
          <p className="Loding">E</p>
          <p className="Loding">N</p>
          <p className="Loding">W</p>
          <p className="Loding">O</p>
          <p className="Loding">R</p>
          <p className="Loding">L</p>
          <p className="Loding">D</p>
        </div>
      </div>
      {!displayNow && <Gallery />}
    </div>
  );
};

export default Loding;

//모달 -> 데이터 전달
//데이터를 이용해서 howler 재생
//모달에서 로티 재생
//클릭하는 앨범에 로티 추가
//모달, 앨범 CSS
//끝
