import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { FormPatientRegisterComponent } from "../../components/Form/PatientRegister/PatientRegister.component";

export const PatientRegisterPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    console.log(user)

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
            <FormPatientRegisterComponent/>
        </>
    )
}