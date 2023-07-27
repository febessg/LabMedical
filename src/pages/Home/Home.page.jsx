import { useContext, useEffect } from "react"
import {FaHandHoldingMedical, FaNotesMedical} from 'react-icons/fa';
import {BsFillPeopleFill} from 'react-icons/bs';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/auth.context"
import { UserContext } from "../../contexts/User/User.context";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { PatientsContext } from "../../contexts/Patients/Patients.context";
import { PatientService } from "../../services/Patient/Patient.service";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { StatisticCardComponent } from "../../components/StatisticCard/StatisticCard.component";
import { PatientCardComponent } from "../../components/PatientCard/PatientCard.component";
import * as Styled from "./Home.style";
import { useForm } from "react-hook-form";

export const HomePage = () => {
    const {auth} = useContext(AuthContext);
    const {user} = useContext(UserContext);
    const {setToolbar} = useContext(ToolbarContext);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const {patient, setPatient} = useContext(PatientsContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Estatísticas e informações',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

    const submitForm = (data) => {
        const {name} = data;

        const patientByName = PatientService.ShowByName(name);

        patientByName ? setPatient(patientByName) : alert('Paciente não encontrado');

        reset()
    }

    const getAge = (patient) => {
        const today = new Date();
        const birthDate = new Date(patient.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
    
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
    }

    const patientAge = getAge(patient);

    const allPatients = PatientService.Get();

    const renderSearchResults = () => {
        if (!patient) {
            return allPatients.map((patient) => (
                <PatientCardComponent
                  key={patient.id}
                  name={patient.fullName}
                  age={patientAge}
                  contact={patient.phoneNumber}
                  healthInsurance={patient.insurance}
                />
              ));
        } else {
            return (
                <PatientCardComponent
                  name={patient.fullName}
                  age={patientAge}
                  contact={patient.phoneNumber}
                  healthInsurance={patient.insurance}
                />
              );
        }
      };
    
    const render = () => {
        return (
        <>
        <ToolbarComponent/>
        <Styled.HomePage>
            <Styled.Titles>Estatísticas do sistema</Styled.Titles>
            <Styled.Statistics>
                 <StatisticCardComponent icon={<BsFillPeopleFill/>} value={5} title="Pacientes"/>
                <StatisticCardComponent icon={<FaHandHoldingMedical/>} value={5} title="Consultas"/>
                <StatisticCardComponent icon={<FaNotesMedical/>} value={5} title="Exames"/>
            </Styled.Statistics>
            <Styled.Titles>Informações Rápidas de Pacientes</Styled.Titles>
            <Styled.Search onSubmit={handleSubmit(submitForm)}>
                <InputComponent
                    type="text"
                    id="name"
                    placeholder="Busque um paciente pelo nome"
                    register={{...register('name')}}
                />
                <Styled.Button type="submit">Buscar</Styled.Button>
            </Styled.Search>
            <Styled.SearchResults>
            {renderSearchResults()}
            </Styled.SearchResults>
        </Styled.HomePage>
        </>
        )
    };

    return auth.isLogged ? render() : <Navigate to={'/login'}/>
}