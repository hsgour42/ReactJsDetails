import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallBack(props) {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const getItems = useCallback(() => {
    console.log(countTwo + 1, countTwo - 1);
    for (let i = 0; i < 1000000000; i++) {}
    console.log("getItem");
    return [countTwo + 1, countTwo - 1];
  }, [countTwo]);

  return (
    <div>
      <button onClick={() => setCountOne(countOne + 1)}>
        Count One :{countOne}
      </button>
      <button onClick={() => setCountTwo(countTwo + 1)}>
        Count Two :{countTwo}
      </button>
      <UseCallbackChild getItems={getItems}></UseCallbackChild>
    </div>
  );
}

export default UseCallBack;
