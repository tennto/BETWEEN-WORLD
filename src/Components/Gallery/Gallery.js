import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/Gallery.css";

import { useLocation } from "react-router-dom";

const Gallery = () => {
  const [userInfo, setUserList] = useState(null);
  const store = useLocation();
  const status = store.state;

  console.log(store);
  console.log(store.userName);

  const dataSubmit = async () => {
    await axios.post("/gallery/userinfo", {
      userName: status.userName,
      sound1: status.sound1,
      sound4: status.sound4,
      sound5: status.sound5,
      sound6: status.sound6,
    });
    axiosData();
  };
  const axiosData = async () => {
    const response = await axios.get("/gallery/userinfo");
    setUserList(response.data);
  };
  useEffect(() => {
    dataSubmit();
  }, []);

  // useEffect(() => {
  //   axiosData();
  // }, []);

  return (
    <div>
      {userInfo?.map((ex) => {
        return (
          <div class="container">
            <ul class="gallery">
              <li>별명 : 김재원</li>
              <li>별명 : 김재원</li>
              <li>별명 : 김재원</li>
              <li>별명 : 김재원</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
