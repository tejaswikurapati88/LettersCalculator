// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {noOfLetters: 0, searchInput: ''}

  countNos = event => {
    this.setState({
      searchInput: event.target.value,
      noOfLetters: event.target.value.length,
    })
  }

  showNo = () => {
    this.setState({searchInput: '', noOfLetters: 0})
  }

  render() {
    const {noOfLetters, searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img-class"
            alt="letters calculator"
          />
          <div className="text-container">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <div className="inputCont">
              <label htmlFor="inputId" className="para">
                Enter the phrase
              </label>
              <input
                id="inputId"
                className="input"
                value={searchInput}
                type="type"
                onChange={this.countNos}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="button" onClick={this.showNo}>
              No.of letters: {noOfLetters}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
