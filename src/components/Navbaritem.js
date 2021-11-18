import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import AnimeContext from "../utils/AnimeContext"

function NavbarItem() {
  const { logout } = useContext(AnimeContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          anime world
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
