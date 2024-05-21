import { Routes, Route } from "react-router-dom";

import { ServiciosRoute } from "../servicios/router/ServiciosRoute";
import { LoginPage } from "../auth/pages"
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <ServiciosRoute/>
                    </PrivateRoute>
                }/>
            </Routes>
        </>
    );
};
