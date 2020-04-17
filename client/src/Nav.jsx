import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container border">
      <Navbar light expand="md">
        <div className="container">
          <Link className=" animated zoomIn navbar-brand" to="/">
            DeveloperKamrul
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <li className="nav-item animated zoomIn">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item animated zoomIn">
                <Link className="nav-link" to="/Components">
                  Components
                </Link>
              </li>
              <li className="nav-item animated zoomIn">
                <Link className="nav-link" to="/skills">
                  MySkills
                </Link>
              </li>
              <li className="nav-item animated zoomIn">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item animated zoomIn">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
