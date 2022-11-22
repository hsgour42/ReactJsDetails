import React, { Component } from "react";

class MountingB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log("MountingB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("MountingB componentDidMount");
  }

  //Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "MountingB shouldComponentUpdate");
    //by default it return true, if it return false then next render , getSnapshotBeforeUpdate , componentDidUpdate not able to run
    return true;
  }

  //Updating
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "MountingB getSnapshotBeforeUpdate");
    return null;
  }

  //Updating
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, "MountingB componentDidUpdate");
  }

  render() {
    console.log("MountingB render");
    return <div>MountingB</div>;
  }
}

export default MountingB;
