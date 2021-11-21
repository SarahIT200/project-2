import { useContext } from "react"
import { useParams } from "react-router"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../oneanime.module.css"

function OneAnime() {
  const { animeId } = useParams()

  const { animes } = useContext(AnimeContext)

  const oneAnime = animes.find(anime => anime.mal_id == animeId)

  if (!oneAnime) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className={Styles.container}>
        <img src={oneAnime.image_url} className={Styles.photo} />
        <p className={Styles.text}>{oneAnime.title}</p>
        {/* <button></button> */}
        <h3>
          <a href={oneAnime.url} className={Styles.btnlink}>
            watch
          </a>
        </h3>
      </div>
    </>
  )
}

export default OneAnime
