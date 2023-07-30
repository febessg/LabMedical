import { useContext, useEffect } from "react";
import { ToolbarComponent } from "../../components/Toolbar/Toolbar.component"
import { ToolbarContext } from "../../contexts/Toolbar/Toolbar.context";
import { UserContext } from "../../contexts/User/User.context";
import * as Styled from './MedicalRecord.style';
import { MedicalRecordItemComponent } from "../../components/MedicalRecordItem/MedicalRecordItem.component";
import { useParams } from "react-router-dom";
import { PatientService } from "../../services/Patient/Patient.service";

export const MedicalRecordPage = () => {
    const {id} = useParams();
    const {user} = useContext(UserContext);
    const {setToolbar} = useContext(ToolbarContext);

    useEffect(() => {
        const newToolbar = {
          title: 'Cadastrar Consultas',
          userName: user.name
        };
        setToolbar(newToolbar);
      }, [user.name]);

    const patient = PatientService.Show(id);

    
    return (
        <>
        <ToolbarComponent/>
            <Styled.MedicalRecord>
                <Styled.PatientName>Paciente {patient.fullName}</Styled.PatientName>
                <Styled.Container>
                    <Styled.PatientInfos><strong>Convênio:</strong> {patient.insurance ? patient.insurance : 'Sem plano'}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Contato de emergência:</strong> {patient.emergencyContact}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Alergias:</strong> {patient.allergies ? patient.allergies : 'NA'}</Styled.PatientInfos>
                    <Styled.PatientInfos><strong>Cuidados específicos:</strong> {patient.specialCares ? patient.specialCares : 'NA'}</Styled.PatientInfos>
                </Styled.Container>
                <MedicalRecordItemComponent id={1} title={'Consulta'}/>
                <MedicalRecordItemComponent id={2} title={'Exame'}/>
            </Styled.MedicalRecord>
        </>
    )
}