import { InputComponent } from "../Input/Input.component";
import * as Styled from './PatientRegister.style';

export const FormPatientRegisterComponent = () => {
    const gender = [
        { value: 'opt1', label: 'Feminino'},
        {value: 'opt2',label: 'Masculino'}
    ]

    const maritalStatus = [
        { value: 'opt1', label: 'Solteiro'},
        {value: 'opt2', label: 'Casado'},
        {value: 'opt3', label: 'Divorciado'},
        {value: 'opt4', label: 'Viúvo'},
        {value: 'opt5', label: 'União estável'}
    ]
    return (
        <Styled.Form>
            
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Identificação</Styled.Titles>
                <InputComponent label='Nome Completo' id='fullName' type='text'/>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='Gênero' id='gender' type='select' options={gender}/>
                    <InputComponent label='Data de Nascimento' id='birthDate' type='date'/>
                    <InputComponent label='Estado Civil' id='maritalStatus' type='select' options={maritalStatus}/>
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='CPF' id='cpf' type='text' placeholder='000.000.000-00'/>
                    <InputComponent label='RG' id='rg' type='text'/>
                    <InputComponent label='Naturalidade' id='nationality' type='text'/>
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='Telefone' id='phoneNumber' type='text' placeholder='(99) 9 9999-99999'/>
                    <InputComponent label='E-mail' id='email' type='email'/>
                    <InputComponent label='Contato de Emergência' id='emergencyContact' type='text' placeholder='(99) 9 9999-99999'/>
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='Alergias' id='allergies' type='textarea'/>
                    <InputComponent label='Cuidados' id='specialCares' type='textarea'/>
                </Styled.InputRow>
            </Styled.InputGroup>
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Convênio</Styled.Titles>
                <InputComponent label='Convênio' id='insurance' type='text'/>
                <Styled.InputRow>
                    <InputComponent label='Número do Convênio' id='insuranceNumber' type='text'/>
                    <InputComponent label='Validade do Convênio' id='insuranceValidity' type='date'/>
                </Styled.InputRow>
            </Styled.InputGroup>
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Dados de Endereço</Styled.Titles>
                <Styled.InputRow>
                    <InputComponent label='CEP' id='cep' type='text'/>
                    <InputComponent label='Cidade' id='city' type='text'/>
                    <InputComponent label='Estado' id='state' type='text'/>
                </Styled.InputRow>
                <Styled.InputRow>
                    <InputComponent label='Logradouro' id='place' type='text'/>
                    <InputComponent label='Número' id='number' type='text'/>
                </Styled.InputRow>
                <Styled.InputRow>
                    <InputComponent label='Complemento' id='complement' type='text'/>
                    <InputComponent label='Bairro' id='neighborhood' type='text'/>
                </Styled.InputRow>
                <InputComponent label='Ponto de Referência' id='reference' type='text'/>
            </Styled.InputGroup>
            <Styled.ButtonsWrapper>
                    <Styled.Button>Editar</Styled.Button>
                    <Styled.Button $color='red'>Deletar</Styled.Button>
                    <Styled.Button>Salvar</Styled.Button>
            </Styled.ButtonsWrapper>
        </Styled.Form>
    )
}