import { Route, Routes } from "react-router"
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

  const store = {
    animes: animes,
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
