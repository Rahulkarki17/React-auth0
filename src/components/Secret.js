import React, { Component } from "react";

export default class Secret extends Component {
  render() {
    return (
      <div>
        This is a super secret area. Jump back home <a href="/">Home</a>
        <br />
        <button onClick={this.props.auth.logout}>Logout</button>
      </div>
    );
  }
}
