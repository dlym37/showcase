import React, { Component } from "react";

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            people: [{
                firstName: "Daniel",
                lastName: "Lym",
                status: "Freaking Awesome",
                age: 27
            },
            {
                fristName: "Kristine",
                lastName: "Lym",
                age: 25,
                food: "Mexican"
            },
            {
                firstName: "Claire",
                lastName: "Lym",
                age: 2

            },
            {
                firstName: "??????",
                lastName: "Lym",
                born: false
            }],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    buttonClick(prop) {
        var people = this.state.people;
        var filterPeople = [];

        for(var i = 0; i < people.length; i++){
            if(people[i].hasOwnProperty(prop)){
                filterPeople.push(people[i]);

            }
        }
        this.setState({filterPeople: filterPeople});

    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original:{ JSON.stringify(this.state.people, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.buttonClick(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered:{ JSON.stringify(this.state.filterPeople, null, 10) }</span>
            </div>
        )
    }
}
export default FilterObject;