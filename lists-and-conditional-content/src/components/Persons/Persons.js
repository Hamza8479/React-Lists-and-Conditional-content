import React from "react";
import Person from "./Person/Person";

const Persons = (props) =>
  props.persons.map((prsn, index) => {
    return (
      <Person
        name={prsn.name}
        age={prsn.age}
        click={() => {
          props.clicked(index);
        }}
        key={prsn.id}
        changed={(event) => {
          props.changedname(event, prsn.id);
        }}
      />
    );
  });

export default Persons;