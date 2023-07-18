import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/auth/auth.context"
import { Navigate } from "react-router-dom";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component";
import { UserContext } from "../../contexts/User/User.context";
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { StatisticCardComponent } from "../../components/StatisticCard/StatisticCard.component";
import {FaHandHoldingMedical, FaNotesMedical} from 'react-icons/fa';
import {BsFillPeopleFill} from 'react-icons/bs';
import * as Styled from "./Home.style";
import { PatientCardComponent } from "../../components/PatientCard/PatientCard.component";


export const HomePage = () => {
    const {auth} = useContext(AuthContext);
    const {user} = useContext(UserContext);
    const {setToolbar} = useContext(ToolbarContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Estatísticas e informações',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    
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
            <Styled.Search>
                <InputComponent
                    type="text"
                    id="searchPatient"
                    placeholder="Digite o nome do paciente"
                />
                <Styled.Button>Buscar</Styled.Button>
            </Styled.Search>
            <Styled.SearchResults>
                <PatientCardComponent name='Jane Doe' age={25} contact="(48) 9999-9999" healthInsurance='Unimed'/>
                <PatientCardComponent name='Jane Doe' age={25} contact="(48) 9999-9999" healthInsurance='Unimed'/>
                <PatientCardComponent name='Jane Doe' age={25} contact="(48) 9999-9999" healthInsurance='Unimed'/>
            </Styled.SearchResults>
        </Styled.HomePage>
        </>
        )
    };

    return auth.isLogged ? render() : <Navigate to={'/login'}/>
}