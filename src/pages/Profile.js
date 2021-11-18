import { useContext } from "react"
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import EditProfile from "../components/EditProfile"
import Likes from "../components/Likes"
import AnimeContext from "../utils/AnimeContext"

function Profile() {
  const { profile, editProfile } = useContext(AnimeContext)

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
        </Row>
        <Col>
          <Likes />
        </Col>
      </Container>
    </>
  )
}

export default Profile
