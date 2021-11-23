import { useContext } from "react"
import { Link } from "react-router-dom"
import CaresouselItem from "../components/CaresouselItem"
import Styles from "../Home.module.css"
import AnimeContext from "../utils/AnimeContext"

function Home() {
  const { logout } = useContext(AnimeContext)
  const CarouselPic = [
    "https://i.pinimg.com/originals/32/24/82/32248220be54cadde6b138d37de11326.gif",
    "https://i.pinimg.com/originals/26/b5/61/26b561e1921ff2c117bd7add9cfe6627.gif",
    "https://i.pinimg.com/originals/20/7a/69/207a69aaba0c0a90ceaaccea8c30e75f.gif",
    "https://i.imgur.com/32XnNgK.gif",
    "https://64.media.tumblr.com/186cf788290a8adac66f71ca1a68ad10/tumblr_pi7ebzD7N81usyygio1_540.gif",
  ]
  return (
    <>
      <img
        className={Styles.img}
        src="https://i.pinimg.com/originals/c1/c9/ee/c1c9ee94ab4c00df8b09b87752f10168.gif"
        height="781px"
        width="1483px"
      />
      {/* <CaresouselItem CarouselPic={CarouselPic} /> */}
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
        <p>Stream on desktop and mobile. You can add notes in your profile. </p>
      </div>
    </>
  )
}

export default Home
