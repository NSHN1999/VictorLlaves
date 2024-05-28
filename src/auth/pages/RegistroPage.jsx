import { Link } from "react-router-dom";

import { AuthLayout } from "../Layout/AuthLayout";

export const RegistroPage = () => {

    return (
        <AuthLayout title="Registrarse">
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    className="form-input"
                    name="usuario"
                />
                <input
                    type="email"
                    placeholder="Correo@gmail.com"
                    className="form-input"
                    name="correo"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-input"
                    name="password"
                />
                <button 
                    className="w-full h-9 px-4 py-[2px] bg-cyan-800 active:bg-cyan-700 text-white rounded-sm"   
                >
                    Crear Cuenta
                </button>
                <div
                    className="flex justify-end text-cyan-700"
                >
                    <h1 className="pr-2 text-black">¿Ya tienes una cuenta?</h1>
                    <Link
                        to="/auth/login"
                    >
                        Ingresar
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};
