import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
    logged: false
};

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState );

    const login = ( name = '' ) => {

        const user = { id: "123", name: name}

        const action = {
            type: types.login,
            payload: user
        };

        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
};
