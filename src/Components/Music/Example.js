import React, {useState} from 'react'
import ReactHowler from "../../howler/ReactHowler.js"
import { useSelector, useDispatch } from "react-redux";
import {setSound1} from "../../index"
import "../MoodLine/HappyText1.css"


const Example = () =>{
  const status = useSelector((state) => state);
  const dispatch = useDispatch();
  const [play,setPlaying] = useState(false)

return(
    <div className="happy1" onMouseOver={()=>{setPlaying(true)}}
    onMouseLeave={()=>{setPlaying(false)}}>
    <ReactHowler
    src={['example_sound.mp3']}
    playing={play}
    loop={false}
    mute={false}
    volume={1.0}
    />
<p>음악1 뒷면</p>
  <button onClick={()=>{setPlaying(false)}}> 멈춤 </button>
  <button onClick={()=>{setPlaying(true)}}> 실행 </button>
  <button id='saveButtons'
        onClick={() => {
          dispatch(setSound1("example_sound.mp3"));
        }}
      >
        저장하기
      </button>
  </div>
)
}

export default Example