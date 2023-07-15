import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';
import { InputComponent } from "../Input/Input.component";

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
                <InputComponent type="email" id="email" placeholder="Digite seu email" label='E-mail'/>
                <InputComponent type="password" id="password" placeholder="Digite sua senha" label='Senha'/>
            </Styled.InputGroup>
            <Styled.Button type="submit">Entrar</Styled.Button>
            <Styled.Action href="#">Esqueceu sua senha?</Styled.Action>
        </Styled.Form>
    )
}