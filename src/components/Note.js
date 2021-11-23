import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Modal } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
function Note() {
  const { addNote } = useContext(AnimeContext)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <FontAwesomeIcon icon={faPencilAlt} /> add note
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NOTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className=" text-white me-5 ms-5" onSubmit={e => addNote(e)}>
            <Form.Group as="Row" className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-black">Title:</Form.Label>
              <Col md="6">
                <Form.Control type="text" name="title" />
              </Col>
            </Form.Group>

            <Form.Group as="Row" className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label className="text-black">Episode:</Form.Label>
              </Col>
              <Col md="6">
                <Form.Control type="number" name="episode" />
              </Col>
            </Form.Group>
            <Button variant="dark" onClick={handleClose} type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default Note
