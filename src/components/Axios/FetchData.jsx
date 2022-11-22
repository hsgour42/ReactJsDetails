import React, { Component } from "react";
import axios from "axios";

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      persons: null,
      count: 1,
    };
  }

  async componentDidMount() {
    const url = "https://fakestoreapi.com/products/" + this.state.count;
    const response = await axios.get(url);
    const data = await response.data;
    console.log(data);
    await this.setState({
      loading: false,
      persons: data,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 5) {
      this.setState({ count: 1 });
      return false;
    }
    return true;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.loading == false && this.state.count == prevState.count) {
      const url = "https://fakestoreapi.com/products/" + this.state.count;
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      await this.setState({
        loading: false,
        persons: data,
      });
    }
  }

  changeCount = () => {
    this.setState((prevState) => ({
      count: this.state.count + 1,
    }));
  };
  render() {
    return (
      <>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {this.state.persons == null ? (
              <h1>No Person Available</h1>
            ) : (
              /* <h1>
                {this.state.persons.map((person, index) => (
                  <div key={index}>
                    <h1>{person.id}</h1>
                    <h2>{person.title}</h2>
                    <h3>{person.price}</h3>
                    <h4>{person.description}</h4>
                    <img width="200px" height="100px" src={person.image}></img>
                  </div>
                ))}
              </h1> */

              <div>
                <h2>{this.state.persons.title}</h2>
                <h3>{this.state.persons.price}</h3>
              </div>
            )}

            <h1>Working on second line {this.state.count}</h1>
            <button onClick={this.changeCount}>Change Product</button>
          </div>
        )}
      </>
    );
  }
}

export default FetchData;
