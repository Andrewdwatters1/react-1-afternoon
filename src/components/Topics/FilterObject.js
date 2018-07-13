import React, { Component } from 'react';

class FilterObjects extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [{
                "name": "Baby Simba",
                "species": "Lion",
                "roar": "rawr",
                "paws": "small"
            }, {
                "name": "Scar",
                "type": "douchebag",
                "traitor": true
            }, {
                "name": "Nala",
                "species": "Lion",
                "hottie?": true,
            }, {
                "species": "Monkey",
                "crazy": true,
                "regrets": 0,
                "lit AF?": "Always"
            }],
            userInput: '',
            filteredArray: [],
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    handleClick() {
        this.setState({
            filteredArray: '1, 2, 3',
        })
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
              <h4>Filter Lion-King</h4>
              <span className="puzzleText"> {JSON.stringify(this.state.unFilteredArray)}</span>
              <input onChange={this.handleChange} className="inputLine"></input>
              <button onClick={this.handleClick} className="confirmationButton"></button>
              <span className="resultsBox filterObjectRB"> {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObjects;


//Using a pre-determined array of objects, filter out objects that do not have a 
// given property. Display a new array populated with the objects that do have the
//  given property.
