import React, { useState } from "react";
function countInit() {
  console.log("constructor outside");
  return 0;
}

function UseState(props) {
  console.log("entered");

  const [x, setX] = useState(countInit());

  //if we use arrow function inside useState then it work as constructor
  const [count, setCount] = useState(() => {
    console.log("constructor");
    return 0;
  });
  const [name, setName] = useState("increament");

  const [state, setState] = useState({ countAgain: 0, nameAgain: "increment" });

  const countAgain = state.countAgain;
  const nameAgain = state.nameAgain;

  function increament() {
    // setCount(count + 1);
    // //if we do not want to wait for render
    // setCount((prevCount) => prevCount + 1);

    setState((prevState) => {
      return {
        ...prevState, //put previos value first then update
        countAgain: prevState.countAgain + 1,
        nameAgain: "increment",
      };
    });
  }

  function decrement() {
    // setCount(count - 1);

    setState((prevState) => {
      return {
        ...prevState, //put previos value first then update
        countAgain: prevState.countAgain - 1,
        nameAgain: "decreament",
      };
    });
  }
  return (
    <div>
      {name} <br />
      <button onClick={increament}>+</button>
      {count} <button onClick={decrement}>-</button>
      <br />
      <br />
      <br />
      {nameAgain} <br />
      <button onClick={increament}>+</button>
      {countAgain} <button onClick={decrement}>-</button>
    </div>
  );
}

export default UseState;
