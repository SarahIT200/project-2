import { useContext } from "react"
import { Link } from "react-router-dom"

import Styles from "../style/Home.module.css"
import AnimeContext from "../utils/AnimeContext"
function Home() {
  const { logout } = useContext(AnimeContext)

  return (
    <>
      <img
        className={Styles.img}
        src="https://i.pinimg.com/originals/c1/c9/ee/c1c9ee94ab4c00df8b09b87752f10168.gif"
        height="781px"
        width="1483px"
      />

      <div className={Styles.btnContainer}>
        {!localStorage.projectToken ? (
          <>
            <Link to="/login">
              <button className={Styles.btn1}>login</button>
            </Link>
            <Link to="/signup">
              <button className={Styles.btn2}>signup</button>
            </Link>
          </>
        ) : (
          <>
            <Link eventKey={2} to="/" className="nav-link" onClick={logout}>
              <button className={Styles.btn2} className={Styles.btn1}>
                logout
              </button>
            </Link>
            <Link to="/profile">
              <button className={Styles.btn2}>Profile</button>
            </Link>
          </>
        )}
        <Link to="/animes">
          <button className={Styles.btn3}>Anime</button>
        </Link>
      </div>
      <div className={Styles.text}>
        <h4>Watch anytime, anywhere</h4>
        <p>
          <i>Stream on desktop and mobile. You can add notes in your profile..</i>{" "}
        </p>
      </div>
    </>
  )
}
export default Home
