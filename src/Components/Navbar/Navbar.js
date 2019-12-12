import * as React from "react";
import "./Navbar.css";
import WhyNotLead from "../WhyNotLead/WhyNotLead";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Logo from "../../svg/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar_wrapper">
        <div className="navbar_sections">
          <div className="logo_wrapper">
            <Link to="/">
              <img src={Logo} alt="logo image" className="logo_image" />
            </Link>
          </div>
          <div className="inner_navbar">
            <Link to="/whynot">
              <div>რატომ არა ტყვიას</div>
            </Link>
            <div>
              <a href="https://www.leadinspector.com/shop/?gclid=EAIaIQobChMI7MCck9ul5gIVScayCh1hoAauEAAYAiAAEgJmrfD_BwE&fbclid=IwAR23Ubxu7AtheLaN-ZHVL32OAR9x-_Ifw0C5_zV5l8-3_xqP2JQvXc45UAE">
                ტყვიის ტესტერები
              </a>
            </div>
            <div>დაამატე ლოკაცია</div>
            <Link to="/consists">
              <div className="active">ტყვიის შემცველობა</div>
            </Link>
            <div>
              <Link to="/about">About Us</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
