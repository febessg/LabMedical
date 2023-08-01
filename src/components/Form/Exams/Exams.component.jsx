import { useNavigate } from 'react-router-dom';
import { InputComponent } from '../Input/Input.component';
import * as Styled from './Exams.style';
import { useForm } from 'react-hook-form';

export const FormExamsComponent = ({patient}) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const submitForm = (data) => {
        const exam = {
            patientId: patient.id,
            patientName: patient.fullName,
            ...data
        };

        console.log(exam)

        navigate(`/medical-record/${patient.id}`)
    };

    return (
        <Styled.Form onSubmit={handleSubmit(submitForm)}>
            <Styled.Title>Exame de {patient.fullName}</Styled.Title>
            <Styled.InputRow>
                    <InputComponent
                        label='Nome do Exame'
                        type='text'
                        id='examName'
                        register={{...register('examName', {
                            required: true,
                            minLength: 5,
                            maxLength: 50
                        })}}
                        error={errors.examName}
                    />
                <InputComponent
                    label='Data'
                    type='date'
                    id='date'
                    register={{...register('date', {
                        required: true
                    })}}
                    error={errors.date}
                />
                <InputComponent
                    label='Horário'
                    type='time'
                    id='time'
                    register={{...register('time', {
                        required: true
                    })}}
                    error={errors.time}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Tipo do Exame'
                    type='text'
                    id='examType'
                    register={{...register('examType', {
                        required: true,
                        minLength: 5,
                        maxLength: 30
                    })}}
                    error={errors.examType}
                />
                <InputComponent
                    label='Laboratório'
                    type='text'
                    id='lab'
                    register={{...register('lab', {
                        required: true,
                        minLength: 5,
                        maxLength: 30
                    })}}
                    error={errors.lab}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='URL'
                    type='text'
                    id='url'
                    register={{...register('url')}}
                    error={errors.url}
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Resultado'
                    type='textarea'
                    id='result'
                    register={{...register('result', {
                        required: true,
                        minLength: 15,
                        maxLength: 1000
                    })}}
                    error={errors.result}
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