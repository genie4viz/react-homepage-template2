import React, { Component } from "react";
import {
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
import "./MainContent.css";

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
            <Navbar color="white" expand="md" scrolling className="navbar">
              <NavbarBrand className="mr-5" href="/">
                <img src={logoImg} alt="logo" height="40" />
                {" "}
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggleCollapse("mainNavbarCollapse")}
              />
              <Collapse
                className="ml-5"
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <NavbarNav center="true">
                  <NavItem>
                    <NavLink
                      exact
                      to="/"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/hotels"
                    >
                      Hotels
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/components"
                    >
                      Transfers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/advanced"
                    >
                      My Bookings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/"
                    >
                      My Company
                    </NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
              <Collapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <NavbarNav right>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/"
                    >
                      News
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/"
                    >
                      Help
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      to="/"
                    >
                      Contacts
                    </NavLink>
                  </NavItem>                
                </NavbarNav>
              </Collapse>
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
