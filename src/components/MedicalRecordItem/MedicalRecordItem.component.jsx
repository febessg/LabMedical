import { AppointmentService } from '../../services/Appointment/Appointment.service';
import { ExamsService } from '../../services/Exams/Exams.service';
import * as Styled from './MedicalRecordItem.style';
import PropTypes from 'prop-types';

export const MedicalRecordItemComponent = ({id, title, order}) => {
    const historyItem = title === 'Consulta' 
        ? AppointmentService.Show(id) 
        : ExamsService.Show(id);

    const transformDate = (date) => {
        const [year, month, day] = date.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    };

    return (
        <>
            <Styled.MedicalRecordItem>
                <Styled.ItemHeader>
                    <Styled.OrderNumber>
                            {order}
                    </Styled.OrderNumber>
                    <Styled.ItemTitle>{title}</Styled.ItemTitle>
                </Styled.ItemHeader>
                <Styled.ItemContent>
                    <Styled.DateTime>
                        <h3>{transformDate(historyItem.date)}</h3>
                        <h3>{historyItem.time}</h3>
                    </Styled.DateTime>
                    <Styled.Info>{historyItem.reason 
                        ? <Styled.Appointment>
                            <p><strong>Motivo da Consulta: </strong>{historyItem.reason}</p>
                            <p><strong>Descrição: </strong>{historyItem.description}</p>
                            <p><strong>Medicação Receitada: </strong>{historyItem.medication ? historyItem.medication : 'NA'}</p>
                            <p><strong>Dosagem e Precauções: </strong>{historyItem.dose ? historyItem.dose : 'NA'}</p>
                          </Styled.Appointment> 
                        : <Styled.Exam>
                            <p><strong>Nome do Exame: </strong>{historyItem.examName}</p>
                            <p><strong>Tipo do Exame: </strong>{historyItem.examType}</p>
                            <p><strong>Laboratório: </strong>{historyItem.lab}</p>
                            <p><strong>Resultado do Exame: </strong>{historyItem.result}</p>
                          </Styled.Exam>}
                    </Styled.Info>
                    <Styled.Button onClick={() => alert('Esta função ainda será habilitada')}>Editar</Styled.Button>
                </Styled.ItemContent>
            </Styled.MedicalRecordItem>
        </>
    )
};

MedicalRecordItemComponent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
}