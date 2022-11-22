import React, { useEffect, useLayoutEffect } from "react";

function UseLayout(props) {
  useEffect(() => {
    console.log("useEffect");
  });

  useLayoutEffect(() => {
    console.log("use Laylout effect");
  });
  return <div style={{ height: "10000px" }}></div>;
}

export default UseLayout;
