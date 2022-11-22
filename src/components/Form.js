import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      usernameError: false,
      course: "react",
      comment: "",
      commentError: false,
    };
  }
  userNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  courseChange = (event) => {
    this.setState({
      course: event.target.value,
    });
  };
  commentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  validate = () => {
    let error = true;
    //Username
    if (this.state.username == "") {
      error = false;
      this.setState({
        usernameError: "username is empty",
      });
    } else if (this.state.username.length < 10) {
      error = false;
      this.setState({
        usernameError: "username length is less then 10 digit",
      });
    } else {
      this.setState({
        usernameError: "",
      });
    }

    //Comment
    if (this.state.comment == "") {
      error = false;
      this.setState({
        commentError: "comment is empty",
      });
    } else {
      this.setState({
        commentError: "",
      });
    }

    return error;
  };

  handleSubmit = (event) => {
    if (this.validate()) {
      alert(
        `Username : ${this.state.username} && Course: ${this.state.course} && Comment: ${this.state.comment}`
      );
    }

    event.preventDefault();
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username : {this.state.username} </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.userNameChange}
            ></input>
            {this.state.usernameError && (
              <div className="error">{this.state.usernameError}</div>
            )}
          </div>

          <div>
            <label>Course : {this.state.course} </label>
            <select value={this.state.course} onChange={this.courseChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>

          <div>
            <label>Comment : {this.state.comment} </label>
            <textarea
              value={this.state.comment}
              onChange={this.commentChange}
            ></textarea>
            {this.state.commentError && (
              <div className="error">{this.state.commentError}</div>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
