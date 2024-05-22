import { Routes, Route, Navigate } from "react-router-dom";

import { NavBar, Footer } from "../../ui";
import { ContactoPage, HomePage, Servicios } from "../pages";
import { Solicitud } from "../pages/Solicitud";

export const ServiciosRoute = () => {

    return (
        <>
        <NavBar/>
        <div className="pt-16 px-5 pb-7 bg-gradient-to-b from-[#EAE21E] to-[#f5b700]">
            <Routes>
                <Route path="home" element={<HomePage/>}/>
                <Route path="servicios" element={<Servicios/>}/>
                <Route path="contacto" element={<ContactoPage/>}/>
                <Route path="solicitud" element={<Solicitud/>}/>

                <Route path="/" element={<Navigate to="/home"/>}/>
            </Routes>
        </div>
        <Footer/>
        </>
    );
};
