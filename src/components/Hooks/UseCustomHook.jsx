import React, { useState } from "react";
import UseCustomHookChild from "./UseCustomHookChild";
import useLocalStoirage from "./useLocalStoirage";

function UseCustomHook(props) {
  const [name, setName] = useLocalStoirage("name", "");

  UseCustomHookChild(name);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default UseCustomHook;
