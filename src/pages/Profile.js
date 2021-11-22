import { useContext } from "react"
import { Card, Col, Container, Image, Row, Button, ButtonGroup, Alert } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import EditProfile from "../components/EditProfile"
import Likes from "../components/Likes"
import Note from "../components/Note"
import AnimeContext from "../utils/AnimeContext"

function Profile() {
  const { profile, likes, notes } = useContext(AnimeContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }

  const mylikes = likes.filter(like => like._user._id === profile._id)
  return (
    <>
      <h1 className="m-5 text-dark">Profile:</h1>
      <Container>
        <Row>
          <Col>
            <Card style={{ height: 200, width: 600 }} className="bg-dark">
              <Row>
                <Col xs={6} md={4}>
                  <Image src={profile.photo} height="150px" width="150px" className="m-3" roundedCircle />
                </Col>
                <Col>
                  <Card.Title className="mt-5 text-light">
                    {profile.firstName} {profile.lastName}
                  </Card.Title>
                  <Card.Text className="text-light">{profile.email} </Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
          {
            <Col className="ms-5">
              <h1>Note:</h1>
              <Note />
              {/* <ul>
                <Alert variant="success">
                  <Alert.Heading>Hey, nice to see you</Alert.Heading>

                  {notes.map(note => (
                    <li>
                      {note}
                      <Button>Edit</Button>
                    </li>
                  ))}
                </Alert>
              </ul> */}
            </Col>
          }
        </Row>

        <h3 className="text-dark mt-5">My Favorite:</h3>
        <Row className="m-5" xs={1} sm={2} md={4}>
          {mylikes.map(like => (
            <Likes like={like} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Profile
