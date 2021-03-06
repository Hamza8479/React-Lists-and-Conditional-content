import React, { Fragment } from "react";
import Person from "./Person/Person";

const Persons = (props) =>
  props.persons.map((prsn, index) => {
    return (
      <Fragment>
        <Person
          name={prsn.name}
          age={prsn.age}
          click={() => {
            props.clicked(index);
          }}
          key="p12"
          changed={(event) => {
            props.changedname(event, prsn.id);
          }}
          // isAuth={props.isAuthenticated}
        />
      </Fragment>
    );
  });

export default Persons;
