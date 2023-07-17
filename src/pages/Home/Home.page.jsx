import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { UserContext } from "../../contexts/User/User.context";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";

export const HomePage = () => {
    const {auth} = useContext(AuthContext);
    const {user} = useContext(UserContext);
    const {setToolbar} = useContext(ToolbarContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Estatísticas e informações',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    
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