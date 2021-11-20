import { useContext } from "react"
import { Card, Col, ListGroup, ListGroupItem, Button, Row } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function AnimeCard(props) {
  const { anime } = props
  const { like } = useContext(AnimeContext)

  return (
    <Card className="bg-dark align-items-center ms-5" style={{ width: 200 }}>
      <Card.Img variant="top" src={anime.image_url} height="180px" className="mb-3" />
      <Card.Body style={{ width: 100, height: 100 }} className="p-0">
        <Card.Text
          className="d-inline-block text-white text-left text-nowrap text-sm-left text-truncate"
          style={{ width: 150 }}
        >
          Name:{anime.title}
        </Card.Text>
        <div className="d-flex justify-content-center me-2 d-inline-block">
          <Card.Link href={anime.url} className="text-decoration-none text-secondary text-light">
            Watch
          </Card.Link>
          {localStorage.projectToken ? (
            <Button
              onClick={e => like(e, anime.mal_id)}
              style={{ width: 60 }}
              className="mb-5 ms-4 bg-dark border border-light"
            >
              like
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  )
}

export default AnimeCard
