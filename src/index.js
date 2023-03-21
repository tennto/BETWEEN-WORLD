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
  btnReset: 0,
  moodSelect: 1,
  add: 1,
  userName: "",
  sound1: "",
  sound2: "",
  sound3: "",
  sound4: "",
  sound5: "",
  sound6: "",
  sound7: "",
  sound8: "",
};

export const setName = (name) => {
  return { type: SET_NAME, name };
};

export const setSound1 = (sound1) => {
  return { type: SET_SOUND1, sound1 };
};
export const setSound2 = (sound2) => {
  return { type: SET_SOUND2, sound2 };
};
export const setSound3 = (sound3) => {
  return { type: SET_SOUND3, sound3 };
};
export const setSound4 = (sound4) => {
  return { type: SET_SOUND4, sound4 };
};
export const setSound5 = (sound5) => {
  return { type: SET_SOUND5, sound5 };
};
export const setSound6 = (sound6) => {
  return { type: SET_SOUND6, sound6 };
};
export const setSound7 = (sound7) => {
  return { type: SET_SOUND7, sound7 };
};
export const setSound8 = (sound8) => {
  return { type: SET_SOUND8, sound8 };
};
// 선택지 액션 - 남자버전
const HAPPY_MOOD = "index/HAPPY_MOOD_B";
const SAD_MOOD = "index/SAD_MOOD_B";
const THRILL_MOOD = "index/THRILL_MOOD_B";

// 선택지 액션 - 여자버전
const HAPPY_MOOD_G = "index/HAPPY_MOOD_G";
const SAD_MOOD_G = "index/SAD_MOOD_G";
const THRILL_MOOD_G = "index/THRILL_MOOD_G";

// 챕터 2번 멜로디선택 컴포넌트 노출 용
const STORY_NO2 = "index/STORY_NO2";
const STORY_NO3 = "index/STORY_NO3";
// #1 애니메이션 / 텍스트 동기화 용
const PLUS_STATE1 = "index/PLUS_STATE1";
const PLUS_STATE2 = "index/PLUS_STATE2";
const PLUS_STATE3 = "index/PLUS_STATE3";
const PLUS_STATE4 = "index/PLUS_STATE4";
// 유저 이름 저장
const SET_NAME = "index/SET_NAME";
// 유저 사운드 저장
const SET_SOUND1 = "index/SET_SOUND1";
const SET_SOUND2 = "index/SET_SOUND2";
const SET_SOUND3 = "index/SET_SOUND3";
const SET_SOUND4 = "index/SET_SOUND4";
const SET_SOUND5 = "index/SET_SOUND5";
const SET_SOUND6 = "index/SET_SOUND6";
const SET_SOUND7 = "index/SET_SOUND7";
const SET_SOUND8 = "index/SET_SOUND8";

//<<<<<<< Updated upstream
// #2 애니메이션 / 텍스트 동기화 용 남자버전
//>>>>>>> Stashed changes
const CSBOY_1001 = "index/CSBOY_1001";
const SOMBOY_1002 = "index/SOMBOY_1002";
const RTRBOY_1003 = "index/RTRBOY_1003";
const SMBOY_1004 = "index/SMBOY_1004";
const CKBOY_1005 = "index/CKBOY_1005";
const BIRDBOY_1006 = "index/BIRDBOY_1006";

// #2 애니메이션 / 텍스트 동기화 용 여자버전
const CSGIRL_1401 = "index/CSGIRL_1401";
const SOMGIRL_1402 = "index/SOMGIRL_1402";
const RTRGIRL_1403 = "index/RTRGIRL_1403";
const SMGIRL_1404 = "index/SMGIRL_1404";
const CKGIRL_1405 = "index/CKGIRL_1405";
const BIRDGIRL_1406 = "index/BIRDGIRL_1406";
// reducer 설정
function reducer(state = initialState, action) {
  switch (action.type) {
    case HAPPY_MOOD: {
      return {
        ...state,
        moodSelect: 1000,
      };
    }
    case SAD_MOOD: {
      return {
        ...state,
        moodSelect: 2000,
      };
    }
    case THRILL_MOOD: {
      return {
        ...state,
        moodSelect: 3000,
      };
    }
    case HAPPY_MOOD_G: {
      return {
        ...state,
        moodSelect: 1400,
      };
    }
    case SAD_MOOD_G: {
      return {
        ...state,
        moodSelect: 2400,
      };
    }
    case THRILL_MOOD_G: {
      return {
        ...state,
        moodSelect: 3400,
      };
    }
    case STORY_NO2: {
      return {
        ...state,
        moodSelect: 6,
      };
    }
    case STORY_NO3: {
      return {
        ...state,
        moodSelect: 7,
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
    //사운드 저장
    case SET_SOUND1: {
      return { ...state, sound1: action.sound1 };
    }
    case SET_SOUND2: {
      return { ...state, sound2: action.sound2 };
    }
    case SET_SOUND3: {
      return { ...state, sound3: action.sound3 };
    }
    case SET_SOUND4: {
      return { ...state, sound4: action.sound4 };
    }
    case SET_SOUND5: {
      return { ...state, sound5: action.sound5 };
    }
    case SET_SOUND6: {
      return { ...state, sound6: action.sound6 };
    }
    case SET_SOUND7: {
      return { ...state, sound7: action.sound7 };
    }
    case SET_SOUND8: {
      return { ...state, sound8: action.sound8 };
    }
    case CSBOY_1001: {
      return {
        ...state,
        moodSelect: 1001,
      };
    }
    case SOMBOY_1002: {
      return {
        ...state,
        moodSelect: 1002,
      };
    }
    case RTRBOY_1003: {
      return {
        ...state,
        moodSelect: 1003,
      };
    }
    case SMBOY_1004: {
      return {
        ...state,
        moodSelect: 1004,
      };
    }
    case CKBOY_1005: {
      return {
        ...state,
        moodSelect: 1005,
      };
    }
    case BIRDBOY_1006: {
      return {
        ...state,
        moodSelect: 1006,
      };
    }
    case CSGIRL_1401: {
      return {
        ...state,
        moodSelect: 1401,
      };
    }
    case SOMGIRL_1402: {
      return {
        ...state,
        moodSelect: 1402,
      };
    }
    case RTRGIRL_1403: {
      return {
        ...state,
        moodSelect: 1403,
      };
    }
    case SMGIRL_1404: {
      return {
        ...state,
        moodSelect: 1404,
      };
    }
    case CKGIRL_1405: {
      return {
        ...state,
        moodSelect: 1405,
      };
    }
    case BIRDGIRL_1406: {
      return {
        ...state,
        moodSelect: 1406,
      };
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
