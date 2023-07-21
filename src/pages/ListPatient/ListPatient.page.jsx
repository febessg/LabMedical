import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { FaSearch } from "react-icons/fa";
import * as Styled from './ListPatient.style';
import { ListPatientCardComponent } from "../../components/ListPatientCard/ListPatientCard.component";

export const ListPatientPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Listagem de Prontuários',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    return (
        <>
            <ToolbarComponent/>
            <Styled.ListPage>
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
            <Styled.List>
                <Styled.SubTitles>
                    <Styled.SubTitle>Registro</Styled.SubTitle>
                    <Styled.SubTitle>Nome do Paciente</Styled.SubTitle>
                    <Styled.SubTitle>Convênio</Styled.SubTitle>
                </Styled.SubTitles>
                <ListPatientCardComponent id='000000001' name='Jane Doe' insurance='Unimed'/>
                <ListPatientCardComponent id='000000001' name='Jane Doe' insurance='Unimed'/>
                <ListPatientCardComponent id='000000001' name='Jane Doe' insurance='Unimed'/>
            </Styled.List>
        </Styled.ListPage>
        </>
    )
}