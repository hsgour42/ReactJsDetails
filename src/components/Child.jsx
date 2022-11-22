import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        <button
          onClick={() => this.props.invoke("Child Parameter", "Himanshu")}
        >
          Click Me In Child
        </button>
      </div>
    );
  }
}

export default Child;
