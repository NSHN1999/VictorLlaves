import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { useForm } from "../../hooks";
import { AuthLayout } from "../Layout/AuthLayout";

export const LoginPage = () => {

    const { usuario, onInputChange } = useForm({
        usuario: ''
    });

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        if(usuario.length <= 1) return;
        login(usuario);

        navigate('/', {
            replace: true
        });
    };

    return (
        <AuthLayout title="Login">
            <form className="flex flex-col gap-4" onSubmit={onLogin}>
                <input
                    type="text"
                    placeholder="Usuario"
                    className="form-input"
                    name="usuario"
                    onChange={onInputChange}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-input"
                    name="password"
                    onChange={onInputChange}
                />
                <div>
                    <button 
                        className="w-full h-9 px-4 mb-2 bg-cyan-800 active:bg-cyan-700 text-white rounded-sm"
                        onClick={onLogin}    
                    >
                        Login
                    </button>
                    <button 
                        className="w-full h-9 px-4 bg-cyan-800 active:bg-cyan-700 text-white rounded-sm"
                        onClick={onLogin}    
                    >
                        Google
                    </button>
                </div>
                <div
                    className="flex justify-end text-cyan-700"
                >
                    <Link
                        to="/auth/registro"
                    >
                        Crear cuenta
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};
