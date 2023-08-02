import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { FormPatientRegisterComponent } from "../../components/Form/PatientRegister/PatientRegister.component";
import * as Styled from './PatientRegister.style';

export const PatientRegisterPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Cadastrar Paciente',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);

    return (
        <>
            <ToolbarComponent/>
            <Styled.PatientRegister>
                <Styled.Title>Preencha os campos para cadastrar</Styled.Title>
                <FormPatientRegisterComponent/>
            </Styled.PatientRegister>
        </>
    )
}