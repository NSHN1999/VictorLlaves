import { Routes, Route } from "react-router-dom";
import { ServiciosRoute } from "../servicios/router/ServiciosRoute";

import { LoginPage, RegistroPage } from "../auth/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="registro" element={<RegistroPage/>}/>
                <Route path="/*" element={<ServiciosRoute/>}/>
            </Routes>
        </>
    );
};
