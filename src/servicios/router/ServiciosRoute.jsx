import { Routes, Route, Navigate } from "react-router-dom";

import { ContactoPage, HomePage, Servicios, Solicitud } from "../pages";
import { VictorLlavesLayout } from '../Layout'

export const ServiciosRoute = () => {

    return (
        <VictorLlavesLayout>
            <Routes>
                <Route path="home" element={<HomePage/>}/>
                <Route path="servicios" element={<Servicios/>}/>
                <Route path="contacto" element={<ContactoPage/>}/>
                <Route path="solicitud" element={<Solicitud/>}/>

                <Route path="/*" element={<Navigate to="/home"/>}/>
            </Routes>
        </VictorLlavesLayout>
    );
};
