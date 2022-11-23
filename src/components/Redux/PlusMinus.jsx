import React, { useEffect } from "react";
import { increament, decreament } from "./Actions/index";
import { useDispatch, useSelector } from "react-redux";

function PlusMinus(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.changeCount);

  return (
    <div>
      Functional Component
      <button onClick={() => dispatch(decreament(data[0] - 1, "Himanshu"))}>
        -
      </button>
      &nbsp; {data[0]} &nbsp;
      <button onClick={() => dispatch(increament(data[0] + 1, "Vijay"))}>
        +
      </button>
      <br />
      <div>{data[1]}</div>
    </div>
  );
}

export default PlusMinus;
