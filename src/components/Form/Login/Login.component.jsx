import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";

export const FormLoginComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();
    
    const navigate = useNavigate();

    const submitForm = (data) => {
        console.log(data)
    }
    
    const redirectToHome = () => {
        navigate('/home')
    }

    return (
        <Styled.Form onSubmit={handleSubmit(submitForm)}>
            <Styled.Header>
                <Styled.Title>Login</Styled.Title>
            </Styled.Header>
            <Styled.InputGroup>
                <InputComponent 
                    type="email" 
                    id="email" 
                    placeholder="Digite seu email" 
                    label='E-mail'
                    register={{...register('email', {
                        required: true,
                        validate:  {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
                    })}}
                    error={errors.email}
                />
                <InputComponent 
                    type="password" 
                    id="password" 
                    placeholder="Digite sua senha" 
                    label='Senha'
                    register={{...register('password', {
                        required: true,
                        minLength: 8
                    })}}
                    error={errors.password}
                />
            </Styled.InputGroup>
            <Styled.Button $active={!errors.email && !errors.password} type="submit" disabled={errors.email || errors.password}>Entrar</Styled.Button>
            <Styled.Action href="#">Esqueceu sua senha?</Styled.Action>
        </Styled.Form>
    )
}