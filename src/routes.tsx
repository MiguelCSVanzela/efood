import { Routes, Route } from 'react-router-dom'

import Perfil from './pages/Perfil'
import Home from './pages/Home'

const Paths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Paths
