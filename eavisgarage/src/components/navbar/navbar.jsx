import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from "../../assets/eavisDoorsLogo.png";
import "./navbarStyle.css";
import "../style.css";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className="navbar sticky-top" color="grey" dark expand="md">
        <MDBNavbarBrand>
          <img id="logo" src={logo} />
          {/* <strong className="black-text">Eavis Garage Doors</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Recent Work</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact Us</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
                <div className="md-form my-0 Oswald">
                  <h5 id="contactInfo"><strong><MDBIcon icon="phone" />  856-228-4849<br/>
                  <MDBIcon far icon="envelope" /><a id="email" href="mailto:info@eavisgaragedoors.com">  info@eavisgaragedoors.com</a></strong></h5>
                </div>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;