import React, { Component } from 'react';

class Palindrome extends Component {
    render() {
        return (
            <p>Palindrome Component</p>
        )
    }
}

export default Palindrome;

// Summary
// In this step, we'll build out the Palindrome component.

// Instructions
// The problem summary: Using a given string, determine if it is spelt the same backwards as it is forwards.

// The component outline: One parent div element, one h4 element, one input element, one button element, and one span element.

// Open src/components/Topics/Palindrome.js.
// Remove the <p> element from the return of the render method.
// Add the component outline to the return of the render method.
// Add the following className props to the outline:
// div - className="puzzleBox filterStringPB"
// input - className="inputLine"
// button - className="confirmationButton"
// span - className="resultsBox"
// Assign the h4 element the value of "Palindrome".
// Create a constructor method that creates an initial state:
// userInput - This should default to an empty string.
// palindrome - This should default to an empty string.
// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of palindrome.
// Assign the span element the value of palindrome
