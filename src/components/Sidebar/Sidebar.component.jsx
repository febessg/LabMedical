import { SidebarItemComponent } from '../SidebarItem/SidebarItem.component';
import * as Styled from './Sidebar.style';
import {FaTimes, FaHome, FaPlus, FaList} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import logo from '../../assets/logo-small.png'

export const SidebarComponent = ({active}) => {
    

    const closeSidebar = () => {
        active(false)
    }
    return (
        <Styled.Sidebar>
            <FaTimes onClick={closeSidebar}/>
            <Styled.SidebarContent>
                <Styled.Logo>
                    <img src={logo} alt="Logo LabMedical" />
                </Styled.Logo>
                <div className="GeralItens">
                    <Styled.Titles>Geral</Styled.Titles>
                    <SidebarItemComponent icon={<FaHome/>} text="Início" path='/'/>
                    <SidebarItemComponent icon={<FiLogOut/>} text="Sair" path='/login'/>
                </div>
                <div className='PatientsItens'>
                    <Styled.Titles>Pacientes</Styled.Titles>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar" path='/patient-register'/>
                    <SidebarItemComponent icon={<FaList/>} text="Listar Prontuário" path='/list-patients'/>
                </div>
                <div className='ExamsItens'>
                <Styled.Titles>Prontuário</Styled.Titles>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar Consulta" path='/appointments'/>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar Exame" path='/exams'/>
                </div>
            </Styled.SidebarContent>
        </Styled.Sidebar>
    )
}