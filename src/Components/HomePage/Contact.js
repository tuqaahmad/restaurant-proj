import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="bgimgContact">
            <div class="ContactLeft">
              <h1> CONTACT </h1> <br />
              <Font class="fontt">
                Av. Paz Soldán 290, San Isidro, Lima 27 - Jordan <br /> <br />
                T. +511 442-2777
                <br /> <br />
                restaurant@SeaFoodie.com
              </Font>
            </div>

            <div class="map">
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                  lat: 31.9539,
                  lng: 35.9106,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyBSH8n-l6wATvApW_otHpiknCmczSj9zBQ`,
})(Contact);

const Font = styled.div`
  font-family: "Playfair Display", serif;
`;
