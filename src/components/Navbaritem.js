import { useContext } from "react"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../navbar.module.css"

function NavbarItem() {
  const { logout } = useContext(AnimeContext)
  return (
    <navbar className={Styles.navbar}>
      <>
        <Link to="/" className="navbar-brand text-white mt-3">
          {/* <Image
            src="https://i.pinimg.com/564x/bf/ca/2c/bfca2c24bee2349809f7372c709d98d7.jpg"
            height="70px"
            className="me-2"
          /> */}
          <span>ANIMAE</span>
        </Link>
      </>
      <ul>
        {localStorage.projectToken ? (
          <>
            <li>
              <Link to="/profile" className="nav-link text-white">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" onClick={logout} className="nav-link text-white">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-link text-white">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link text-white">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </navbar>
  )
}

export default NavbarItem
