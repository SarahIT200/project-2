import { useContext } from "react"
import { Card, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function AnimeCard(props) {
  const { anime } = props
  const { like } = useContext(AnimeContext)

  return (
    <Col>
      <Card style={{ height: "35rem" }}>
        <Card.Img variant="top" src={anime.image_url} height="400px" />
        <Card.Body>
          <Card.Title>Name:{anime.title}</Card.Title>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Card.Link href={anime.url}> watch</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Button onClick={e => like(e, anime.mal_id)}>like</Button>
      </Card>
    </Col>
  )
}

export default AnimeCard
