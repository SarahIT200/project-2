import { Route, Routes, useNavigate } from "react-router-dom"
import Navbaritem from "./components/Navbaritem"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import axios from "axios"
import { useState, useEffect } from "react"
import AnimeContext from "./utils/AnimeContext"
import Anime from "./pages/Anime"
import Home from "./pages/Home"

function App() {
  const [animes, setAnime] = useState([])
  const navigate = useNavigate()

  const getAnime = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v3/top/anime")
      setAnime(response.data.top)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getAnime()
  }, [])

  const signup = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const login = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const userBody = {
        password: form.elements.password.value,
        email: form.elements.email.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      localStorage.projectToken = response.data
      navigate("/")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const logout = () => {
    localStorage.removeItem("projectToken")
  }

  const store = {
    animes: animes,
    signup: signup,
    login: login,
    logout: logout,
  }
  return (
    <AnimeContext.Provider value={store}>
      <Navbaritem />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animes" element={<Anime />} />
      </Routes>
    </AnimeContext.Provider>
  )
}

export default App
