import React from "react";
import "./Person.css";
import Radium from "radium";

function Person(props) {
  const style = {
    // "@media and screen (max-width:500px)": {},
    "@media (min-width:400px)": {
      width: "400px",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and I'm {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        name=""
        id=""
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
}

export default Radium(Person);
