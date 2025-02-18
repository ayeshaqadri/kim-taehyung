import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 🔥 This is required for navbar toggle

function navbar() {
  return (
    <Navbar expand="lg" className="navbar-custom fadeIn"> 
      <Container>
        <Navbar.Brand href="#" style={{ color: "purple", fontWeight: "bold" }}>
          V's World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "purple", background: "white" }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Gallery</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;

