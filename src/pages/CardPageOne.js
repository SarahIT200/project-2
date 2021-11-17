import { Card, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function CardPageOne() {
  return (
    <>
      <div className="mt-5 ms-5">
        <Image src="https://i.pinimg.com/originals/d8/7c/19/d87c191f61ef08e17cdff947462abe3d.gif" width="600" />
      </div>
      <Container style={{ width: 300 }}>
        <Row className="d-flex align-items-center">
          <Col>
            <Link to="/movies">
              <Card style={{ height: 100 }}>
                <Card.Img
                  src="https://i.pinimg.com/236x/49/3e/2c/493e2c1109f2e72f745eb7880d75e7fe.jpg"
                  alt="Card image"
                />

                <Card.ImgOverlay>
                  <Card.Title className="text-white mt-4">Movies</Card.Title>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/anime">
              <Card style={{ height: 100 }}>
                <Card.Img
                  src="https://i.pinimg.com/236x/f2/c5/de/f2c5de41e0b37777543bcf56f80ec453.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="text-white mt-4">Anime</Card.Title>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CardPageOne
