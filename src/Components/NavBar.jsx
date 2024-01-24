import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Trophy from "../assets/Images/trophy.png";
import LoginModal from "../Components/LoginModal";
// import LoginCard from "../../"
import "../Styles/NavBar.css";

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  // const handleLoginClick = () => {
  //   setShowLoginModal(true);
  // };

  // const handleCloseLoginModal = () => {
  //   setShowLoginModal(false);
  // };
  const handleShowModal = () => {
    setShowLoginModal(true);
    document.body.classList.add("blur");
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    document.body.classList.remove("blur");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
        style={{ background: "var(--navbar-background-color)" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Trophy}
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            YDTRIVIA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Trivia" id="collapsible-nav-dropdown">
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
              <NavDropdown title="More Games" id="collapsible-nav-dropdown">
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
              <NavDropdown title="Leaders Board" id="collapsible-nav-dropdown">
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
            </Nav>
            <Nav>
              {/* <Nav.Link href="#login">Login</Nav.Link> */}

              <Link
                to={{
                  pathname: "/login-modal",
                  state: { showLoginModal: true },
                }}
                className="nav-link"
                onClick={handleShowModal}
              >
                Login
              </Link>

              <Link  to="/signup"className="nav-btn" >

                <Button
                  className="custom-btnnn"
                  style={{
                    borderRadius: "28.5px",
                    background: "#996BEF",
                    border: "none",
                    width: "108px",
                    height: "37px",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <LoginCard show={showLoginModal} handleClose={handleCloseLoginModal} /> */}
      {/* <LoginCard show={showLoginModal} onHide={handleCloseModal} /> */}
    </>
  );
};

export default NavBar;
