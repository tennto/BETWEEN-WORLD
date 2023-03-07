import React, {useState} from 'react'
import ReactHowler from "../../howler/ReactHowler.js"
import { useSelector} from "react-redux";
import "../MoodLine/HappyText1.css"

export const Showsound = () => {
    const status = useSelector((state) => state);
    const [play,setPlaying] = useState(true)
    let names = [status.melodyName, status.soundName]
    
    const showing = () => {
        for(var i=0;i<2;i++){
            if(names[i] !== ""){
                    <>
                    <ReactHowler
                    src={names[i]}
                    playing={play}
                    loop={false}
                    mute={false}
                    volume={1.0}
                />
                <p>멜로디 {i}</p>
                {console.log(names[i])}
                    <button onClick={()=>{setPlaying(false)}}> 멈춤 </button>
                    <button onClick={()=>{setPlaying(true)}}> 실행 </button>  
                </>   
            }
        }
    }
    return (
        showing()
    )
    

//     console.log(status)
 
// if(status.melodyName !== ""){
//     return (
//         <>
//         <ReactHowler
//         src={status.melodyName}
//         playing={play}
//         loop={false}
//         mute={false}
//         volume={1.0}
//       />
//         <button onClick={()=>{setPlaying(false)}}> 멈춤 </button>
//         <button onClick={()=>{setPlaying(true)}}> 실행 </button>  
//       </>
      
//     )
// }
// if(status.soundName !== ""){
//     return (
//         <>
//         <ReactHowler
//         src={status.soundName}
//         playing={play}
//         loop={false}
//         mute={false}
//         volume={0.5}
//       />
//         <button onClick={()=>{setPlaying(false)}}> 멈춤 </button>
//         <button onClick={()=>{setPlaying(true)}}> 실행 </button>  
//       </>
      
//     )
// }

}

export default Showsound