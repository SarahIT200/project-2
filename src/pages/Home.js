import { useContext } from "react"
import { Link } from "react-router-dom"
import CaresouselItem from "../components/CaresouselItem"
import Styles from "../Home.module.css"
import AnimeContext from "../utils/AnimeContext"

function Home() {
  const { logout } = useContext(AnimeContext)
  const CarouselPic = [
    "https://giffiles.alphacoders.com/142/142612.gif",
    "https://giffiles.alphacoders.com/142/142412.gif",
    "https://i.pinimg.com/originals/20/7a/69/207a69aaba0c0a90ceaaccea8c30e75f.gif",
    "https://i.imgur.com/32XnNgK.gif",
    "https://64.media.tumblr.com/186cf788290a8adac66f71ca1a68ad10/tumblr_pi7ebzD7N81usyygio1_540.gif",
  ]
  return (
    <>
      <CaresouselItem CarouselPic={CarouselPic} />
      <div className={Styles.btnContainer} inhome={false}>
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
    </>
  )
}

export default Home
