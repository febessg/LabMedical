import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/auth.context";

export const FormLoginComponent = () => {
    const users = [
        {
            id: 1,
            email: 'fernanda-bess@hotmail.com',
            password: '12345678'
        },
        {
            id: 2,
            email: 'eduardo.mm@icloud.com',
            password: '09876543'
        }
    ]

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();
    
    const navigate = useNavigate();

    const {setAuth} = useContext(AuthContext);

    const submitForm = (data) => {
        const {email, password} = data;

        const user = users.find(u => u.email === email)
        console.log(user)

        if(!user) {
            alert('Usuário não cadastrado');
            reset();
            return
        }

        password === user.password ? redirectToHome(user) : alert('Usuário ou senha inválidos.')
    }
    
    const redirectToHome = (user) => {
        setAuth({
            user,
            isLogged: true
        });
        navigate('/')
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
            <Styled.Action>
                <Styled.EsqueceuSenha>Esqueceu sua senha?</Styled.EsqueceuSenha>
                <Styled.SemConta>Ainda não tem uma conta? <Styled.Cadastro>Cadastre-se</Styled.Cadastro></Styled.SemConta>
            </Styled.Action>
        </Styled.Form>
    )
}