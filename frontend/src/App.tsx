import { Route, Routes } from "react-router-dom"
import {Login, Home} from './routes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App