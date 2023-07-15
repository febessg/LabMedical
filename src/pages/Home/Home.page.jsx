import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";

export const HomePage = () => {
    const {auth} = useContext(AuthContext);

    const render = () => {
        return (
        <>
        <p>HomePage is render</p>
        </>
        )
    };

    return auth.isLogged ? render() : <Navigate to={'/login'}/>
}