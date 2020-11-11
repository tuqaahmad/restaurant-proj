import React, { Component } from "react";
import Footer from "../Partials/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Orders extends Component {
  render() {
    const buttonStyle = {
      color: "#635142",
      position: "relative",
      top: "0px",
      textDecoration: "none",
    };
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
      <div class="Ordersbody">
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

        <BackGroundImg>
          <div class="textCenter">ORDERS AND RESERVATIONS</div>
        </BackGroundImg>
        <Container>
          <br />
          <p>
            To place an order or reservation, please call us or click on the
            following:
          </p>
          <br />
          <br />
          <br />
          <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape" height="60" width="320" />
            </svg>
            <div class="text">
              <Link to="/orders-or-reservation" style={buttonStyle}>
                Make an Order or Reservation
              </Link>
            </div>
          </div>
          <br /> <br />
          <div class="svg-wrapper2">
            <svg height="50" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape2" height="50" width="320" />
            </svg>
            <div class="text2">
              <a
                class="text2"
                href="https://www.astridygaston.com/wp-content/uploads/2020/11/AGDELIVERY.pdf"
              >
                Delivery Letter
              </a>
            </div>
          </div>
          <p>
            <p>
              <b>Hours of Operation</b>
            </p>
            Tuesday to Saturday from 12:00 m. at 8:00 pm <br /> <br />
            Sundays from 12m to 5:00 pm
          </p>
          <br />
          <p>
            <p>
              <b>Order taking hours</b>
            </p>
            Tuesday to Saturday from 9:00 am - 7:30 pm
            <br /> <br />
            Sundays from 9:00 am to 5:00 pm
          </p>
          <br />
          <p>
            <p>
              <b>Delivery hours</b>
            </p>
            Tuesday to Saturday from 12:00 m. at 8:00 pm
            <br /> <br />
            Sunday from 12 m. at 5:00 pm
          </p>
          <br />
          <p>
            <p>
              <b>Phone:</b>
            </p>
            +511 442-2777
          </p>
          <br />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Orders;

const BackGroundImg = styled.div`
  position: relative;
  width: 1850px;
  background-image: url("https://media.discordapp.net/attachments/751005345559609369/772814409960783873/1_1.jpg?width=1057&height=584");
  height: 55vh;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  min-height: 380px;
`;

const Container = styled.div`
  width: 1860px;
  padding: 10px;

  position: relative;
  text-align: center;
  top: 50%;
  font-size: 15px;
  font-family: "Merriweather", sans-serif;
`;
