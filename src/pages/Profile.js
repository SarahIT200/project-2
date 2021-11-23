import { useContext, useEffect, useState } from "react"
import { Card, Col, Container, Image, Row, Button, ButtonGroup, Alert } from "react-bootstrap"
import AnimeCard from "../components/AnimeCard"
import EditProfile from "../components/EditProfile"
import Likes from "../components/Likes"
import Note from "../components/Note"
import AnimeContext from "../utils/AnimeContext"
import Styles from "../Profile.module.css"

function Profile() {
  //modal
  const { profile, likes, notes, deleteNote } = useContext(AnimeContext)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  if (!profile) {
    return <h1>Loading...</h1>
  }
  const mylikes = likes.filter(like => like._user._id === profile._id)
  return (
    <>
      <Container>
        <Row>
          <h1 className="m-5 text-dark">Profile:</h1>
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
              {/* <h1 className=" text-dark">Note:</h1> */}
              <Note show={show} handleClose={handleClose} handleShow={handleShow} />
              <Row>
                <>
                  {notes.map((note, index) => (
                    <>
                      <Col>
                        <div className={Styles.note}>
                          <h3 className={Styles.text}>title: {note.title}</h3>
                          <h5 className={Styles.text}>eposide: {note.episode}</h5>
                          <button className={Styles.button} onClick={() => deleteNote(index)}>
                            delete
                          </button>
                        </div>
                      </Col>
                    </>
                  ))}
                </>
              </Row>
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
