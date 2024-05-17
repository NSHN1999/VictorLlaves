import { Routes, Route, Navigate } from "react-router-dom";

import { NavBar, Footer } from "../../ui";
import { ContactoPage, HomePage, Solicitudes } from "../pages";

export const ServiciosRoute = () => {

    return (
        <>
            <NavBar/>
            <div className="pt-16 px-5 pb-7 bg-gradient-to-b from-[#EAE21E] to-[#f5b700]">
                <Routes>
                    <Route path="home" element={<HomePage/>}/>
                    <Route path="solicitudes" element={<Solicitudes/>}/>
                    <Route path="contacto" element={<ContactoPage/>}/>

                    <Route path="/" element={<Navigate to="/home"/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
};
