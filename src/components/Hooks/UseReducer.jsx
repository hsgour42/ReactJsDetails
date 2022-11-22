import React, { useReducer, useState } from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function UseReducer(props) {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}

export default UseReducer;
