import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegistroPage } from "../pages";

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="registro" element={<RegistroPage/>}/>

            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
    );
};
