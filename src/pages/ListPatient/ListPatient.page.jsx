import { useContext, useEffect, useState } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { FaSearch } from "react-icons/fa";
import * as Styled from './ListPatient.style';
import { ListPatientCardComponent } from "../../components/ListPatientCard/ListPatientCard.component";
import { AuthContext } from "../../contexts/auth/auth.context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PatientService } from "../../services/Patient/Patient.service";

export const ListPatientPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const newToolbar = {
          title: 'Listagem de Prontuários',
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
        const {info} = data;

        const patientByName = PatientService.ShowByName(info);
        const patientById = PatientService.Show(info);

        !patientByName && !patientById 
        ? alert('Paciente não encontrado') 
        : patientById 
        ? setSearch(patientById)
        : setSearch(patientByName);

        reset()
    }
    
    const openMedicalRecord = () => {
        setAuth({
            user,
            isLogged: true
        });
        navigate('/medical-record')
    }
    return (
        <>
            <ToolbarComponent/>
            <Styled.ListPage>
            <Styled.Title>Encontre o paciente</Styled.Title>
            <Styled.SearchPatient onSubmit={handleSubmit(submitForm)}>
                <Styled.InputGroup>
                    <InputComponent
                        type='info'
                        id='pacientSearch'
                        placeholder='Digite o nome ou identificador do paciente'
                        register={{...register('info')}}
                    />
                    <Styled.InputIcon><FaSearch/></Styled.InputIcon>
                </Styled.InputGroup>
                <Styled.Button>Buscar</Styled.Button>
            </Styled.SearchPatient>
            <Styled.List>
                <Styled.SubTitles>
                    <Styled.SubTitle>Registro</Styled.SubTitle>
                    <Styled.SubTitle>Nome do Paciente</Styled.SubTitle>
                    <Styled.SubTitle>Convênio</Styled.SubTitle>
                </Styled.SubTitles>
                {!search ? PatientService.Get().map((patient) => {
                return <ListPatientCardComponent
                    key={patient.id}
                    id={patient.id}
                    name={patient.fullName}
                    insurance={patient.insurance}
                    func={openMedicalRecord}
                    path={`/medical-record/${patient.id}`}        
                />
                }) : search.map((patient) => 
                    <ListPatientCardComponent
                id={patient?.id}
                name={patient?.fullName}
                insurance={patient?.insurance}
                func={openMedicalRecord}
                path={`/medical-record/${patient?.id}`}   
                />
                ) 
                }
            </Styled.List>
        </Styled.ListPage>
        </>
    )
}