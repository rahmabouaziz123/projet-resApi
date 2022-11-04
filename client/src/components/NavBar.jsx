import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg" className="sticky-nav">
        <Container>
          <Navbar.Brand href="#home">site web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav.Link href="#link">Home</Nav.Link>
              </Link>

              {/* <Nav.Link href="#home">Home</Nav.Link> */}

              {/* <Nav.Link href="#link">Contact</Nav.Link> */}

              <Link to="/Login">
                <Nav.Link href="#link">Login</Nav.Link>
              </Link>

              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Link to="/Contact">
                <Nav.Link href="#link">Contact</Nav.Link>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
