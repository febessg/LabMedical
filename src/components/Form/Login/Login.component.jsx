import { useNavigate } from "react-router-dom"

export const FormLoginComponent = () => {
    const navigate = useNavigate();
    
    const redirectToHome = () => {
        navigate('/home')
    }

    return (
        <form onSubmit={redirectToHome}>
            <legend>Login</legend>
            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" placeholder="Digite seu email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit">Entrar</button>
        </form>
    )
}