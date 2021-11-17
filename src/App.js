import { Route, Routes } from "react-router"
import CardPageOne from "./pages/CardPageOne"
import Navbaritem from "./Componets/Navbaritem"
import "./index.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import axios from "axios"
import AnimeList from "./Componets/AnimeList"
import { useState } from "react"
import AnimeContext from "./utils/AnimeContext"

function App() {
  const [animes, setAnime] = useState([])

  axios.get("https://api.jikan.moe/v3/top/anime").then(response => {
    const data = response.data
    setAnime(data)
  })

  const store = {
    anime: animes,
  }
  return (
    <AnimeContext.Provider value={store}>
      <Navbaritem />
      <AnimeList />

      <Routes>
        <Route path="/" element={<CardPageOne />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimeContext.Provider>
  )
}

export default App
