import { Col } from "react-bootstrap"

function AnimeCard(props) {
  const { anime } = props

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={anime.image_url} />
        <Card.Body>
          <Card.Title>iiii</Card.Title>
          <Card.Text>9999</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AnimeCard
