import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Developers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="float-right" id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
