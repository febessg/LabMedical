import { InputComponent } from '../Input/Input.component';
import * as Styled from './Exams.style';

export const FormExamsComponent = ({patient}) => {
    return (
        <Styled.Form>
            <Styled.Title>Exame de {patient.fullName}</Styled.Title>
            <Styled.InputRow>
                    <InputComponent
                        label='Nome do Exame'
                        type='text'
                        id='examName'
                    />
                <InputComponent
                    label='Data'
                    type='date'
                    id='date'
                />
                <InputComponent
                    label='Horário'
                    type='time'
                    id='time'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Tipo do Exame'
                    type='text'
                    id='examType'
                />
                <InputComponent
                    label='Laboratório'
                    type='text'
                    id='lab'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='URL'
                    type='text'
                    id='url'
                />
            </Styled.InputRow>
            <Styled.InputRow>
                <InputComponent
                    label='Resultado'
                    type='textarea'
                    id='result'
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