import React from "react";
import "./Person.css";

function Person(props) {
  return (
    <div className="Person">
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

export default Person;
