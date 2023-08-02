import { useForm } from 'react-hook-form';
import { InputComponent } from '../Input/Input.component';
import * as Styled from './Appointment.style';
import { AppointmentService } from '../../../services/Appointment/Appointment.service.jsx';
import { useNavigate } from 'react-router-dom';

export const FormAppointmentComponent = ({patient}) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const submitForm = (data) => {
    
       const appointment = {
            patientId: patient.id,
            patientName: patient.fullName,
            ...data
       };

       AppointmentService.Create(appointment);

        navigate(`/medical-record/${patient.id}`)
    }

    return (
        <Styled.Form onSubmit={handleSubmit(submitForm)}>
            <Styled.Title>Consulta de {patient.fullName}</Styled.Title>
            <Styled.InputRow>
                    <InputComponent
                        label='Motivo da Consulta'
                        type='text'
                        id='reason'
                        register={{...register('reason', {
                            required: true,
                            minLength: {
                                value: 6,
                                message: 'O motivo da consult deve ter pelo menos 6 caracteres'
                            },
                            maxLength: {
                                value: 60,
                                message: 'O motivo da consulta não pode exceder 60 caracteres'
                            }
                        }
                        )}}
                        error={errors.reason}
                    />
                <InputComponent
                    label='Data da Consulta'
                    type='date'
                    id='date'
                    register={{...register('date', {
                        required: true
                    })}}
                />
                <InputComponent
                    label='Horário da Consulta'
                    type='time'
                    id='time'
                    register={{...register('time', {
                        required: true
                    })}}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Descrição do problema'
                    type='textarea'
                    id='description'
                    register={{...register('description', {
                        required: true,
                        minLength: 15,
                        maxLength: 1000
                    })}}
                    error={errors.description}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Medicação Receitada'
                    type='textarea'
                    id='medication'
                    register={{...register('medication')}}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Dosagem e precauções'
                    type='textarea'
                    id='dose'
                    register={{...register('dose', {
                        required: true,
                        minLength: 15,
                        maxLength: 250
                    })}}
                    error={errors.dose}
                />
            </Styled.InputRow>
            <Styled.ButtonsWrapper>
                    <Styled.Button $active={!Object(errors).length} type='button' disabled={Object(errors).length}>Editar</Styled.Button>
                    <Styled.Button $color='red' $active={!Object(errors).length} type='button' disabled={Object(errors).length}>Deletar</Styled.Button>
                    <Styled.Button type='submit' $active={!Object(errors).length} disabled={Object(errors).length}>Salvar</Styled.Button>
            </Styled.ButtonsWrapper>
        </Styled.Form>
    )
}