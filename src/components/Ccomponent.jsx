import React, { Component } from "react";

class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Super",
      age: parseInt(props.age),
    };
    this.checkBindEvent = this.checkBindEvent.bind(this);
  }
  clickme() {
    alert("clicked");
  }

  increament() {
    // this.setState(
    //   {
    //     age: this.state.age + 1,
    //   },
    //   () => {
    //     console.log(this.state.age);
    //   }
    // );

    //for handling many same call at a time
    this.setState(
      (prevState, props) => ({
        age: prevState.age + parseInt(props.age) + 1,
      }),
      () => {
        console.log(this.state.age);
      }
    );
  }

  incrementMany() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  checkBindEvent() {
    this.setState({
      age: 50,
    });
  }

  render() {
    //Destructuring props
    const { age, name } = this.props;
    return (
      <>
        <h2>
          {name} {this.state.age} <br />
          <button onClick={this.clickme}>Click here</button>
          <button onClick={() => this.clickme()}>arrow = Click here</button>
          <button onClick={() => this.incrementMany()}>incrementMany</button>
          {/* How with the help of bind event we can call function */}
          {/* <button onClick={this.checkBindEvent.bind(this)}>
            checkBindEvent 1 method
          </button> */}
          <button onClick={this.checkBindEvent}>
            checkBindEvent 2 method using constructor
          </button>
        </h2>
      </>
    );
  }
}

export default Ccomponent;
