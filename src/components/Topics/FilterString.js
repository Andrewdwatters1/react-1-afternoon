import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super() 
        this.state = {
            unFilteredArray: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            userInput: "",
            filteredArray: [],
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(e) {
        
        this.setState({ 
            userInput: e.target.value,
        })
    }

    handleClick() {
        console.log(this.state.userInput)
        let result = [];
        if (this.state.userInput === "best state") {
          result.push("Colorado");
        } else {
          for (let i = 0; i < this.state.unFilteredArray.length; i++) {
            if (this.state.unFilteredArray[i].includes(this.state.userInput)) {
                result.push(this.state.unFilteredArray[i]);
            }  
          }  
        }
        this.setState({
            filteredArray: result,
        })
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
              <h4>Filter Months </h4>
              <span className="puzzleText"> { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
              <input onChange={ this.handleChange } className="inputLine"></input>
              <button onClick={this.handleClick} className="confirmationButton"></button>
              <span className="resultsBox filterStringRB"> { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}


export default FilterString;

// Instructions
// The problem summary: Using a pre-determined array of strings, filter out strings that do not contain a given string. 
// Display a new array populated with the strings that do contain the given string.

// Create a constructor method that creates an initial state:
// unFilteredArray - This should default to an array of strings. You choose what strings go in the array.
// userInput - This should default to an empty string.
// filteredArray - This should default to an empty array.
// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of filteredArray.
// Assign the first span element the value of unFilteredArray.
// Assign the last span element the value of filteredArray.