import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Reserva from "./pages/Reserva";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservas" element={<Reserva/>} />
        </Routes>
    )
}