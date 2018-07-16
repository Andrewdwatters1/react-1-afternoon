import React, { Component } from 'react';

class Sum extends Component {
    render() {
        return (
            <p>Sum Component</p>
        )
    }
}

export default Sum;

// Summary
// In this step, we'll build out the Sum component.

// Instructions
// The problem summary: Given two numbers, calculate the sum and display it.

// The component outline: One parent div element, one h4 element, two input elements, one button element, and one span element.

// Open src/components/Topics/Sum.js.
// Remove the <p> element from the return of the render method.
// Add the component outline to the return of the render method.
// Add the following className props to the outline:
// div - className="puzzleBox sumPB"
// The two input - className="inputLine"
// button - className="confirmationButton"
// span - className="resultsBox"
// Assign the h4 element the value of "Sum".
// Create a constructor method that creates an initital state:
// number1 - This should default to 0.
// number2 - This should default to 0.
// sum - This should default to null.
// Create an onChange prop for the first input element that updates the value of number1 on state.
// Create an onChange prop for the second input element that updates the value of number2 on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of sum.
// Assign the span element the value of sum