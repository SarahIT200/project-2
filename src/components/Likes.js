import { useContext } from "react"
import { Card, CardGroup, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function Likes() {
  const { likes } = useContext(AnimeContext)
  return (
    <>
      {likes.map(like => (
        <Row xs={1} sm={2} md={3} className="g-4 my-5">
          <Col>
            <Card style={{ height: "35rem" }}>
              <Card.Img variant="top" src={like.image} height="400px" />
              <Card.Body>
                <Card.Title>Name:{like.title}</Card.Title>
              </Card.Body>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Card.Link href={like.url}> watch</Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default Likes
