import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsTypeCheck extends Component {
  render() {
    return (
      <div>
        {this.props.name} {this.props.age}
      </div>
    );
  }
}

PropsTypeCheck.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

PropsTypeCheck.defaultProps = {
  name: "user",
};

export default PropsTypeCheck;
