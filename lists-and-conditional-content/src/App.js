import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

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

  // const nameChangeHandler = (event) => {
  //   setState({
  //     people: [
  //       { name: "Hamza", age: 22 },
  //       { name: event.target.value, age: 23 },
  //       { name: "Arslan", age: 19 },
  //     ],
  //     other: state.other,
  //   });
  // };

  const deletePersonHandler = (prsnIndex) => {
    // const person = state.people.slice();
    // this will create new array that is copy of old one and alternate of this is below
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

  let person = null;

  if (state.showPerson) {
    person = (
      // equal its to  some Jsx code
      <div>
        {state.people.map((prsn, index) => {
          return (
            <Person
              name={prsn.name}
              age={prsn.age}
              click={() => {
                deletePersonHandler(index);
              }}
              key={prsn.id}
            />
          );
        })}
      </div>
    );
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hello there</h1>
      <button style={style} onClick={togglePersonHandler}>
        {""}
        Toggle Persons
      </button>
      {person}
    </div>
  );
}

export default App;
