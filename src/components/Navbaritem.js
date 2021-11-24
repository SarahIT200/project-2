import { useContext } from "react"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../style/navbar.module.css"
import OneAnime from "../pages/OneAnime"
function NavbarItem(props) {
  const { logout } = useContext(AnimeContext)
  const { inAnime } = props
  return (
    <navbar className={Styles.navbar}>
      {/* go back button */}
      {inAnime === true ? (
        <>
          <Link to="/animes" className={Styles.new}>
            Go Back
          </Link>
        </>
      ) : (
        <>
          <Link to="/" className="navbar-brand mt-3">
            <Image
              src="https://i.pinimg.com/564x/bf/ca/2c/bfca2c24bee2349809f7372c709d98d7.jpg"
              height="70px"
              className="me-2"
            />
            <span className={Styles.span}>ANIMAE</span>
          </Link>
          <ul>
            {localStorage.projectToken ? (
              <>
                <li className={Styles.li}>
                  <Link to="/profile">Profile</Link>
                </li>
                <li className={Styles.li}>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className={Styles.li}>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className={Styles.li}>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </navbar>
  )
}
export default NavbarItem
