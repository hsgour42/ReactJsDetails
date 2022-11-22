import React, { Component } from "react";

class RefOne extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    // this.inputRef.current.value = "Himanshu";
    // this.inputRef.current.style = "background-color:red";
    // console.log(this.inputRef);
    // console.log(this.inputRef.current.value);
  }

  focusInput = () => {
    this.inputRef.current.focus();
    this.inputRef.current.value = "Himanshu";
    this.inputRef.current.style = "background-color:red";
    console.log(this.inputRef);
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    );
  }
}

export default RefOne;
