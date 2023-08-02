import { useContext, useEffect, useState } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import * as Styled from './Exams.style';
import { InputComponent } from "../../components/Form/Input/Input.component";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PatientService } from "../../services/Patient/Patient.service";
import { ListPatientCardComponent } from "../../components/ListPatientCard/ListPatientCard.component";

export const ExamsPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Cadastrar Exame',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

      const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const [search, setSearch] = useState()

    const submitForm = (data) => {
        const {name} = data;

        const patientByName = PatientService.ShowByName(name);

        patientByName ? setSearch(patientByName) : alert('Paciente não encontrado');

        reset()
    }

    return (
        <>
            <ToolbarComponent/>
            <Styled.Exams>
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
                <Styled.Button type='submit'>Buscar</Styled.Button>
            </Styled.SearchPatient>
            <Styled.List>
                {!search ? PatientService.Get().map((patient, index) => {
                    return <ListPatientCardComponent
                        key={index}
                        id={patient.id}
                        name={patient.fullName}
                        insurance={patient.insurance}
                        path={`/exams/${patient.id}`}
                    />
                }) : <ListPatientCardComponent
                id={search.id}
                name={search.fullName}
                insurance={search.insurance}
                path={`/exams/${search.id}`}
                />
                }
            </Styled.List>
        </Styled.Exams>
        </>
    )
}