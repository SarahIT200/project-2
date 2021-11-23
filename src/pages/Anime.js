import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import AnimeContext from "../utils/AnimeContext"

function Anime() {
  const { animes } = useContext(AnimeContext)
  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="my-5 mx-auto">
        {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </Row>
    </Container>
  )
}

export default Anime
