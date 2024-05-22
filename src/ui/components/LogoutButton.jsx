import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const LogoutButton = () => {

    const { logout } = useContext(AuthContext);

    return (
        <>
            <button 
                className="h-8 px-4 rounded-full text-[#EAE21E] bg-gradient-to-r from-red-700 to-red-800"
                onClick={logout}
            >
                Logout
            </button>
        </>
    );
};
