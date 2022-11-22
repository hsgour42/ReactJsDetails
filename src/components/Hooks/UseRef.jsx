import React, { useRef } from "react";

function UseRef(props) {
  const inputRef = useRef();

  function handleRef() {
    console.log("inside handle ref");
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.value = "Himanshu";
    inputRef.current.style = "color:red";

    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef} type="text"></input>

      <button onClick={handleRef}>Click Here to useRef</button>
    </div>
  );
}

export default UseRef;
