import { InputComponent } from "../Input/Input.component";
import * as Styled from './SignUp.style';

export const FormSignUpComponent = () => {
    return (
        <Styled.Form>
            <Styled.Title>Cadastre-se</Styled.Title>
            <Styled.InputGroup>
                <InputComponent
                    type="email"
                    id="email"
                    placeholder="E-mail"
                />
                <InputComponent
                    type="password"
                    id="password"
                    placeholder="Senha"
                />
                <InputComponent
                type="password"
                id="repeatPassword"
                placeholder="Digite sua senha novamente"
                />
            </Styled.InputGroup>
            <Styled.Button type="submit">Cadastrar</Styled.Button>
        </Styled.Form>
    )
}