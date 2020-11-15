import React, { Component } from "react";
import "../App.css";
import Footer from "../Partials/Footer";
import styled from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import axios from "axios";

class Register extends Component {
  state = {
    email: "",
    number: "",
    password: "",
  };

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://3a2fc74d7907.ngrok.io/signup`,
        {
          email: this.state.email,
          number: this.state.number,
          password: this.state.password,
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
        localStorage.setItem("user", res.data);

        // 2.redirect to the desired page
        window.location.href = "/login";

        // 3. in the desired page: check data in LocalStorage
        // if (localStorage.getItem("user") != null) {

        // }

        // alert("Logged in man");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const LinkStyle = {
      color: "#585858	",
      position: "relative",
      top: "0px",
      left: "0px",
      textDecoration: "none",
      display: "inline",
      paddingLeft: "20px",
      fontSize: "17px",
    };

    const LinkStyle2 = {
      color: "#585858	",
      position: "relative",
      top: "0px",
      left: "0px",
      textDecoration: "none",
      display: "inline",
      paddingLeft: "0px",
      fontSize: "17px",
    };

    const LogoLinkStyle = {
      color: "black",
      position: "relative",
      top: "0px",
      left: "0px",
      textDecoration: "none",
      paddingLeft: "0px",

      display: "inline",
      fontFamily: `"Playfair Display", serif`,
      fontSize: "18px",
    };

    return (
      <div class="Ordersbody">
        <div>
          <nav>
            <ul>
              <a href="/" style={LogoLinkStyle}>
                <b>SeaFoodie's</b>
              </a>
              <li>|</li>
              <a id="link" href="/" style={LinkStyle}>
                Start
              </a>
              <a id="link" href="/" style={LinkStyle2}>
                The Kitchen
              </a>
              <a id="link" href="/" style={LinkStyle2}>
                The Team
              </a>
              <a id="link" href="/" style={LinkStyle2}>
                Contact
              </a>
            </ul>
          </nav>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Containerbox>
            <br /> <br />
            <FacebookLoginButton
              style={{
                width: "250px",
                position: "relative",
                alignItems: "center",
                cursor: "pointer",
                margin: "0",
                top: "5%",
                left: "50%",
                transform: " translate(-50%, -50%)",
              }}
              onClick={() => alert("Sign up with Facebook")}
            >
              <span>Sign up with Facebook</span>
            </FacebookLoginButton>
            <br />
            <GoogleLoginButton
              style={{
                width: "250px",
                position: "relative",
                alignItems: "center",
                cursor: "pointer",
                margin: "0",
                top: "5%",
                left: "50%",
                transform: " translate(-50%, -50%)",
              }}
              onClick={() => alert("Sign up with Google")}
            >
              <span>Sign up with Google</span>
            </GoogleLoginButton>
            <br />
            <br />
            <h2 id="Line">
              <span id="spanLine"> OR </span>
            </h2>
            <CenterForm onSubmit={this.handleSubmit}>
              <LoginHeader> Register by Email: </LoginHeader>
              <br />
              <br />
              <InputField
                type="email"
                placeholder="Enter your Email..."
                onChange={(e) => {
                  this.handleChange(e, "email");
                }}
              />
              <br />
              <br />
              <br />
              <InputField
                type="tel"
                placeholder="Enter your number..."
                onChange={(e) => {
                  this.handleChange(e, "number");
                }}
              />
              <br />
              <br />
              <br />
              <InputField
                type="password"
                placeholder="Enter your Password..."
                onChange={(e) => {
                  this.handleChange(e, "password");
                }}
              />
              <br />
              <br />
              <br />
              <CheckBoxInput
                type="checkbox"
                placeholder="Enter your Password..."
              />
              <br />
              <br />
              <CheckBoxP>
                <i>
                  I agree that the restaurant may send me occasional
                  <br /> <br />
                  information about special events or celebrations.
                </i>
              </CheckBoxP>
              <br />
              <br />
              <br />
              <Button id="ResContainerButton"> Register</Button>
              <RegisterLink id="link2" href="/login">
                Already have an account? Login now!
              </RegisterLink>
              <CancelLink id="link2" href="/orders-or-reservation">
                Cancel
              </CancelLink>
            </CenterForm>
          </Containerbox>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}

export default Register;

const Containerbox = styled.div`
  position: relative;
  left: 30%;
  right: 50%;
  align-items: center;
  font-size: 15px;
  font-family: "Roboto Mono", monospace;
  background-color: #9a8262;
  opacity: 0.8;
  color: white;
  width: 80vh;
  height: 720px;
  border-radius: 25px 25px 25px 25px;
`;

const CenterForm = styled.form`
  position: relative;
  left: 40%;
  right: 50%;
  align-items: center;
  font-size: 15px;
  font-family: "Merriweather", serif;
  color: white;
  width: 80vh;
  height: 600px;
  border-radius: 25px 25px 25px 25px;
`;

const LoginHeader = styled.p`
  position: absolute;
  left: 0%;
  right: 50%;
  align-items: center;
  font-size: 19px;
  font-family: "Merriweather", serif;
  color: white;
`;

const Button = styled.button`
  font-family: "Merriweather", sans-serif;
  font-size: 17px;
  margin: 0;
  position: relative;
  top: 1%;
  left: 10%;
  padding: 15px 10px;
  text-decoration: none;
  cursor: pointer;
  background-color: #635142;
  color: white;
  border-radius: 12px;
  width: 250px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const InputField = styled.input`
  font-family: "Merriweather", sans-serif;
  font-size: 14px;
  margin: 0;
  position: relative;
  top: 10%;
  left: 10%;
  padding: 13px 13px;
  text-decoration: none;
  background-color: whitesmoke;
  color: black;
  border-radius: 12px;
  width: 370px;

  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const RegisterLink = styled.a`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: relative;
  top: 10%;
  left: -10%;
  padding: 10px 10px;
  text-decoration: none;
  color: white;
  border-radius: 12px;
  width: 370px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CancelLink = styled.a`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: relative;
  top: 10%;
  right: 105%;
  padding: 10px 10px;
  text-decoration: none;
  color: white;
  border-radius: 12px;
  width: 370px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CheckBoxInput = styled.input`
  font-family: "Merriweather", sans-serif;
  font-size: 14px;
  margin: 0;
  position: relative;
  top: 5%;
  left: -12%;
  padding: 13px 13px;
  text-decoration: none;
  background-color: whitesmoke;
  color: black;
  border-radius: 12px;
  width: 370px;

  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CheckBoxP = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 13px;
  margin: 0;
  position: relative;
  top: 2%;
  left: 14%;
  text-decoration: none;
  color: whitesmoke;
  width: 370px;

  transform: translate(-50%, -50%);
`;
