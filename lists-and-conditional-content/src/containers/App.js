import React, { useState } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function App() {
  const [state, setState] = useState({
    people: [
      { id: "p1", name: "Hamza", age: 22 },
      { id: "p2", name: "Munsif", age: 23 },
      { id: "p3", name: "Arslan", age: 21 },
    ],
    other: "other Data",
    showPerson: false,
  });

  const nameChangeHandler = (event, id) => {
    const personIndex = state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...state.people[personIndex],
    };
    person.name = event.target.value;

    const prsn = [...state.people];
    prsn[personIndex] = Person;

    setState({
      people: prsn,
    });
  };

  const deletePersonHandler = (prsnIndex) => {
    // const person = state.people.slice();
    // this will create new array that is copy of old one and alternative approach of this is below
    const person = [...state.people];
    person.splice(prsnIndex, 1);
    setState({
      people: person,
    });
  };

  const togglePersonHandler = () => {
    // const doseShow = !state.showPerson;
    setState({ ...state, showPerson: !state.showPerson });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    },
  };

  let personn = null;

  if (state.showPerson) {
    personn = (
      // equal its to  some Jsx code
      <div>
        <Persons
          persons={state.people}
          clicked={deletePersonHandler}
          changedname={nameChangeHandler}
        />
      </div>
    );
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "orangered",
      color: "black",
    };
  }
  // let classes = ["red", "bold"].join(" "); return red bold
  const classes = [];
  if (state.people.length <= 2) {
    classes.push("red"); // classes = ['red']
  }
  if (state.people.length <= 1) {
    classes.push("bold"); // classes = ['red', 'bold']
  }
  return (
    <StyleRoot>
      <div className="App">
        <h1>Hello there</h1>
        <p className={classes.join(" ")}>This is really working</p>
        <button style={style} onClick={togglePersonHandler}>
          {""}
          Toggle Persons
        </button>

        {personn}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
