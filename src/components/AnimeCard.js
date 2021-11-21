import { useContext } from "react"
import { Card, Button, Row } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../Anime.module.css"
import { Link } from "react-router-dom"

function AnimeCard(props) {
  const { anime } = props
  const { like } = useContext(AnimeContext)

  return (
    <>
      <Card className="bg-white  ms-5 mb-5" style={{ height: 350, width: 300 }}>
        <Link to={`/one-anime/${anime.mal_id}`}>
          <Card.Img variant="top" src={anime.image_url} height="180px" className="mt-3" />
        </Link>
        <Card.Body>
          <Card.Text className="d-inline-block text-dark text-nowrap text-sm-left text-truncate" style={{ width: 200 }}>
            Name: {anime.title}
          </Card.Text>

          <Card.Link href={anime.url} className="text-dark d-block " className={Styles.text}>
            Watch
          </Card.Link>
          {localStorage.projectToken ? (
            <button
              onClick={e => like(e, anime.mal_id)}
              style={{ width: 60 }}
              // className=" ms-5"
              // variant="warning"
              className={Styles.btnLike}
            >
              like
            </button>
          ) : null}
        </Card.Body>
      </Card>
    </>
  )
}

export default AnimeCard
