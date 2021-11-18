import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          anime world
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Link eventKey={2} to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
