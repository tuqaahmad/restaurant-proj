import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import ResContainer from "./ResContainer";
import Footer from "../Partials/Footer";

class ResOrder extends Component {
  render() {
    return (
      <div>
        <BackGroundImg />
        <ResContainer />
        <Footer />
      </div>
    );
  }
}

export default ResOrder;

const BackGroundImg = styled.div`
  position: relative;
  width: 1850px;
  background-image: url("https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
  height: 780px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  min-height: 380px;
`;
