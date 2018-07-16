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
              <h4>Month Filter </h4>
              <span className="puzzleText"> { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
              <input onChange={ this.handleChange } className="inputLine"></input>
              <button onClick={this.handleClick} className="confirmationButton"></button>
              <span className="resultsBox filterStringRB"> { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}


export default FilterString;