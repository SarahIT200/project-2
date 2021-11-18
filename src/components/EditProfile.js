import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function EditProfile() {
  const { profile, confirmProfile } = useContext(AnimeContext)
  return (
    <Form className="mt-5 text-white me-5 ms-5" onSubmit={confirmProfile}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" defaultValue={profile.firstName} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName" defaultValue={profile.lastName} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" defaultValue={profile.email} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo Profile</Form.Label>
        <Form.Control type="url" name="photo" defaultValue={profile.photo} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        confirm
      </Button>
    </Form>
  )
}

export default EditProfile
