import React, { Component } from "react";

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ["Dano","Kristine","Claire", "Quinnley", "Diane", "Jeff", "Joy", "Randy", "Matt", "Katie", "Jason", "Brittany", "Sarah", "Audrey", "Brian","Cameron"],
            userInput: "",
            filteredArray: []
        }

    }
    handleChange(val){
        this.setState({userInput : val});
    }
    filterNames(prop){
        var names = this.state.names;
        var filtArray = [];
        for(var i = 0; i < names.length; i++){
            if(names[i].includes(prop)){
                filtArray.push(names[i]);
            }
        }
        this.setState({filteredArray: filtArray});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">Original:{JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
export default FilterString;