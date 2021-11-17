import { Route, Routes } from "react-router"
import CardPageOne from "./pages/CardPageOne"
import Navbaritem from "./Componets/Navbaritem"
import "./index.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <Navbaritem />

      <Routes>
        <Route path="/" element={<CardPageOne />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
