import React from "react";

//Destructuring props
function Funtional({ name, age }) {
  function clickMe() {
    alert("normal function clicked");
  }
  function arrowclickMe(pra) {
    alert(`Clicked throw ${pra}`);
  }

  return (
    <>
      <h2>
        {name} {age} <br />
        <button onClick={clickMe}>Normal = Click here</button>
        <button onClick={() => arrowclickMe("arrow function")}>
          Arrow = Click here
        </button>
      </h2>
    </>
  );
}

export default Funtional;
