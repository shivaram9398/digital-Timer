import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25 * 60, min: 25, sec: 0, image: true}

  start = () => {
    console.log('start')
    this.intervalID=setInterval(this.tick,1000)
    this.setState({image:false})
  }

  reset = () => {
    console.log('reset')
    clearInterval(this.intervalID)
    this.setState({time: 25 * 60, min: 25, sec: 0, image: true})
  }

  decrement = () => {
    console.log("decrease")
    clearInterval(this.intervalID)
    this.setState(prev=> ({min:prev.min-1,time:(prev.min-1)*60,sec:0}))
  }

  adding =()=> {
    console.log("add")
    clearInterval(this.intervalID)
    this.setState(prev=> ({min:prev.min+1,time:(prev.min+1)*60,sec:0}))
  }

  stop=()=> {
    console.log("stop")
    clearInterval(this.intervalID)
    this.setState({image:true})
  }

  tick=()=> {
     const {time} = this.state
    const d = time % 60
    console.log(d)
    if (time < 60) {
      this.setState(prev => ({
        min: Math.floor(prev.time / 60),
        time: prev.time - 1,
        sec: (prev.time % 60),
      }))
    } else {
      this.setState(prev => ({
        min: Math.floor(prev.time / 60),
        time: prev.time - 1,
        sec:(prev.time % 60),
      }))
    }
  }

  render() {
    const {min, sec,image} = this.state
    const mintues = min < 9 ? `0${min}` : min
    const seconds = sec < 9 ? `0${sec}` : sec
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="time">
          <div className="bg-image">
            <div className="round">
              <h1 className="minutes">
                {mintues}:{seconds}
              </h1>
              {image?<p className="para">Paused</p>:<p className="para">Running</p>}
            </div>
          </div>

          <div className="left-side">
            <div className="buttons">
              <div className="start">
                {image?<button className="button" type="button" onClick={this.start}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    className="image1"
                    alt="play icon"
                  />
                </button>:<button className="button" type="button" onClick={this.stop}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    className="image1"
                    alt="pause icon"
                  />
                </button>}
                {image?<p className="para">Start</p>:<p className="para">Paused</p>}
              </div>
              <div className="start">
                <button className="button" type="button" onClick={this.reset}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    className="image1"
                    alt="reset icon"
                  />
                </button>
                <p className="para">Reset</p>
              </div>
            </div>
            <p className="short">Set Timer Limit</p>

            <div className="time-seter">
              {image?
              <button className="button weight" type="button" onClick={this.decrement}>
                -
              </button>
              :<button className="button weight" type="button" onClick={this.decrement} disabled>
                -
              </button>}
              <p className="set">{mintues}</p>
              {image?
              <button className="button weight" type="button" onClick={this.adding}>
                +
              </button>
              :<button className="button weight" type="button" onClick={this.adding} disabled>
                +
              </button>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
