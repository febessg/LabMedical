import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import * as Styled from './MedicalRecord.style';

export const MedicalRecordPage = () => {
    const {user} = useContext(UserContext);
    const {setToolbar} = useContext(ToolbarContext);

    const setHomeToolbar = () => {
        const newToolbar = {
            title: 'Prontuário',
            userName: user.name
        };
        setToolbar(newToolbar)
    };

    useEffect(() => setHomeToolbar(), []);
    return (
        <>
        <ToolbarComponent/>
            <Styled.MedicalRecord>
                <Styled.PatientName>Paciente {'Jane Doe'}</Styled.PatientName>
                <Styled.Container>
                    <Styled.PatientInfos><strong>Convênio:</strong> {'Unimed'}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Contato de emergência:</strong> {'(99) 9999-9999'}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Alergias:</strong> {'Lorem Ipsun'}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Cuidados específicos:</strong> {'Lorem Ipsun'}</Styled.PatientInfos>
                </Styled.Container>

            </Styled.MedicalRecord>
        </>
    )
}