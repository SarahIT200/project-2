import { Route, Routes, useNavigate } from "react-router-dom"
import Navbaritem from "./components/Navbaritem"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import axios from "axios"
import { useState, useEffect } from "react"
import AnimeContext from "./utils/AnimeContext"
import Anime from "./pages/Anime"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import AnimeCard from "./components/AnimeCard"

function App() {
  const [animes, setAnime] = useState([])
  const [profile, setProfile] = useState(null)
  const [likes, setLikes] = useState([])
  const [notes, setNotes] = useState([])
  const [text, setText] = useState("")
  const navigate = useNavigate()
  //profile
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      setProfile(response.data)
      getLike()
      console.log("profile:", profile)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const editProfile = async e => {}

  const confirmProfile = async e => {
    e.preventDefault()
    const form = e.target
    try {
      const profileBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        photo: form.elements.photo.value,
      }
      await axios.put("https://vast-chamber-06347.herokuapp.com/api/user/me", profileBody, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //puplic API
  const getAnime = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v3/top/anime")
      setAnime(response.data.top)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //use Effict
  useEffect(() => {
    getAnime()
    getLike()
    if (localStorage.projectToken) {
      getProfile()
    }
  }, [])

  //register
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
      getAnime()
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
      getAnime()
      getProfile()
      getLike()
      navigate("/")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //logout
  const logout = () => {
    localStorage.removeItem("projectToken")
  }
  //private API
  //-function like- to post item from public API to private
  const like = async (e, id) => {
    console.log(id)
    try {
      const animeFound = animes.find(anime => anime.mal_id === id)

      const likeBody = {
        title: animeFound.title,
        image: animeFound.image_url,
        url: animeFound.url,
      }
      console.log(likeBody)
      await axios.post(`https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items`, likeBody, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //get
  const getLike = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items")
      setLikes(response.data)
      console.log(likes)
      getProfile()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  //delete like
  const deleteLike = async id => {
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/anime-725/items/${id}`, {
        headers: {
          Authorization: localStorage.projectToken,
        },
      })
      getAnime()
      getProfile()
      getLike()
      console.log("delete success")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  //NOTE
  const addNote = () => {
    setNotes([...notes, text])
  }

  //context value
  const store = {
    animes: animes,
    signup: signup,
    login: login,
    logout: logout,
    getProfile: getProfile,
    profile: profile,
    editProfile: editProfile,
    confirmProfile: confirmProfile,
    like: like,
    likes: likes,
    deleteLike: deleteLike,
    addNote: addNote,
    notes: notes,
    text: text,
    setText: setText,
    setNotes: setNotes,
  }
  return (
    <AnimeContext.Provider value={store}>
      <Navbaritem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animes" element={<Anime />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimeContext.Provider>
  )
}

export default App
