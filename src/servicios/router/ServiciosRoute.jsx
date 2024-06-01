import { Routes, Route, Navigate } from "react-router-dom";

import { ContactoPage, HomePage, Servicios } from "../pages";
import { Solicitud } from "../pages/Solicitud";

export const ServiciosRoute = () => {

    return (
        <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="servicios" element={<Servicios/>}/>
            <Route path="contacto" element={<ContactoPage/>}/>
            <Route path="solicitud" element={<Solicitud/>}/>

            <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
    );
};
