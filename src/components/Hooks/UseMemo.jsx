import React, { useEffect, useMemo, useState } from "react";

function UseMemo(props) {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  function increment() {
    setOne(one + 1);
  }

  function decrement() {
    setTwo(two - 1);
  }
  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return one % 2 === 0;
  }, [one]);

  return (
    <div>
      <button onClick={increment}>Count One {one}</button>
      {isEven ? "Even" : "Odd"}
      <br />
      <button onClick={decrement}>Count Two {two}</button>
    </div>
  );
}

export default UseMemo;
