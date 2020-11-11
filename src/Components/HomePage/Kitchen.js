import React, { Component } from "react";
import "../App.css";

class Kitchen extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="bgimgKitchen">.</div>
          <img
            class="kitchenleftimg"
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
            alt="Kitchen chef"
          />

          <div class="right">
            <h1> THE KITCHEN</h1>
            The best thing about distance is the reunion. <br />
            The forms change, but the spirit remains: we are still in love with
            Peruvian cuisine. Today, more than ever, we want to share that
            feeling with you.
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchen;
