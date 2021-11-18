import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function Signup() {
  const { signup } = useContext(AnimeContext)
  return (
    <Form className="mt-5 text-white me-5 ms-5" onSubmit={signup}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" placeholder="Enter your first name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName" placeholder="Enter your last name" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo Profile</Form.Label>
        <Form.Control type="url" name="photo" placeholder="Enter your photo" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  )
}

export default Signup
