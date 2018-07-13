import React, { Component } from 'react';
import EvensAndOdds from '../Topics/EvenAndOdd.js';
import FilterObject from '../Topics/FilterObject.js';
import FilterString from '../Topics/FilterString.js';
import Palindrome from '../Topics/Palindrome.js';
import Sum from '../Topics/Sum.js';

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvensAndOdds/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>
        )
    }
}

export default TopicBrowser;
