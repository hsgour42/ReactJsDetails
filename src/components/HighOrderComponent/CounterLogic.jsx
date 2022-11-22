import React, { Component } from "react";

const CounterLogic = (WarrapedComponent, increamentValue) => {
  class CounterLogic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState({
        count: this.state.count + increamentValue,
      });
    };
    render() {
      return (
        <div>
          <WarrapedComponent
            count={this.state.count}
            increamentCount={this.increamentCount}
            {...this.props}
          />
        </div>
      );
    }
  }

  return CounterLogic;
};
export default CounterLogic;
