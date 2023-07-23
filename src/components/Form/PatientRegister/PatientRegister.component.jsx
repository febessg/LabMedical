import { useForm } from "react-hook-form";
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

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    return (
        <Styled.Form>
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Identificação</Styled.Titles>
                <InputComponent 
                    label='Nome Completo' 
                    id='fullName' 
                    type='text' 
                    register={{...register('fullName', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'O nome deve ter pelo menos 5 caracteres'
                        },
                        maxLength: {
                            value: 50,
                            message: 'O nome não pode exceder 50 caracteres'
                        }
                    })}}
                    error= {errors.fullName}
                />
                <Styled.InputRow className="InputRow">
                    <InputComponent 
                    label='Gênero' 
                    id='gender' 
                    type='select' 
                    options={gender}
                    register={{...register('gender', {
                        required: true, 
                    })}}
                    error={errors.gender}
                    />
                    <InputComponent label='Data de Nascimento' id='birthDate' type='date'
                    register={{...register('birthDate', {
                        required: true,
                        pattern: {
                            value: /^\d{2}-\d{2}-\d{4}$/,
                            message: "Data inválida. Utilize o formato 'dd-mm-aaaa'"
                        }
                    })}}
                        error={errors.birthDate}
                    />
                    <InputComponent label='Estado Civil' id='maritalStatus' type='select' options={maritalStatus}
                    register={{...register('maritalStatus', {
                        required: true, 
                    })}}
                    error={errors.maritalStatus}
                    />
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='CPF' id='cpf' type='text' placeholder='000.000.000-00'
                    register={{...register('cpf', {
                        required: true,
                        pattern: {
                            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                            message: 'CPF inválido.'
                        }
                    })}}
                    error={errors.cpf}    
                    />
                    <InputComponent label='RG' id='rg' type='text'
                    register={{...register('rg', {
                        required: true,
                        maxLength: 20
                    })}}
                    error= {errors.rg}
                    />
                    <InputComponent label='Naturalidade' id='nationality' type='text'
                    register={{...register('nationality', {
                        required: true,
                        minLength: {
                            value: 5
                        },
                        maxLength: {
                            value: 50
                        }
                    })}}
                    error= {errors.nationality}
                    />
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='Telefone' id='phoneNumber' type='text' placeholder='(99) 9 9999-9999'
                    register={{...register('phoneNumber', {
                        required: true,
                        pattern: {
                            value: /^\(\d{2}\) \d \d{4}-\d{4}$/,
                            message: 'Telefone inválido.'
                        }
                    })}}
                    error={errors.phoneNumber}
                    />
                    <InputComponent label='E-mail' id='email' type='email'
                    register={{...register('email', {
                        required: true,
                        validate:  {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
                    })}}
                    />
                    <InputComponent label='Contato de Emergência' id='emergencyContact' type='text' placeholder='(99) 9 9999-9999'
                    register={{...register('emergencyContact', {
                        required: true,
                        pattern: {
                            value: /^\(\d{2}\) \d \d{4}-\d{4}$/,
                            message: 'Telefone inválido.'
                        }
                    })}}
                    error={errors.emergencyContact}
                    />
                </Styled.InputRow>
                <Styled.InputRow className="InputRow">
                    <InputComponent label='Alergias' id='allergies' type='textarea'
                    
                    />
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
                    <Styled.Button $active={!errors}>Salvar</Styled.Button>
            </Styled.ButtonsWrapper>
        </Styled.Form>
    )
}