import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { useForm } from "../../hooks";

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
        <div className="h-screen w-full flex justify-center p-5 items-center bg-[#EAE21E]">
            <form 
                className="flex flex-col bg-white text-neutral-700 rounded-md w-full p-6 gap-4 shadow-[0px_px_5px_5px] shadow-[rgba(0,0,0,0.4)]"
                onSubmit={onLogin}    
            >
                <h1 className="px-4 text-2xl">Login</h1>
                <input
                    type="text"
                    placeholder="Usuario"
                    className="w-full px-4 py-[2px] border-neutral-400 border-2 rounded-md"
                    name="usuario"
                    onChange={onInputChange}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full px-4 py-[2px] border-neutral-400 border-2 rounded-md"
                    name="password"
                    onChange={onInputChange}
                />
                <button 
                    className="w-full px-4 py-[2px] bg-cyan-600 active:bg-cyan-700 text-white rounded-md"
                    onClick={onLogin}    
                >
                    Login
                </button>
                <button 
                    className="flex flex-row justify-center gap-1 w-full px-4 py-[2px] bg-cyan-600 active:bg-cyan-700 text-white rounded-md"
                    onClick={onLogin}    
                >
                    Google
                </button>
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
        </div>
    );
};
