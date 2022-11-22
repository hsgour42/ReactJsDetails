import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  greet(childName, name) {
    alert(`invoke parent function with ${childName} invoked by ${name}`);
  }
  render() {
    return (
      <>
        <Child invoke={this.greet} />
      </>
    );
  }
}

export default Parent;
