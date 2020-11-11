import React, { Component } from "react";
import "../../Components/App.css";

import { SocialMediaIconsReact } from "social-media-icons-react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="footer">
            <br />
            <br />
            <h2> SeaFoodie's</h2>
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p style={{ fontSize: "15px" }}>
                Tuesday to Saturday from 12:00 m. to 8:00 pm Sundays from 12m to
                5:00 pm Order taking hours: Tuesday to Saturday from 9:00 am to
                7:30 pm <br />
                Sundays from 9:00 am to 5:00 pm Delivery hours: Tuesday to
                Saturday from 12:00 m. at 8:00 pm Sunday from 12 m. at 5:00 pm
              </p>
              <br />
              <div>
                {/* facebook */}
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="5"
                  borderStyle="solid"
                  icon="facebook"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(0,0,0,1)"
                  iconSize="5"
                  roundness="20%"
                  url="https://www.facebook.com/"
                  size="30"
                />
                &emsp;&emsp;
                {/* twitter */}
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="5"
                  borderStyle="solid"
                  icon="twitter"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(0,0,0,1)"
                  iconSize="5"
                  roundness="20%"
                  url="https://twitter.com/"
                  size="30"
                />
                &emsp;&emsp;
                {/* instagram */}
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="5"
                  borderStyle="solid"
                  icon="instagram"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(0,0,0,1)"
                  iconSize="5"
                  roundness="20%"
                  url="https://www.instagram.com/"
                  size="30"
                />
                &emsp; &emsp;
                {/* pinterest */}
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="5"
                  borderStyle="solid"
                  icon="pinterest"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(0,0,0,1)"
                  iconSize="5"
                  roundness="20%"
                  url="https://www.pinterest.com/"
                  size="30"
                />
              </div>
              <p>
                Av. Paz Soldán 290, San Isidro, Lima 27 - Jordan &emsp;
                &emsp;&emsp; T. +511 442-2777 &emsp; &emsp;&emsp;
                restaurant@SeaFoodie.com
              </p>
              <br />
              <p>Powered by iForce Technologies</p>
              <p class="h6">copyright © SeaFoodie's </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
