import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  componentDidMount() {
    this.id = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;
