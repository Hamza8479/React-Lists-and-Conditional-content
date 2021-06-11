import React from "react";

const Cockpit = (props) => {
  const classes = [];
  if (props.state.people.length <= 2) {
    classes.push("red"); // classes = ['red']
  }
  if (props.state.people.length <= 1) {
    classes.push("bold"); // classes = ['red', 'bold']
  }
  return (
    <div>
      <h1>Hello there</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button style={style} onClick={togglePersonHandler}>
        {""}
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
