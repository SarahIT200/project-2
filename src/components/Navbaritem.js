import { useContext } from "react"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import AnimeContext from "../utils/AnimeContext"

function NavbarItem() {
  const { logout } = useContext(AnimeContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image
            src="https://i.pinimg.com/564x/bf/ca/2c/bfca2c24bee2349809f7372c709d98d7.jpg"
            height="70px"
            className="me-2"
          />
          ANIMAE
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {localStorage.projectToken ? (
              <>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link eventKey={2} to="/" className="nav-link" onClick={logout}>
                  logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
                <Link eventKey={2} to="/login" className="nav-link">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
