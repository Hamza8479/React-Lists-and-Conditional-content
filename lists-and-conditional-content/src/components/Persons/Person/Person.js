import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import classes from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";

function Person(props) {
  // Radium
  // const style = {
  //   // "@media and screen (max-width:500px)": {},
  //   "@media (min-width:400px)": {
  //     width: "400px",
  //   },
  // };

  // Styled component
  // const StyledDiv = styled.div`
  //   width: 60%;
  //   margin: 16px auto;
  //   border: 1px solid #eee;
  //   box-shadow: 0px 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;
  //   @media (min-width: 400px) {
  //     width: 400px;
  //   }
  // `;
  // const rnd = Math.random();
  // if (rnd > 0.9) {
  //   throw new Error("something went wrong");
  // }

  useEffect(() => {
    // document.querySelector("input").focus(); by doing this first input will select
  });
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and I'm {props.age} years old{" "}
      </p>
      <p key="i1">{props.children}</p>
      <input
        type="text"
        name=""
        id=""
        onChange={props.changed}
        value={props.name}
        key="i2"
        ref={(inputEl) => {
          inputEl.focus();
        }}
      />
    </WithClass>
    //  {/* </div> </StyledDiv>*/}
  );
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default Person;
