import { NavLink } from "react-router-dom";

export const NavBarList = ({ handleMenu, menu}) => {

    return (
        <ul className={`flex flex-col divide-y ${ !menu ? 'hidden' : ''}`}>
            <NavLink 
                className={({isActive}) => `flex ${isActive? 'font-semibold' : ''}`}
                to="/home"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">HOME</p>
            </NavLink>
            <NavLink 
                className={({isActive}) => `flex ${isActive? 'font-semibold' : ''}`}
                to="/servicios"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">SERVICIOS</p>
            </NavLink>
            <NavLink 
                className={({isActive}) => `flex ${isActive? 'font-semibold' : ''}`}
                to="/solicitudes"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">SOLICITUDES</p>
            </NavLink>
            <NavLink 
                className={({isActive}) => `flex ${isActive? 'font-semibold' : ''}`}
                to="/contacto"
                onClick={handleMenu}
            >
                    <p className="h-10 w-full text-center content-center">CONTÁCTAME</p>
            </NavLink>
        </ul>
    );
};
