import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import * as Styled from './Exams.style';
import { InputComponent } from "../../components/Form/Input/Input.component";
import { FaSearch } from "react-icons/fa";
import { FormExamsComponent } from "../../components/Form/Exams/Exams.component";

export const ExamsPage = () => {
    const {setToolbar} = useContext(ToolbarContext);
    const {user} = useContext(UserContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Cadastrar Exame',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    return (
        <>
            <ToolbarComponent/>
            <Styled.Exams>
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
            <FormExamsComponent patient='Jane Doe'/>
        </Styled.Exams>
        </>
    )
}