import React from 'react'
import ReactHowler from "../../howler/ReactHowler.js"
import "../MoodLine/HappyText1.css"

class Happyfirst2 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      volume : 0.2
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div>
        <div className="happy1_2" onMouseOver={()=>{this.setState({playing : true})}} onMouseOut={()=>{this.setState({playing : false})}}>
        <ReactHowler
          src={['rain.mp3']}
          playing={this.state.playing}
          volume ={this.state.volume}
        />
        음악 2(뒷면)
        <button onClick={()=>{}}>저장</button>
        </div>
      </div>
    )
  }
}


export default Happyfirst2
