import { Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "../../ui";
import { ContactoPage, HomePage, ServiciosPage } from "../pages";

export const ServiciosRoute = () => {

    return (
        <>
            <NavBar/>
            <div className="my-16 mx-12">
                <Routes>
                    <Route path="home" element={<HomePage/>}/>
                    <Route path="servicios" element={<ServiciosPage/>}/>
                    <Route path="contacto" element={<ContactoPage/>}/>

                    <Route path="/" element={<Navigate to="home"/>}/>
                </Routes>
            </div>
        </>
    );
};
