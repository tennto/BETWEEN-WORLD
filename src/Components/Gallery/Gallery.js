import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/Gallery.css";
import Modal from "./Modal";

import { useLocation } from "react-router-dom";

const Gallery = () => {
  const [userInfo, setUserList] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [idCheck, setIdCheck] = useState([]);
  const store = useLocation();
  const allInfo = store.state;

  console.log(allInfo.userName);

  const dataSubmit = async () => {
    await axios.post("/gallery/userinfo", {
      userName: allInfo.userName,
      sound1: allInfo.sound1,
      sound2: allInfo.sound2,
      sound4: allInfo.sound4,
      sound6: allInfo.sound6,
      sound7: allInfo.sound7,
      sound8: allInfo.sound8,
    });
    axiosData();
  };

  const axiosData = async () => {
    const response = await axios.get("/gallery/userinfo");
    setUserList(response.data);
  };

  const refreshData = async () => {
    const response = await axios.get("/gallery/refresh");
    setUserList(response.data);
  };
  // useEffect(() => {
  //   dataSubmit();
  // }, []);

  useEffect(() => {
    axiosData();
  }, []);

  const onClickButton = (id) => {
    setIdCheck(userInfo[id - 1]);
    setIsOpen(true);
  };

  return (
    <div>
      {/* post요청 다르게 써야함 */}
      {/* 데이터 새로고침 GET */}
      <div className="topnav">
        <button
          className="refresh"
          onClick={() => {
            {
              refreshData();
            }
          }}
        >
          제 음악이 없어요
        </button>
        <button
          className="refresh"
          onClick={() => {
            {
              dataSubmit();
            }
          }}
        >
          post요청
        </button>
      </div>
      <div className="all-gallery">
        {userInfo?.map((ex) => {
          return (
            <div
              key={ex._id}
              className={"btn-open-popup user-id-" + ex._id}
              onClick={() => {
                onClickButton(ex._id);
              }}
            >
              ID : {ex._id}
              <br />
              USERNAME : {ex.userName}
              <br />
              SOUND1 : {ex.sound1}
              <br />
              SOUND2 : {ex.sound2}
              <br />
              SOUND4 : {ex.sound4}
              <br />
              SOUND6 : {ex.sound6}
              <br />
              SOUND7 : {ex.sound7}
              <br />
              SOUND8 : {ex.sound8}
              <br />
            </div>
          );
        })}
      </div>
      {isOpen && (
        <Modal
          idCheck={idCheck}
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;

//모달 -> 데이터 전달
//데이터를 이용해서 howler 재생
//모달에서 로티 재생
//클릭하는 앨범에 로티 추가
//모달, 앨범 CSS
//끝
