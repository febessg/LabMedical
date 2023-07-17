import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {
        name: "",
        email: ""
    },
    setUser: () => {}
});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    })
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}