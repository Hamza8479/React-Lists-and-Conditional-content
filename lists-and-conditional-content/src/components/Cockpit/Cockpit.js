import React, { useEffect, useRef } from "react";
import Classes from "./Cockpit.module.css";
import authcontext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js useEffect]");
    // setTimeout(() => {
    //   alert("saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>
        {""}
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
      {/* <authcontext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </authcontext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
