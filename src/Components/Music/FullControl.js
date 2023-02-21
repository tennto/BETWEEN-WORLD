import React from 'react'
import ReactHowler from "/Users/jaewon/Desktop/github_example/BETWEEN-WORLD/src/howler/ReactHowler.js"


class FullControl extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      volume: 1
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
        <div style={{height:'200px',width : '400px', backgroundColor : 'black'}} onMouseOver={()=>{this.setState({playing : true})}}
   onMouseOut={()=>{this.setState({playing : false})}}>
                                                        {console.log(this.state)}
        <ReactHowler
          src={['example_sound.mp3']}
          playing={this.state.playing}
          volume={this.state.volume}
        />
        </div>
      </div>
    )
  }
}


export default FullControl
