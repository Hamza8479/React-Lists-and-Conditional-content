import React from "react";
import styled from "styled-components";

function Person(props) {
  // Radium
  // const style = {
  //   // "@media and screen (max-width:500px)": {},
  //   "@media (min-width:400px)": {
  //     width: "400px",
  //   },
  // };

  // Styled component
  const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0px 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 400px) {
      width: 400px;
    }
  `;
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
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
    </StyledDiv>
  );
}

export default Person;
