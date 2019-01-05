import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";

import logoImg from '../../static/images/hotelston.png';
import { BrowserRouter as Router } from 'react-router-dom';
import Leftbar from '../Leftbar';
import Routes from "../../Routes";
import "./MainContent.scss";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "green" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="white" expand="md" scrolling className="m-0 p-0">
            <div className="w-100 h-100 m-0 p-0 d-flex">
              <div className="logo-img d-flex align-items-center mr-2">
                <NavbarBrand href="/">
                  <img src={logoImg} alt="logo" height="40" />
                  {" "}
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse("mainNavbarCollapse")}
                />
              </div>
              <div className="d-flex justify-content-between flex-fill">
                <Collapse
                  id="mainNavbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                  className="h-100"
                >
                  <NavbarNav className="h-100 m-0 p-0">
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        exact
                        to="/"
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                      >
                        Dashboard
                      </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/hotels"
                      >
                        Hotels
                      </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/components"
                      >
                        Transfers
                    </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/advanced"
                      >
                        My Bookings
                    </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/"
                      >
                        My Company
                    </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/"
                      >
                        News
                    </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/"
                      >
                        Help
                    </NavLink>
                    </NavItem>
                    <NavItem className="navitem d-flex align-items-center">
                      <NavLink
                        onClick={this.closeCollapse("mainNavbarCollapse")}
                        to="/"
                      >
                        Contacts
                    </NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </div>
            </div>
          </Navbar >
          {this.state.collapseID && overlay}
          <main className="d-flex flex-row">
            <div className="leftbar-pane flex-shrink-1">
              <Leftbar />
            </div>
            <div className="main-pane w-100">
              <Routes />
            </div>
          </main >
        </div>
      </Router >
    );
  }
}

export default MainContent;
