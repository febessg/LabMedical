import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';

export const FormLoginComponent = () => {

    const navigate = useNavigate();
    
    const redirectToHome = () => {
        navigate('/home')
    }

    return (
        <Styled.Form onSubmit={redirectToHome}>
            <Styled.Header>
                <Styled.Title>Login</Styled.Title>
            </Styled.Header>
            <Styled.InputGroup>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" placeholder="Digite seu email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
                </div>
            </Styled.InputGroup>
            <Styled.Button type="submit">Entrar</Styled.Button>
            <Styled.Action href="#">Esqueceu sua senha?</Styled.Action>
        </Styled.Form>
    )
}