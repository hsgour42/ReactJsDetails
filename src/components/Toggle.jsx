import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  toggle(action) {
    this.setState(
      {
        show: action,
      },
      () => {
        // console.log(this.state.show);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.show && <h1>Show, Hide and Toggle</h1>}
        <button onClick={() => this.toggle(true)}>Show</button>
        <button onClick={() => this.toggle(false)}>Hide</button>
        <button onClick={() => this.toggle(!this.state.show)}>Toggle</button>
      </div>
    );
  }
}

export default Toggle;
