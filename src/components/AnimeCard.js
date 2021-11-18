import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap"

function AnimeCard(props) {
  const { anime } = props

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
      </Card>
    </Col>
  )
}

export default AnimeCard
