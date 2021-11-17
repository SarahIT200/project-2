import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function AnimeCard() {
  const { animes } = useContext(AnimeContext)
  return (
    <Container>
      <Row>
        {animes.map(anime => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </Row>
    </Container>
  )
}

export default AnimeCard
