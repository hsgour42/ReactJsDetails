import React, { Component } from "react";
import { increament, decreament } from "./Actions/index";
import { connect } from "react-redux";

class PlusMinusClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, "props update");
  }
  render() {
    return (
      <div>
        Class Component
        <button onClick={() => this.props.decreament(1, "Himanshu props")}>
          -
        </button>
        &nbsp; {this.props.count} &nbsp;
        <button onClick={() => this.props.increament(2, "Vijay props")}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.changeCount };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increament: (num, name) => dispatch(increament(num, name)),
    decreament: (num, name) => dispatch(decreament(num, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlusMinusClass);
