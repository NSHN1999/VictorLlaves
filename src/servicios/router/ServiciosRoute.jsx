import { Routes, Route, Navigate } from "react-router-dom";

import { NavBar, Footer } from "../../ui";
import { ContactoPage, HomePage, ServiciosPage, Solicitudes } from "../pages";

export const ServiciosRoute = () => {

    return (
        <>
            <NavBar/>
            <div className="mt-16 px-12 pb-7">
                <Routes>
                    <Route path="home" element={<HomePage/>}/>
                    <Route path="servicios" element={<ServiciosPage/>}/>
                    <Route path="solicitudes" element={<Solicitudes/>}/>
                    <Route path="contacto" element={<ContactoPage/>}/>

                    <Route path="/" element={<Navigate to="home"/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
};
