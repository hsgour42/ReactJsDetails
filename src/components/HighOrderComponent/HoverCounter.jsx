import React, { Component } from "react";
import CounterLogic from "./CounterLogic";

class HoverCounter extends Component {
  render() {
    const { count, increamentCount, name } = this.props;
    return (
      <div>
        {name}
        <button onMouseOver={() => increamentCount()}>
          Hover {count} Counter
        </button>
      </div>
    );
  }
}

export default CounterLogic(HoverCounter, 5);
