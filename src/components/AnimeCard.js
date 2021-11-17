import { Card, Col } from "react-bootstrap"

function AnimeCard(props) {
  const { anime } = props

  return (
    <Col>
      <Card style={{ height: 550 }}>
        <Card.Img variant="top" src={anime.image_url} height="400px" />

        <Card.Body>
          <Card.Title>Name:{anime.title}</Card.Title>
          <Card.Text>
            Whatch:
            <a href={anime.url}>{anime.url}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AnimeCard
