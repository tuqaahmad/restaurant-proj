import React, { Component } from "react";
import "../../Components/App.css";
import Footer from "../Partials/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class Bookings extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get(`https://3a2fc74d7907.ngrok.io/bookings`).then((res) => {
      // console.log(res.data);
      const books = res.data;
      this.setState({ books });
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
          <h3> View All Bookings: </h3>

          <table id="BookingsTable">
            <tr>
              <th>ID</th>
              <th>Diners</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
            </tr>

            {this.state.books.map((books) => {
              return (
                <tr>
                  <td>{books._id}</td>
                  <td>{books.diners}</td>
                  <td>{books.service}</td>
                  <td>{books.date}</td>
                  <td>{books.time}</td>
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

export default Bookings;

const FontDiv = styled.div`
  font-family: "Playfair Display", serif;
  margin-left: 15px;
`;
