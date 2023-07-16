import { useContext } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";

export const HomePage = () => {
    const {auth} = useContext(AuthContext);

    const render = () => {
        return (
        <>
        <ToolbarComponent/>
        <p>HomePage is render</p>
        </>
        )
    };

    return auth.isLogged ? render() : <Navigate to={'/login'}/>
}