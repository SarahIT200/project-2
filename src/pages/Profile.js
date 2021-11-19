import { useContext } from "react"
import { Card, Col, Container, Image, Row, Button, ButtonGroup, Alert } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import EditProfile from "../components/EditProfile"
import Likes from "../components/Likes"
import Note from "../components/Note"
import AnimeContext from "../utils/AnimeContext"

function Profile() {
  const { profile, notes } = useContext(AnimeContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1 className="m-3 text-white">Profile</h1>
      <Container>
        <Row>
          <Col>
            <Card style={{ height: 200, width: 600 }} className="bg-secondary">
              <Row>
                <Col xs={6} md={4}>
                  <Image src={profile.photo} height="150px" width="150px" className="m-3" roundedCircle />
                </Col>
                <Col>
                  <Card.Title className="mt-5">
                    {profile.firstName} {profile.lastName}
                  </Card.Title>
                  <Card.Text className="text-white">{profile.email} </Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="ms-5">
            <h1>Note:</h1>
            <Note />
            <ul>
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>{notes}</p>
              </Alert>
              {/* {
                (notes.map = note => (
                  <li>
                    {note}
                    <Button>Edit</Button>
                  </li>
                ))
              } */}
            </ul>
          </Col>
        </Row>
        <Col>
          <Likes />
        </Col>
      </Container>
    </>
  )
}

export default Profile
