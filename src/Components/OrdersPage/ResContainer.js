import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import MyCalendar from "./Calendar";
// import MyTime from "./Time";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import TimePicker from "react-time-picker";

import axios from "axios";

class ResContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_container: "",
      diners: 1,
      service: "",
      time: "10:00",
      date: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
    this.increaseValue = this.increaseValue.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
  }

  onChange = (date) => this.setState({ date });

  onChangeTime = (time) => this.setState({ time });

  changeContainer(current_container) {
    this.setState({
      current_container: current_container,
    });
  }

  changeService(service_name, current_container) {
    this.setState({
      current_container: current_container,
      service: service_name,
    });

    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  }

  increaseValue() {
    this.setState({ diners: parseInt(this.state.diners) + 1 });
  }

  decreaseValue() {
    this.setState({ diners: parseInt(this.state.diners) - 1 });
  }

  handleChange = (event, field) => {
    console.log(event.target.value);
    console.log(field);
    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (localStorage.getItem("user") != null) {
      axios
        .post(
          `https://3a2fc74d7907.ngrok.io/bookings`,
          {
            diners: this.state.diners,
            service: this.state.service,
            date: this.state.date,
            time: this.state.time,
            customer: JSON.stringify(localStorage.getItem("user")),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          // 1.save response in local storage
          localStorage.setItem("userBooking", res.data);
          alert("Booked in man");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = "/login";
    }
  };

  handleSubmitDel = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (localStorage.getItem("user") != null) {
      axios
        .post(
          `https://3a2fc74d7907.ngrok.io/delivery`,
          {
            date: this.state.date,
            time: this.state.time,
            customer: JSON.stringify(localStorage.getItem("user")),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          // 1.save response in local storage
          localStorage.setItem("userBooking", res.data);
          alert("Booked in man");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = "/login";
    }
  };

  render() {
    return (
      <div>
        <Containerbox>
          <br />
          <Link to="/login">
            <LoginIcon
              src="https://img.icons8.com/android/24/000000/login-rounded-right.png"
              alt="login icon"
            ></LoginIcon>
          </Link>
          <Header> S E A F O O D I E ❜ S</Header>

          {/* if */}
          {this.state.current_container === "" ? (
            <div>
              <Welcome> Welcome </Welcome>
              <br />
              <br />
              <Button
                onClick={() => {
                  this.changeContainer("book");
                }}
                id="ResContainerButton"
              >
                Book a Table
              </Button>
              <br /> <br />
              <Button
                onClick={() => {
                  this.changeContainer("delivery");
                }}
                id="ResContainerButton"
              >
                Delivery
              </Button>
              <CancelLink id="link2" href="/orders">
                Cancel
              </CancelLink>
            </div>
          ) : this.state.current_container === "book" ? (
            <div>
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Select the number of</CenteredP>
              <CenteredP>
                <b>diners</b>
              </CenteredP>
              <br />

              <form id="formbody">
                <div
                  class="value-button"
                  id="decrease"
                  value="Decrease Value"
                  onClick={this.decreaseValue}
                >
                  -
                </div>

                <input
                  type="number"
                  id="number"
                  value={this.state.diners}
                  onChange={(e) => {
                    this.handleChange(e, "diners");
                  }}
                />

                <div
                  class="value-button"
                  id="increase"
                  onClick={this.increaseValue}
                  value="Increase Value"
                >
                  +
                </div>
              </form>
              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("");
                }}
              >
                Back
              </Back>

              <Next
                id="link2"
                onClick={() => {
                  this.changeContainer("service");
                }}
              >
                Next
              </Next>
            </div>
          ) : this.state.current_container === "delivery" ? (
            // if its equal to delivery
            <div
              style={{
                height: "130%",
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Please select</CenteredP>
              <CenteredP>
                <b>date</b>
              </CenteredP>
              <br />

              {/* <MyCalendar /> */}

              <Center>
                <Calendar onChange={this.onChange} value={this.state.date} />
              </Center>

              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("");
                }}
              >
                Back
              </Back>

              <Next
                id="link2"
                onClick={() => {
                  this.changeContainer("deliveryTime");
                }}
              >
                Next
              </Next>
            </div>
          ) : this.state.current_container === "service" ? (
            //if its equal to service
            <div
              style={{
                height: "100%",
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Preference of</CenteredP>
              <CenteredP>
                <b>service</b>
              </CenteredP>
              <Button
                onClick={() => {
                  this.changeService("breakfast", "bookCalendar");
                }}
                id="ResContainerButton"
              >
                Breakfast
              </Button>
              <br />
              <br />
              <Button
                onClick={() => {
                  this.changeService("lunch", "bookCalendar");
                }}
                id="ResContainerButton"
              >
                Lunch
              </Button>
              <br />
              <br />
              <Button
                onClick={() => {
                  this.changeService("dinner", "bookCalendar");
                }}
                id="ResContainerButton"
              >
                Dinner
              </Button>
              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("book");
                }}
              >
                Back
              </Back>
            </div>
          ) : this.state.current_container === "bookCalendar" ? (
            //if its equal to calendar
            <div
              style={{
                height: "130%",
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Please select</CenteredP>
              <CenteredP>
                <b>date</b>
              </CenteredP>
              <br />

              <Center>
                <Calendar onChange={this.onChange} value={this.state.date} />
              </Center>

              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("service");
                }}
              >
                Back
              </Back>

              <Next
                id="link2"
                onClick={() => {
                  this.changeContainer("bookTime");
                }}
              >
                Next
              </Next>
            </div>
          ) : this.state.current_container === "bookTime" ? (
            //if its equal to time
            <div
              style={{
                height: "100%",
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Please select</CenteredP>
              <CenteredP>
                <b>Time</b>
              </CenteredP>
              <br />

              <Center2>
                <TimePicker
                  onChange={this.onChangeTime}
                  value={this.state.time}
                />
              </Center2>

              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("bookCalendar");
                }}
              >
                Back
              </Back>
              {/* <Link to="/login"> */}
              <Next id="link2" onClick={this.handleSubmit}>
                Next
              </Next>
              {/* </Link> */}
            </div>
          ) : this.state.current_container === "deliveryTime" ? (
            //if its equal to delivery time
            <div
              style={{
                height: "100%",
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "0px 0px 25px 25px",
              }}
            >
              <h2 id="Line">
                <span id="spanLine"></span>
              </h2>
              <br />
              <CenteredP> Please select</CenteredP>
              <CenteredP>
                <b>Time</b>
              </CenteredP>
              <br />
              {/* <MyTime /> */}

              <Center2>
                <TimePicker
                  onChange={this.onChangeTime}
                  value={this.state.time}
                />
              </Center2>

              <Back
                id="link2"
                onClick={() => {
                  this.changeContainer("delivery");
                }}
              >
                Back
              </Back>

              {/* <Link to="/login">
                <Next id="link2">Next</Next>
              </Link> */}

              <Next id="link2" onClick={this.handleSubmitDel}>
                Next
              </Next>
            </div>
          ) : null}
        </Containerbox>
      </div>
    );
  }
}

export default ResContainer;

const Containerbox = styled.form`
  position: absolute;
  bottom: 40%;
  left: 50%;
  font-size: 15px;
  font-family: "Roboto Mono", monospace;
  background-color: #ffffff;
  opacity: 0.8;
  width: 80vh;
  height: 40vh;
  text-align: left;
  border-radius: 0px 0px 25px 25px;
  transform: translate(-50%, -50%);
`;

const LoginIcon = styled.img`
  position: relative;
  padding-left: 700px;
`;

const Header = styled.h2`
  font-family: "Merriweather", serif;
  text-align: center;
  font-size: 25px;
`;

const Welcome = styled.p`
  font-family: "Merriweather", sans-serif;
  text-align: center;
  font-size: 23px;
`;

const Button = styled.button`
  font-family: "Merriweather", sans-serif;
  font-size: 17px;
  margin: 0;
  position: relative;
  top: 10%;
  left: 50%;
  padding: 15px 32px;
  text-decoration: none;
  cursor: pointer;
  background-color: #635142;
  color: white;
  border-radius: 12px;
  width: 250px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CenteredP = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 20px;
  margin: 0;
  position: relative;
  top: 2%;
  left: 50%;
  text-decoration: none;
  color: black;
  width: 370px;
  text-align: center;

  transform: translate(-50%, -50%);
`;

const Back = styled.a`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: absolute;
  cursor: pointer;
  top: 88%;
  right: 50%;
  padding: 10px 10px;
  text-decoration: none;
  color: #45382e;
  border-radius: 12px;
  width: 370px;
`;

const Next = styled.a`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: absolute;
  cursor: pointer;
  top: 88%;
  left: 700px;
  padding: 10px 10px;
  text-decoration: none;
  color: #45382e;
  border-radius: 12px;
  width: 370px;
`;

const CancelLink = styled.a`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: absolute;
  cursor: pointer;
  top: 90%;
  right: 50%;
  padding: 10px 10px;
  text-decoration: none;
  color: #45382e;
  border-radius: 12px;
  width: 370px;
`;

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

const Center2 = styled.div`
  position: absolute;
  top: 33%;
  left: 50%;
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
  background-color: #ffffff;
  padding: 10px;

  transform: translate(-50%, -50%);
`;
