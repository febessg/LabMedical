import { useContext, useEffect, useState } from "react"
import {FaHandHoldingMedical, FaNotesMedical} from 'react-icons/fa';
import {BsFillPeopleFill} from 'react-icons/bs';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/auth.context"
import { UserContext } from "../../contexts/User/User.context";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
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

    const [search, setSearch] = useState();

    useEffect(() => {
        const newToolbar = {
          title: 'Estatísticas e informações',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

    const submitForm = (data) => {
        const {info} = data;

        const patientByInfo = PatientService.ShowByInfo(info);

       const patientByEmail = PatientService.ShowByEmail(info);

        !patientByInfo && !patientByEmail 
        ? alert('Paciente não encontrado') 
        : patientByEmail 
        ? setSearch(patientByEmail)
        : setSearch(patientByInfo);


        reset()
    }

    const getAge = (data) => {
        const today = new Date();
        const birthDate = new Date(data.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
    
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
    }
    const allPatients = PatientService.Get();

    const renderSearchResults = () => {
        if (!search) {
            return allPatients.map((patient) => (
                <PatientCardComponent
                  key={patient.id}
                  name={patient.fullName}
                  age={getAge(patient)}
                  contact={patient.phoneNumber}
                  healthInsurance={patient.insurance}
                  id={patient.id}
                />
              ));
        } else {
            return (
                <PatientCardComponent
                  name={search.fullName}
                  age={getAge(search)}
                  contact={search.phoneNumber}
                  healthInsurance={search.insurance}
                  id={search.id}
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
                    id="info"
                    placeholder="Busque um paciente pelo nome, telefone ou email"
                    register={{...register('info')}}
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