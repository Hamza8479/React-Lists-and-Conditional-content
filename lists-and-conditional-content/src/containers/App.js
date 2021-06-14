import React, { useState } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit";

function App() {
  const [state, setState] = useState({
    people: [
      { id: "p1", name: "Hamza", age: 22 },
      { id: "p2", name: "Munsif", age: 23 },
      { id: "p3", name: "Arslan", age: 21 },
    ],
    other: "other Data",
    showPerson: false,
    showCockpit: true,
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

  let personn = null;

  if (state.showPerson) {
    personn = (
      // equal its to  some Jsx code
      <Persons
        persons={state.people}
        clicked={deletePersonHandler}
        changedname={nameChangeHandler}
      />
    );
  }
  // let classes = ["red", "bold"].join(" "); return red bold

  return (
    <StyleRoot>
      <div className="App">
        <button
          onClick={() => {
            setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {state.showCockpit ? (
          <Cockpit
            showPerson={state.showPerson}
            peopleLength={state.people.length}
            toggle={togglePersonHandler}
          />
        ) : null}
        {personn}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
