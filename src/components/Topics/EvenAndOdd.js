import React, { Component } from 'react';

class EvensAndOdds extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick() { // *** THIS FUNCTION NOT PERFECT *****
    let nowArray = this.state.userInput.split("");
    parseInt(nowArray); 
    let evens = (nowArray.filter((e) => e % 2 === 0)) + ",";
    evens = evens.slice(0, -1)
    let odds = (nowArray.filter((e) => e % 2 === 1)) + ","; 
    odds = odds.slice(0, -1)
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }    
    
    
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
              <h4>Evens and Odds</h4>
              <input onChange={this.handleChange} className="inputLine"></input>
              <button onClick={this.handleClick} className="confirmationButton">Split</button>
              <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
              <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
            </div>
        )
    }
}

export default EvensAndOdds;

// Given a string of numbers separated by commas, split the numbers into two 
// different arrays. The first being an array of all the even numbers and the 
// second being an array of all the odd numbers.