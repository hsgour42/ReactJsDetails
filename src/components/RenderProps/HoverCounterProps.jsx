import React, { Component } from "react";

class HoverCounterProps extends Component {
  render() {
    const { count, increament } = this.props;
    return (
      <div>
        <button onMouseOver={() => increament()}>Click {count} Count</button>
      </div>
    );
  }
}

export default HoverCounterProps;
