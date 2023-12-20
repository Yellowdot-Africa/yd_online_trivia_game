import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Trophy from "../assets/Images/trophy.png";
import Settings from "../assets/Icons/settings.svg";
import HomeIcon from "../assets/Icons/home-icon.png";
import { Link, Outlet } from "react-router-dom";
import "../Styles/HomeNavBar.css";

const HomeNavBar = () => {
  return (
    <>
    <div id="navbar"/>
      <Navbar collapseOnSelect expand="lg" className="nav-bgg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src={Trophy} alt="logo" />
            YDTRIVIA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/user-stats">
                User Stats
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">
                LeaderBoard
              </Nav.Link>
              <Nav.Link as={Link} to="/rules-faqs">
                Rules & Faqs
              </Nav.Link>
            </Nav>
            <Nav className="custom-nav">
              <Nav.Link className="custom-navlink" as={Link} to="/account">
                Acct:N1,050.00{" "}
              </Nav.Link>
              <Nav.Link className="custom-navimg" as={Link} to="/home-icon">
                <img src={HomeIcon} alt="home" />{" "}
              </Nav.Link>
              <Nav.Link className="custom-navimg" as={Link} to="/settings">
                <img src={Settings} alt="setting" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  );
};

export default HomeNavBar;
