import React, { useEffect } from "react";

//if we are creating custom hooks then first name start with useSomething
function UseCustomHookChild(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export default UseCustomHookChild;
