import { NavLink } from "react-router-dom";

export const NavBarList = ({ handleMenu, menu}) => {

    return (
        <ul className={`flex flex-col text-center divide-y ${ !menu ? 'hidden' : ''}`}>
            <NavLink 
                className="flex"
                to="/home"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">HOME</p>
            </NavLink>
            <NavLink 
                className="flex"
                to="/servicios"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">SERVICIOS</p>
            </NavLink>
            <NavLink 
                className="flex"
                to="/contacto"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">CONTÁCTAME</p>
            </NavLink>
        </ul>
    );
};
