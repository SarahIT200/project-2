import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function Likes(props) {
  const { likes, deleteLike } = useContext(AnimeContext)
  const { like } = props
  return (
    <>
      <Container>
        {/* {likes.map(like => ( */}
        <Col className="m-3">
          <Card style={{ width: 200 }}>
            <Card.Img variant="top" src={like.image} height="150px" />
            <Card.Body>
              <Card.Title>Name:{like.title}</Card.Title>
              <Card.Link href={like.url} className="text-decoration-none text-secondary me-5">
                Watch
              </Card.Link>
              <Button onClick={() => deleteLike(like._id)} key={like._id} variant="dark">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ))} */}
      </Container>
    </>
  )
}

export default Likes
