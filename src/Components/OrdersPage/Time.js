import React, { Component } from "react";
import "../App.css";
import TimePicker from "react-time-picker";
import styled from "styled-components";

class MyTime extends Component {
  state = {
    time: "10:00",
  };

  onChange = (time) => this.setState({ time });

  render() {
    return (
      <div>
        <Center>
          <TimePicker onChange={this.onChange} value={this.state.time} />
        </Center>
      </div>
    );
  }
}

export default MyTime;

const Center = styled.div`
  position: absolute;
  top: 33%;
  left: 50%;
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
  background-color: #ffffff;
  padding: 10px;

  transform: translate(-50%, -50%);
`;
