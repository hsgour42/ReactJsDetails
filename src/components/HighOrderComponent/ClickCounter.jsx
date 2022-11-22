import React, { Component } from "react";
import CounterLogic from "./CounterLogic";

class ClickCounter extends Component {
  render() {
    const { count, increamentCount, name } = this.props;
    return (
      <div>
        {name}
        <button onClick={() => increamentCount()}>Click {count} Count</button>
      </div>
    );
  }
}

export default CounterLogic(ClickCounter, 10);
