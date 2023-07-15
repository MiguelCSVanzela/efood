import { Routes, Route } from "react-router-dom";

import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
);

export default Rotas;
