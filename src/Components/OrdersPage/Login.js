import React, { Component } from "react";
import "../App.css";
import Footer from "../Partials/Footer";
import styled from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import axios from "axios";

class Login extends Component {
  state = {
    email: "",
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
        `https://3a2fc74d7907.ngrok.io/login`,
        {
          email: this.state.email,
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
        window.location.href = "/";

        // 3. in the desired page: check data in LocalStorage
        // if (localStorage.getItem("user") != null) {

        // }

        alert("Logged in man");
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
              onClick={() => alert("Login with Facebook")}
            />
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
              onClick={() => alert("Login with Google")}
            />
            <br />
            <br />
            <h2 id="Line">
              <span id="spanLine"> OR </span>
            </h2>
            <CenterForm onSubmit={this.handleSubmit}>
              <LoginHeader> Login by Email: </LoginHeader>
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
                type="password"
                placeholder="Enter your Password..."
                onChange={(e) => {
                  this.handleChange(e, "password");
                }}
              />
              <br />
              <br />
              <br />
              <Button id="ResContainerButton"> Login</Button>
              <RegisterLink id="link2" href="/register">
                Don’t have an account? Register now!
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

export default Login;

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
  height: 600px;
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
  top: 10%;
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
  top: 20%;
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
  top: 20%;
  right: 105%;
  padding: 10px 10px;
  text-decoration: none;
  color: white;
  border-radius: 12px;
  width: 370px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
