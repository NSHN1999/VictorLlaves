import { useNavigate } from 'react-router-dom';

export const LoginRegisterNav = () => {

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
        <>
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
        </>
    );
};
