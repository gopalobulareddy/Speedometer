// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  increaseCount = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  decreaseCount = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="head">
          Speed is <span>{count}mph</span>
        </h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button onClick={this.increaseCount} className="btn1">
            Accelerate{' '}
          </button>
          <button onClick={this.decreaseCount} className="btn2">
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
