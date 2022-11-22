import React, { Component } from "react";

class ClickCounterProps extends Component {
  render() {
    const { count, increament } = this.props;
    return (
      <div>
        <button onClick={() => increament()}>Click {count} Count</button>
      </div>
    );
  }
}

export default ClickCounterProps;
