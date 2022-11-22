import React, { Component } from "react";
import RefOne from "./RefOne";

class RefOneParent extends Component {
  constructor(props) {
    super(props);
    this.parentInputRef = React.createRef();
  }
  assignRef() {
    this.parentInputRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <RefOne ref={this.parentInputRef}></RefOne>
        <button onClick={() => this.assignRef()}>Click</button>
      </div>
    );
  }
}

export default RefOneParent;
