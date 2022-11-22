import React, { Component } from "react";
import PersonData from "./PersonData";

class RandomUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
    };
  }
  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      loading: false,
      person: data.results[0],
    });
  }
  render() {
    return (
      <div>
        <PersonData
          loading={this.state.loading}
          person={this.state.person}
        ></PersonData>
      </div>
    );
  }
}

export default RandomUser;
