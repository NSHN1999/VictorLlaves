import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IconoMostrar } from "./IconoMostrar";
import { IconoEsconder } from "./IconoEsconder";
import { NavBarList } from "./NavBarList";

export const NavBar = () => {

    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
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
        <nav className="flex flex-col absolute w-full bg-[#EAE21E] divide-y top-0">
            <div className="flex flex-row relative px-5 h-14 w-full items-center font-light">
                <Link
                    className="font-extrabold mr-4"
                    to="/"
                    onClick={menu && handleMenu}
                >
                    VictorLlaves
                </Link>
                <div className="flex flex-row gap-x-2 basis-3/4">
                    <button 
                        className="font-medium h-8 basis-2/6 rounded-sm text-[#EAE21E] bg-gradient-to-r from-red-700 to-red-800"
                        onClick={onLogin}
                    >
                        Login
                    </button>
                    <button 
                        className="font-medium h-8 basis-2/6 rounded-sm text-[#EAE21E] bg-gradient-to-r from-red-700 to-red-800"
                        onClick={onRegistrarse}
                    >
                        Registrarse
                    </button>
                </div>
                <div>
                    <button 
                        className="absolute top-3 right-5"
                        onClick={handleMenu}
                    >
                        {
                            menu ? <IconoEsconder/> : <IconoMostrar/>
                        }
                    </button>
                </div>
            </div>
            <NavBarList
                handleMenu={handleMenu}
                menu={menu}
            />
        </nav>
    );
};
