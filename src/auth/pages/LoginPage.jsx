import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
                className="flex flex-col bg-white text-neutral-700 rounded-md w-full h-52 p-6 gap-4"
                onSubmit={onLogin}    
            >
                <h1 className="text-center">INICIAR SESIÓN</h1>
                <h3 className="pl-4">Usuario</h3>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    className="w-full px-4 py-[2px]"
                    name="usuario"
                    onChange={onInputChange}
                />
                <div className="flex justify-center">
                    <button 
                        className="px-4 py-[2px] bg-cyan-600 active:bg-cyan-700 text-white rounded-full"
                        onClick={onLogin}    
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
