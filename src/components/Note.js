import { useContext } from "react"
import { Button } from "react-bootstrap"
import AnimeContext from "../utils/AnimeContext"

function Note() {
  const { setNote, text, setText, addNote } = useContext(AnimeContext)
  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <Button onClick={addNote}>Add</Button>
    </>
  )
}

export default Note
