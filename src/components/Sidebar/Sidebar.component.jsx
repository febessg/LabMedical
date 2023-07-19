import { SidebarItemComponent } from '../SidebarItem/SidebarItem.component';
import * as Styled from './Sidebar.style';
import {FaTimes, FaHome, FaPlus, FaList} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';

export const SidebarComponent = ({active}) => {
    

    const closeSidebar = () => {
        active(false)
    }
    return (
        <Styled.Sidebar>
            <FaTimes onClick={closeSidebar}/>
            <Styled.SidebarContent>
                <div className="GeralItens">
                    <Styled.Titles>Geral</Styled.Titles>
                    <SidebarItemComponent icon={<FaHome/>} text="Início" path='/'/>
                    <SidebarItemComponent icon={<FiLogOut/>} text="Sair" path='/login'/>
                </div>
                <div className='PatientsItens'>
                    <Styled.Titles>Pacientes</Styled.Titles>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar" path='/patient-register'/>
                    <SidebarItemComponent icon={<FaList/>} text="Listar Prontuário" path='/'/>
                </div>
                <div className='ExamsItens'>
                <Styled.Titles>Prontuário</Styled.Titles>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar Consulta" path='/'/>
                    <SidebarItemComponent icon={<FaPlus/>} text="Cadastrar Exame" path='/'/>
                </div>
            </Styled.SidebarContent>
        </Styled.Sidebar>
    )
}