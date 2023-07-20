import { InputComponent } from "../../components/Form/Input/Input.component";
import {FaSearch} from 'react-icons/fa';
import * as Styled from './Appointments.style';
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { useContext, useEffect } from "react";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { FormAppointmentComponent } from "../../components/Form/Appointment/Appointment.component";

export const AppointmentsPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Cadastrar Consultas',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    return(
        <>
        <ToolbarComponent/>
        <Styled.Appointments>
            <Styled.Title>Encontre o paciente</Styled.Title>
            <Styled.SearchPatient>
                <Styled.InputGroup>
                    <InputComponent
                        type='text'
                        id='pacientSearch'
                        placeholder='Digite o nome do paciente'
                    />
                    <Styled.InputIcon><FaSearch/></Styled.InputIcon>
                </Styled.InputGroup>
                <Styled.Button>Buscar</Styled.Button>
            </Styled.SearchPatient>
            <FormAppointmentComponent patient='Jane Doe'/>
        </Styled.Appointments>
        </>
        
    )
}