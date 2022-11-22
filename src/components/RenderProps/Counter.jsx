import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increament = () => {
    console.log("Count", this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return <div>{this.props.render(count, this.increament)}</div>;
  }
}

export default Counter;
