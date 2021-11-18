import { useContext } from "react"
import { Card, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function AnimeCard(props) {
  const { anime } = props
  const { like } = useContext(AnimeContext)

  return (
    <Col>
      <Card style={{ height: "35rem" }} className="bg-info">
        <Card.Img variant="top" src={anime.image_url} height="400px" />
        <Card.Body>
          <Card.Title>Name:{anime.title}</Card.Title>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush ">
            <ListGroupItem className="bg-info ">
              <Card.Link href={anime.url} className="text-decoration-none text-secondary">
                Watch
              </Card.Link>
              <Button onClick={e => like(e, anime.mal_id)} style={{ width: 80 }} className="ms-4">
                like
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AnimeCard
