import { Route, Routes } from "react-router-dom"
import { Login, Home } from './routes'
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App;