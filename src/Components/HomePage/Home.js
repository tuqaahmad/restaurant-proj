import React, { Component } from "react";
import styled from "styled-components";
import $ from "jquery";

import "../../Components/App.css";

import Start from "./Start";
import Kitchen from "./Kitchen";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "../Partials/Footer";
import HomeNav from "../Partials/HomeNav";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://cdn.discordapp.com/attachments/751005345559609369/770621660764176404/photo-1519708227418-c8fd9a32b7a2.jpeg",
        "https://images.unsplash.com/photo-1592773805531-cb2b948e9838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1551463682-189bf47449d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1286&q=80",
        "https://images.unsplash.com/photo-1515037609796-8a12ca603d7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80",
        "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      ],
      currnet_image:
        "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      current_index: 0,
      is_nav: false,
    };
    this.playImages();
  }

  playImages() {
    setInterval(() => {
      let length = this.state.images.length;

      this.setState({
        currnet_image: this.state.images[this.state.current_index],
        current_index:
          this.state.current_index === length - 1
            ? 0
            : this.state.current_index + 1,
      });
      // console.log(this.state.currnet_image);
    }, 2500);
  }

  componentDidMount() {
    // Page Scroll
    $(document).ready(function ($) {
      $("a[href*=#]:not([href=#])").click(function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") ||
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 32,
              },
              1000
            );
            return false;
          }
        }
      });
    });

    // Fixed Nav
    $(document).ready(function ($) {
      $(window).scroll(function () {
        var scrollTop = 142;
        if ($(window).scrollTop() >= scrollTop) {
          $("nav").css({
            position: "fixed",
            top: "0",
          });
        }
        if ($(window).scrollTop() < scrollTop) {
          $("nav").removeAttr("style");
        }
      });
    });

    window.addEventListener(
      "scroll",
      function () {
        // var st = window.pageYOffset || document.documentElement.scrollTop;
        // console.log(window.pageYOffset);
        if (parseInt(window.pageYOffset) > 950) {
          window.is_nav = true;
        } else {
          window.is_nav = false;
        }
      },
      false
    );
  }

  render() {
    const BackGround = styled.div`
      margin: 0;
      left: 0px;
      top: 0px;
      position: relative;
      width: 1850px;
      max-height: none;
      background-image: url(${this.state.currnet_image});
      height: 949px;
      background-repeat: no-repeat;
      background-size: 1850px 1000px;
      overflow: hidden !important;
      opacity: 0.9;
    `;

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
      <div>
        <div>
          <BackGround>
            <HomeNav />
          </BackGround>
        </div>
        {window.is_nav ? (
          <div>
            <nav>
              <ul>
                <a href="/" style={LogoLinkStyle}>
                  <b>SeaFoodie's</b>
                </a>
                <li>|</li>
                <a id="link" href="#start" style={LinkStyle}>
                  Start
                </a>
                <a id="link" href="#Kitchen" style={LinkStyle2}>
                  The Kitchen
                </a>
                <a id="link" href="#Team" style={LinkStyle2}>
                  The Team
                </a>
                <a id="link" href="#Contact" style={LinkStyle2}>
                  Contact
                </a>
              </ul>
            </nav>
          </div>
        ) : null}

        <section id="start">
          <Start />
        </section>

        <section id="Kitchen">
          <Kitchen />
        </section>

        <section id="Team">
          <Team />
        </section>

        <section id="Contact">
          <Contact />
        </section>

        <Footer />
      </div>
    );
  }
}

export default Home;
