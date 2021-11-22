import { useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"
function Signup() {
  const { signup } = useContext(AnimeContext)
  return (
    <Form className="mt-5 text-white me-5 ms-5" onSubmit={signup}>
      <Form.Group as="Row" className="mb-3">
        <Form.Label className="text-black">First Name</Form.Label>
        <Col md="6">
          <Form.Control type="text" name="firstName" placeholder="Enter your first name" required />
        </Col>
      </Form.Group>
      <Form.Group as="Row" className="mb-3">
        <Form.Label className="text-black">Last Name</Form.Label>
        <Col md="6">
          <Form.Control type="text" name="lastName" placeholder="Enter your last name" required />
        </Col>
      </Form.Group>
      <Form.Group as="Row" className="mb-3">
        <Form.Label className="text-black">Password</Form.Label>
        <Col md="6">
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Col>
      </Form.Group>
      <Form.Group as="Row" className="mb-3">
        <Form.Label className="text-black">Email address</Form.Label>
        <Col md="6">
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Col>
      </Form.Group>
      <Form.Group as="Row" className="mb-3">
        <Form.Label className="text-black">Photo Profile</Form.Label>
        <Col md="6">
          <Form.Control type="url" name="photo" placeholder="Enter your photo" required />
        </Col>
      </Form.Group>
      <Button variant="dark" type="submit" className="mt-4">
        SignUp
      </Button>
    </Form>
  )
}

export default Signup
