import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

// 초기값 설정
// textLine 은 대화 상태를 관리하기 위한 프로퍼티
// moodSelect 는 스토리라인 상태를 관리하기 위한 프로퍼티
// userInfoArr 는 유저데이터를 위한 프로퍼티
// userName 은 유저닉네임을 위한 프로퍼티

const initialState = {
  textLine: 1,
  moodSelect: 1,
  userInfoArr: [],
  add: 1,
  userName: "",
};

// 액션 명 설정
const HAPPY_MOOD = "index/HAPPY_MOOD";
const SAD_MOOD = "index/SAD_MOOD";
const THRILL_MOOD = "index/THRILL_MOOD";

// 챕터 2번 멜로디선택 컴포넌트 노출 용
const STORY_NO2 = "index/STORY_NO2";

// #1 애니메이션 / 텍스트 동기화 용
const PLUS_STATE1 = "index/PLUS_STATE1";
const PLUS_STATE2 = "index/PLUS_STATE2";
const PLUS_STATE3 = "index/PLUS_STATE3";
const PLUS_STATE4 = "index/PLUS_STATE4";
// 유저 이름 저장
const SET_NAME = "index/SET_NAME";

export const setName = (name) => {
  return { type: SET_NAME, name };
};

// reducer 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case HAPPY_MOOD: {
      return {
        ...state,
        moodSelect: 100,
      };
    }
    case SAD_MOOD: {
      return {
        ...state,
        moodSelect: 200,
      };
    }
    case THRILL_MOOD: {
      return {
        ...state,
        moodSelect: 300,
      };
    }
    case STORY_NO2: {
      return {
        ...state,
        moodSelect: 6,
      };
    }
    // #1 - 애니메이션 변경 1번
    case PLUS_STATE1: {
      return {
        ...state,
        moodSelect: 2,
      };
    }
    // #1 - 애니메이션 변경 2번
    case PLUS_STATE2: {
      return {
        ...state,
        moodSelect: 3,
      };
    }
    case PLUS_STATE3: {
      return {
        ...state,
        moodSelect: 4,
      };
    }
    case PLUS_STATE4: {
      return {
        ...state,
        moodSelect: 5,
      };
    }
    case SET_NAME: {
      return { ...state, userName: action.name };
    }
    default: {
      return state;
    }
  }
}

// Store 선언
let store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
