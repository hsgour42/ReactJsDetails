import React, { Component } from "react";

class SnapShot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "first",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "last" });
    }, 3000);
    console.log("run");
  }

  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("getSnapshotBeforeUpdate", preState.name);
    document.getElementById("prev").innerHTML = preState.name;
    return preState.name;
  }

  componentDidUpdate(prevProps, preState, snapshot) {
    console.log("componentDidUpdate snap", snapshot);
    console.log("componentDidUpdate", this.state.name);
    document.getElementById("current").innerText = this.state.name;
  }

  render() {
    return (
      <div>
        <div id="prev">{this.state.name}</div>
        <div id="current"></div>
      </div>
    );
  }
}

export default SnapShot;
