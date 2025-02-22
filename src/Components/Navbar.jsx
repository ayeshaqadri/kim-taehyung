import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../Images/logo.png";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom fadeIn">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "1px solid white" }} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Kim's Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
