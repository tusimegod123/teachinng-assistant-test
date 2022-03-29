import React from "react";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="nav-custom" expand="lg">
          <Container>
            <Navbar.Brand id="try" href="/">
              HolyCross Medical Center
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="/patients" id="try">
                  Patients
                </Nav.Link>
                <Nav.Link href="/elderlypatients" id="try">
                  Elderly Patients
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
