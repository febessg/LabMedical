import { useForm } from "react-hook-form";
import { InputComponent } from "../Input/Input.component";
import * as Styled from './PatientRegister.style';
import { useEffect } from "react";
import { PatientService } from "../../../services/Patient/Patient.service";
import { useNavigate } from "react-router-dom";

export const FormPatientRegisterComponent = () => {
    const gender = [
        {value: 'Feminino', label: 'Feminino'},
        {value: 'Masculino',label: 'Masculino'}
    ]

    const maritalStatus = [
        {value: 'Solteiro', label: 'Solteiro'},
        {value: 'Casado', label: 'Casado'},
        {value: 'Divorciado', label: 'Divorciado'},
        {value: 'Viúvo', label: 'Viúvo'},
        {value: 'União estável', label: 'União estável'}
    ]

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        setValue,
        watch,
    } = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        async function request() {
           await fetch(`https://viacep.com.br/ws/${watch('cep')}/json/`)
        .then((res) => res.json())
        .then((data) => {
            setValue('place', data.logradouro)
            setValue('city', data.localidade)
            setValue('state', data.uf)
            setValue('neighborhood', data.bairro)
        })
        .catch((error) => console.error('Erro na requisição: ', error));
        }
        watch('cep').length > 7 && request();
    }, [watch('cep')]);

    const submitForm = (data) => {
        const { cpf } = data;
        
        if (PatientService.ShowByCpf(cpf)) {
            alert('Paciente já cadastrado');
            reset();
            return
        }

        PatientService.Create(data);

        const {id} = PatientService.ShowByCpf(cpf)
        navigate(`/medical-record/${id}`)
    }
        
    return (
        <Styled.Form  onSubmit={handleSubmit(submitForm)}> 
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
                        required: true
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
                        error={errors.email}
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
                    register={{...register('allergies')}}
                    />
                    <InputComponent label='Cuidados' id='specialCares' type='textarea'
                        register={{...register('specialCares')}}
                    />
                </Styled.InputRow>
            </Styled.InputGroup>
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Convênio</Styled.Titles>
                <InputComponent label='Convênio' id='insurance' type='text'
                    register={{...register('insurance')}}
                />
                <Styled.InputRow>
                    <InputComponent label='Número do Convênio' id='insuranceNumber' type='text'
                        register={{...register('insuranceNumber')}}
                    />
                    <InputComponent label='Validade do Convênio' id='insuranceValidity' type='date'
                        register={{...register('insuranceValidity')}}
                    />
                </Styled.InputRow>
            </Styled.InputGroup>
            <Styled.InputGroup className="InputGroup">
                <Styled.Titles>Dados de Endereço</Styled.Titles>
                <Styled.InputRow>
                    <InputComponent label='CEP' id='cep' type='text'
                    register={{...register('cep', {
                        required: true
                    })}}
                    error={errors.cep}
                    />
                    <InputComponent label='Cidade' id='city' type='text' justRead={true}
                    register={{...register('city', {
                        required: true
                    })}}
                    error={errors.city}
                    />
                    <InputComponent label='Estado' id='state' type='text' justRead={true}
                    register={{...register('state', {
                        required: true
                    })}}
                    error={errors.state}  
                    />
                </Styled.InputRow>
                <Styled.InputRow>
                    <InputComponent label='Logradouro' id='place' type='text' justRead={true}
                        register={{...register('place', {
                            required: true
                        })}}
                        error={errors.place}
                    />
                    <InputComponent label='Número' id='number' type='text'
                        register={{...register('number', {
                            required: true
                        })}}
                        error={errors.number}
                    />
                </Styled.InputRow>
                <Styled.InputRow>
                    <InputComponent label='Complemento' id='complement' type='text'
                        register={{...register('complement')}}
                    />
                    <InputComponent label='Bairro' id='neighborhood' type='text' justRead={true}
                        register={{...register('neighborhood', {
                            required: true
                        })}}
                        error={errors.neighborhood}
                    />
                </Styled.InputRow>
                <InputComponent label='Ponto de Referência' id='reference' type='text'
                    register={{...register('reference')}}
                />
            </Styled.InputGroup>
            <Styled.ButtonsWrapper>
                    <Styled.Button $active={!Object(errors).length} type="button" disabled={Object(errors).length}>Editar</Styled.Button>
                    <Styled.Button $color='red' $active={!Object(errors).length} type="button" disabled={Object(errors).length}>Deletar</Styled.Button>
                    <Styled.Button  $active={!Object(errors).length} type='submit' disabled={Object(errors).length}>Salvar</Styled.Button>
            </Styled.ButtonsWrapper>
        </Styled.Form>
    )
}