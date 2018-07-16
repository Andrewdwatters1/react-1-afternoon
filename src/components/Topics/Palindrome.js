import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    handleClick = () => {
        let inputArr = this.state.userInput.split("");
        inputArr = inputArr.reverse();
        let reversed = inputArr.join("");
        let result;
        if (this.state.userInput === reversed) {
            result = 'true';
        } else {
            result = 'false';
        }
            this.setState({
                palindrome: result
            })
        
    }
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome Finder</h4>
                <input onChange={this.handleChange} className="inputLine"></input>
                <button onClick={this.handleClick} className="confirmationButton"></button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome;