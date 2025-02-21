import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for navbar toggle
import logo from "../Images/logo.png"; // Ensure correct file extension

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom fadeIn">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "1px solid white" }}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Kim's Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
