import { createContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext({
    auth: {
        user: {},
        isLogged: false
    },
    setAuth: () => {}
});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: {},
        isLogged: false
    })

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node
}