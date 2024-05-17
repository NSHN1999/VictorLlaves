import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IconoMostrar } from "./IconoMostrar";
import { IconoEsconder } from "./IconoEsconder";
import { NavBarList } from "./NavBarList";

export const NavBar = () => {

    const [ mostrarMenu, setMostrarMenu ] = useState(false);

    const handleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/login", {
            replace: true
        });
    };

    const onRegistrarse = () => {
        navigate("/registro", {
            replace:true
        });
    };
    
    return (
        <nav className="flex flex-col fixed w-full bg-[#EAE21E] divide-y divide-black top-0 shadow-[#131313] shadow-[0_1px_3px_2px]">
            <div className="flex flex-row h-12 w-full items-center font-light">
                <Link
                    className="pl-2 font-semibold"
                    to="/home"
                    onClick={mostrarMenu && handleMenu}
                >
                    VLLaves
                </Link>
                <div className="flex flex-row px-2 w-full justify-end items-center gap-x-2">
                    <button 
                        className="h-8 px-4 rounded-full text-[#EAE21E] bg-gradient-to-r from-red-700 to-red-800"
                        onClick={onLogin}
                    >
                        Login
                    </button>
                    <button 
                        className="h-8 px-4 rounded-full text-[#EAE21E] bg-gradient-to-r from-red-700 to-red-800"
                        onClick={onRegistrarse}
                    >
                        Registrarse
                    </button>
                    <div>
                    <button 
                        className="flex items-center"
                        onClick={handleMenu}
                    >
                        {
                            mostrarMenu ? <IconoEsconder/> : <IconoMostrar/>
                        }
                    </button>
                </div>
                </div>
                
            </div>
            <NavBarList
                handleMenu={handleMenu}
                mostrarMenu={mostrarMenu}
            />
        </nav>
    );
};
