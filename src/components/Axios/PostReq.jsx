import React, { Component } from "react";
import axios from "axios";

class PostReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "morpheus",
      job: "leader",
    };
  }

  sendReqUsingAxios() {
    const url = "https://reqres.in/api/users";
    axios
      .post(url, this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendReqUsingFetch() {
    const url = "https://reqres.in/api/users";
    fetch(url, {
      method: "POst",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.sendReqUsingAxios()}>
          Send Request From Axio
        </button>

        <button onClick={() => this.sendReqUsingFetch()}>
          Send Request From Fetch
        </button>
      </div>
    );
  }
}

export default PostReq;
