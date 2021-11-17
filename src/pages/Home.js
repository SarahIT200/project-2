import { Link } from "react-router-dom"
import CaresouselItem from "../components/CaresouselItem"
import Styles from "../Home.module.css"

function Home() {
  const CarouselPic = [
    "https://giffiles.alphacoders.com/142/142612.gif",
    "https://giffiles.alphacoders.com/142/142412.gif",
    "https://giffiles.alphacoders.com/140/14018.gif",
    "https://i.imgur.com/32XnNgK.gif",
    "https://64.media.tumblr.com/186cf788290a8adac66f71ca1a68ad10/tumblr_pi7ebzD7N81usyygio1_540.gif",
  ]
  return (
    <>
      <CaresouselItem CarouselPic={CarouselPic} />
      <div className={Styles.btnContainer}>
        <Link to="/animes">
          <button className={Styles.btn1}>Anime</button>
        </Link>
        <Link to="/movies">
          <button className={Styles.btn2}>Movies</button>
        </Link>
      </div>
    </>
  )
}

export default Home
