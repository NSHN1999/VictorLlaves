import { Routes, Route } from "react-router-dom";

import { ServiciosRoute } from "../servicios/router/ServiciosRoute";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRoutes/>
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
