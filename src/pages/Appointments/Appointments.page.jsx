import { InputComponent } from "../../components/Form/Input/Input.component";
import {FaSearch} from 'react-icons/fa';
import * as Styled from './Appointments.style';
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { useContext, useEffect, useState } from "react";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { useForm } from "react-hook-form";
import { PatientService } from "../../services/Patient/Patient.service";
import { ListPatientCardComponent } from "../../components/ListPatientCard/ListPatientCard.component";

export const AppointmentsPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Cadastrar Consultas',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

      const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [search, setSearch] = useState();

    const submitForm = (data) => {
        const {name} = data;

        const patientByName = PatientService.ShowByName(name);

        patientByName ? setSearch(patientByName) : alert('Paciente não encontrado');

        reset()
    }

    return(
        <>
        <ToolbarComponent/>
        <Styled.Appointments>
            <Styled.Title>Encontre o paciente</Styled.Title>
            <Styled.SearchPatient onSubmit={handleSubmit(submitForm)}>
                <Styled.InputGroup>
                    <InputComponent
                        type='text'
                        id='name'
                        placeholder='Digite o nome do paciente'
                        register={{...register('name')}}
                    />
                    <Styled.InputIcon><FaSearch/></Styled.InputIcon>
                </Styled.InputGroup>
                <Styled.Button type="submit">Buscar</Styled.Button>
            </Styled.SearchPatient>
            <Styled.List>
                {!search ? PatientService.Get().map((patient) => {
                    return <ListPatientCardComponent
                        key={patient.id}
                        id={patient.id}
                        name={patient.fullName}
                        insurance={patient.insurance}
                        path={`/appointments/${patient.id}`}
                    />
                }) : <ListPatientCardComponent
                id={search.id}
                name={search.fullName}
                insurance={search.insurance}
                path={`/appointments/${search.id}`}
                />
                }
            </Styled.List>
            
        </Styled.Appointments>
        </>
        
    )
}