import React from "react";
import { useParams } from "react-router-dom";

function About(props) {
  const params = useParams();
  //   console.log(params, "params");
  return <div>About Page {params.id}</div>;
}

export default About;
