import React, { Component } from "react";

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val1){
        this.setState({number1 : parseInt(val1, 10)});
    }
    handleChange2(val2){
        this.setState({number2 : parseInt(val2, 10)});
    }
    total(val3, val4) {
        this.setState({sum : val3 + val4});
    }
    render () {
        return (
           <div className="puzzleBox sumPB">
               <h4>Sum</h4>
               <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>
               <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>
               <button className="confirmationButton" onClick= {() => this.total(this.state.number1, this.state.number2)}>Add</button>
               <span className="resultsBox">Sum: {this.state.sum}</span>
           </div>
        )
    }
}
export default Sum;