import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {
  return (
    <Link to="/animes">
      <Button>mewo</Button>
    </Link>
  )
}

export default Home
