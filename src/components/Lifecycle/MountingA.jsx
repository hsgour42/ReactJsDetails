import React, { Component } from "react";
import MountingB from "./MountingB";

class MountingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    console.log("MountingA Constructor");
    if (props.name === "Himanshu") {
      throw new Error("Something went wrong");
    }
  }
  //Mounting and Updating
  static getDerivedStateFromProps(props, state) {
    console.log(props.name, "MountingA getDerivedStateFromProps");
    if (state.name == "") {
      return { ...state, name: props.name };
    } else {
      return null;
    }
  }
  //Mounting
  componentDidMount() {
    console.log("MountingA componentDidMount");
  }

  //Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "MountingA shouldComponentUpdate");
    //by default it return true, if it return false then next render , getSnapshotBeforeUpdate , componentDidUpdate not able to run
    return true;
  }

  //Updating
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, "MountingA getSnapshotBeforeUpdate");
    return null;
  }

  //Updating
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, "MountingA componentDidUpdate");
  }

  //Unmounting
  componentWillUnmount() {
    console.log("MountingA componentWillUnmount");
  }

  // componentDidCatch(error, info) {
  //   console.log(error, info);
  // }

  changeState = () => {
    console.log("MountingA Change State");
    this.setState({
      name: "State Changed",
    });
  };
  render() {
    console.log("MountingA render");
    return (
      <div>
        MountingA {this.state.name}
        <button onClick={this.changeState}>Change State</button>
        <MountingB></MountingB>
      </div>
    );
  }
}

export default MountingA;
