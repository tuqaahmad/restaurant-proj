import React, { Component } from "react";
import "../../Components/App.css";
import Footer from "../Partials/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class Customers extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/customers`).then((res) => {
      // console.log(res.data);
      const customers = res.data;
      this.setState({ customers });
    });
  }
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
      paddingLeft: "15px",
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
      <div className="App">
        <nav>
          <ul>
            <a href="/" style={LogoLinkStyle}>
              <b>SeaFoodie's</b>
            </a>
            <li>|</li>
            <Link to="/" style={LinkStyle}>
              Home
            </Link>

            <Link to="/AllBookings" exact style={LinkStyle2}>
              Bookings
            </Link>

            <Link to="/AllCustomers" exact style={LinkStyle2}>
              Customers
            </Link>

            <Link to="/#Contact" exact style={LinkStyle2}>
              Contact
            </Link>
          </ul>
        </nav>
        <br />
        <br />
        <br />
        <FontDiv>
          <h3> View All Customers: </h3>

          <table id="BookingsTable">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Number</th>
            </tr>

            {this.state.customers.map((customers) => {
              return (
                <tr>
                  <td>{customers._id}</td>
                  <td>{customers.email}</td>
                  <td>{customers.number}</td>
                </tr>
              );
            })}
          </table>
        </FontDiv>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Customers;

const FontDiv = styled.div`
  font-family: "Playfair Display", serif;
  margin-left: 15px;
`;
