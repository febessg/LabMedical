import { InputComponent } from '../Input/Input.component';
import * as Styled from './Appointment.style';

export const FormAppointmentComponent = ({patient}) => {
    return (
        <Styled.Form>
            <Styled.Title>Consulta de {patient}</Styled.Title>
            <Styled.InputRow>
                    <InputComponent
                        label='Motivo da Consulta'
                        type='text'
                        id='reason'
                    />
                <InputComponent
                    label='Data da Consulta'
                    type='date'
                    id='date'
                />
                <InputComponent
                    label='Horário da Consulta'
                    type='time'
                    id='time'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Descrição do problema'
                    type='textarea'
                    id='description'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Medicação Receitada'
                    type='textarea'
                    id='medication'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Dosagem e precauções'
                    type='textarea'
                    id='dose&Precautions'
                />
            </Styled.InputRow>
            <Styled.ButtonsWrapper>
                    <Styled.Button>Editar</Styled.Button>
                    <Styled.Button $color='red'>Deletar</Styled.Button>
                    <Styled.Button>Salvar</Styled.Button>
            </Styled.ButtonsWrapper>
        </Styled.Form>
    )
}