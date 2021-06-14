import React, { useEffect } from "react";
import Classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js useEffect]");
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js 2nd useEffect]");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });
  const classes = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = Classes.Red;
  }
  if (props.peopleLength <= 2) {
    classes.push(Classes.red); // classes = ['red']
  }
  if (props.peopleLength <= 1) {
    classes.push(Classes.bold); // classes = ['red' 'bold']
  }

  return (
    <div className={Classes.Cockpit}>
      <h1>Hello there</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.toggle}>
        {""}
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
