import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { IconoMostrar } from "./IconoMostrar";
import { IconoEsconder } from "./IconoEsconder";
import { NavBarList } from "./NavBarList";
import { AuthContext } from "../../auth/context";
import { LoginRegisterNav } from "./LoginRegisterNav";

export const NavBar = () => {

    const [ mostrarMenu, setMostrarMenu ] = useState(false);
    const { logged , user } = useContext(AuthContext);

    const handleMenu = () => {
        setMostrarMenu(!mostrarMenu);
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
                    {
                        ( logged ) 
                        ? <h3 className="font-orbitron font-semibold">{user.name}</h3>
                        : <LoginRegisterNav/>
                    }
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
