import { useParams } from "react-router-dom"
import { FormAppointmentComponent } from "../../components/Form/Appointment/Appointment.component"
import { PatientService } from "../../services/Patient/Patient.service";
import * as Styled from './AppointmentsForm.style';
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { useContext, useEffect } from "react";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";

export const AppointmentsFormPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Cadastro de Consulta',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

    const {id} = useParams();
    const patient = PatientService.Show(id);

    return (
        <>
            <ToolbarComponent/>
            <Styled.AppointmentForm>
                <Styled.Title>Preencha os campos para cadastrar</Styled.Title>
                <FormAppointmentComponent patient={patient}/>
            </Styled.AppointmentForm>
            
        </>
    )
}