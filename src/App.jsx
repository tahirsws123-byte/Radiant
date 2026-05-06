import { Route, Routes } from "react-router-dom"
import Landing from "../pages/landing"
import Featured from "../pages/Featured"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blog" element={<Featured />} />
    </Routes>
  )
}

export default App
