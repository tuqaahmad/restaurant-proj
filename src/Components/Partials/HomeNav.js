import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../App.css";

class Start extends Component {
  render() {
    return (
      <div>
        <h2 class="logoCenter"> S E A F O O D I E ❜ S</h2>
        <div class="text-block">
          <a id="link" href="#start">
            Start
          </a>
          <a id="link" href="#Kitchen">
            The Kitchen
          </a>
          <a id="link" href="#Team">
            The Team
          </a>

          <Link id="linkStyle1" to="/orders">
            Orders and Reservations
          </Link>

          <a id="link" href="#Contact">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Start;
