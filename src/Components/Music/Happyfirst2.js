import React from 'react'
import ReactHowler from "../../howler/ReactHowler.js"
import "../MoodLine/HappyText1.css"
import raf from 'raf'

class Happyfisrt2 extends React.Component {
constructor (props) {
  super(props)

  this.state = {
    playing: false,
    loaded: false,
    loop: false,
    mute: false,
    volume: 0.1,
    seek: 0.0,
    rate: 1,
    isSeeking: false
  }
  this.handleToggle = this.handleToggle.bind(this)
  this.handleOnLoad = this.handleOnLoad.bind(this)
  this.handleOnEnd = this.handleOnEnd.bind(this)
  this.handleOnPlay = this.handleOnPlay.bind(this)
  this.handleStop = this.handleStop.bind(this)
  this.renderSeekPos = this.renderSeekPos.bind(this)
  this.handleLoopToggle = this.handleLoopToggle.bind(this)
  this.handleMuteToggle = this.handleMuteToggle.bind(this)
  this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this)
  this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this)
  this.handleSeekingChange = this.handleSeekingChange.bind(this)
  this.handleRate = this.handleRate.bind(this)
}

componentWillUnmount () {
  this.clearRAF()
}

handleToggle () {
  this.setState({
    playing: !this.state.playing
  })
}

handleOnLoad () {
  this.setState({
    loaded: true,
    duration: this.player.duration()
  })
}

handleOnPlay () {
  this.setState({
    playing: true
  })
  this.renderSeekPos()
}

handleOnEnd () {
  this.setState({
    playing: false
  })
  this.clearRAF()
}

handleStop () {
  this.player.stop()
  this.setState({
    playing: false // Need to update our local state so we don't immediately invoke autoplay
  })
  this.renderSeekPos()
}

handleLoopToggle () {
  this.setState({
    loop: !this.state.loop
  })
}

handleMuteToggle () {
  this.setState({
    mute: !this.state.mute
  })
}

handleMouseDownSeek () {
  this.setState({
    isSeeking: true
  })
}

handleMouseUpSeek (e) {
  this.setState({
    isSeeking: false
  })

  this.player.seek(e.target.value)
}

handleSeekingChange (e) {
  this.setState({
    seek: parseFloat(e.target.value)
  })
}

renderSeekPos () {
  if (!this.state.isSeeking) {
    this.setState({
      seek: this.player.seek()
    })
  }
  if (this.state.playing) {
    this._raf = raf(this.renderSeekPos)
  }
}

handleRate (e) {
  const rate = parseFloat(e.target.value)
  this.player.rate(rate)
  this.setState({ rate })
}

clearRAF () {
  raf.cancel(this._raf)
}

render () {
  return (
    <div className='Happyfirst2'>
      <div className="happy1" onMouseOver={()=>{this.setState({playing : true})}}
      onMouseLeave={(e)=>{e.stopPropagation();this.handleStop()}}>
      <ReactHowler
        src={['rain.mp3']}
        playing={this.state.playing}
        onLoad={this.handleOnLoad}
        onPlay={this.handleOnPlay}
        onEnd={this.handleOnEnd}
        loop={this.state.loop}
        mute={this.state.mute}
        volume={this.state.volume}
        ref={(ref) => (this.player = ref)}
      />
      <p>
        {this.state.seek.toFixed(2)}
        {' / '}
        {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
      </p>
      음악 2(뒷면)
      <button onClick={(e)=>{
        e.stopPropagation();
        alert("저장완료")
      }}>저장</button>
    </div>
    </div>
  )
}
}



export default Happyfisrt2
