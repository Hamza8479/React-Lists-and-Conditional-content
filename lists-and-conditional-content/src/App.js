import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [state, setState] = useState({
    people: [
      { name: "Hamza", age: 22 },
      { name: "Munsif", age: 23 },
      { name: "Arslan", age: 21 },
    ],
    other: "other Data",
    showPerson: false,
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(state, otherState);

  const switchNameHandler = (newName) => {
    setState({
      people: [
        { name: newName, age: 22 },
        { name: "Munsif", age: 23 },
        { name: "Arslan", age: 19 },
      ],
      other: state.other,
    });
  };

  const nameChangeHandler = (event) => {
    setState({
      people: [
        { name: "Hamza", age: 22 },
        { name: event.target.value, age: 23 },
        { name: "Arslan", age: 19 },
      ],
      other: state.other,
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  const togglePersonHandler = () => {
    // const doseShow = !state.showPerson;
    setState({ ...state, showPerson: !state.showPerson });
  };

  return (
    <div className="App">
      <h1>Hello there</h1>
      <button style={style} onClick={togglePersonHandler}>
        {""}
        Switch Name
      </button>

      {state.showPerson === true ? (
        <div>
          <Person
            click={switchNameHandler.bind(this, "Hamza!!")}
            name={state.people[0].name}
            age={state.people[0].age}
          >
            {" "}
            My Hobby: Develope and learn new stuff daily.{" "}
          </Person>

          <Person
            name={state.people[1].name}
            age={state.people[1].age}
            changed={nameChangeHandler}
          />

          <Person name={state.people[2].name} age={state.people[2].age} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
