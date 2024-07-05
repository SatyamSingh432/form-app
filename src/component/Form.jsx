import React from "react";
import { useState } from "react";
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handlerFirst = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setFirstName(value);
    }
  };
  const handlerLast = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setLastName(value);
    }
  };
  const DisName = () => {
    return <div>{`Full Name: ${firstName} ${lastName}`}</div>;
  };
  const handlerDisplayName = (e) => {
    e.preventDefault();
    if (!firstName) {
      alert("Please enter first name");
      setClicked(false);
    } else if (!lastName) {
      alert("Please enter last name");
      setClicked(false);
    } else {
      setClicked(true);
      DisName();
    }
  };
  return (
    <div>
      <form onSubmit={handlerDisplayName}>
        <h1>Full Name Display</h1>
        <div>
          <span>First Name:</span>
          <input type="text" onChange={handlerFirst} value={firstName} />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text" onChange={handlerLast} value={lastName} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {clicked && firstName && lastName && <DisName />}
    </div>
  );
};
export default Form;
