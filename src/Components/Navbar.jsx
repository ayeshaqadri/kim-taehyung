import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for navbar toggle
import logo from '../Images/kim-logo-2-removebg-preview.png'; // Ensure the correct file extension

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom fadeIn">
      <Container>
        <Navbar.Brand href="#">
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: "200px", width: "200px" }} // Adjust size as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "purple", background: "white" }} />
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
