import React, { Component } from "react";

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    palindromeSet(val) {
        var theInput = this.state.userInput;
        var split = theInput.split('');
        var reverse = split.reverse();
        var join = reverse.join('');
        if (theInput === join) {
            this.setState({ palindrome: 'True' });
        } else {
            this.setState({ palindrome: 'False' });
        }
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.palindromeSet(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;