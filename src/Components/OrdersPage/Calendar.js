import React, { Component } from "react";
import Calendar from "react-calendar";
import "../App.css";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

class MyCalendar extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div>
        <Center>
          <Calendar onChange={this.onChange} value={this.state.date} />
        </Center>
      </div>
    );
  }
}

export default MyCalendar;

const Center = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
  background-color: #ffffff;
  padding: 10px;

  transform: translate(-50%, -50%);
`;
