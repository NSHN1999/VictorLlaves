import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

export const VictorLlavesApp = () => {

    return(
        <>
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
        </>
    );
};
