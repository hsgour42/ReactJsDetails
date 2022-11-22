import React, { Component } from "react";

class PersonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persons: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state, persons: props.person, loading: props.loading };
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {/* <div> {this.persons.email}</div>
            <div> {this.persons.gender}</div> */}
          </div>
        )}
      </>
    );
  }
}

export default PersonData;
