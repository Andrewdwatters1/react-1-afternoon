import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super() 
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    handle1Change = (e) => {
        this.setState({
            number1: parseInt(e.target.value)
        })
    }
    
    handle2Change = (e) => {
        this.setState({
            number2: parseInt(e.target.value)
        })
    }
    
    handleClick = () => {
        this.setState({
            
            sum: (this.state.number1) + (this.state.number2),
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Add 'em up</h4>
                <input onChange={this.handle1Change} className="inputLine"></input>
                <input onChange={this.handle2Change} className="inputLine"></input>
                <button onClick={this.handleClick} className="confirmationButton"></button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum;
