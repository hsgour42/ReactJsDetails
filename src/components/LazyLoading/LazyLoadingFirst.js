import React, { Component } from "react";

class LazyLoadingFirst extends Component {
  componentDidMount() {
    for (let i = 0; i < 10000000000; i++) {}
  }
  render() {
    return <div>First</div>;
  }
}

export default LazyLoadingFirst;
