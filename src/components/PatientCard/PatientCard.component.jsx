import {BsPersonSquare} from 'react-icons/bs';
import PropTypes from 'prop-types';
import * as Styled from './PatientCard.style';
import { useNavigate } from 'react-router-dom';

export const PatientCardComponent = ({name, age, contact, healthInsurance, id}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/medical-record/${id}`)
    }

    return (
        <Styled.PatientCard>
            <Styled.TopBar></Styled.TopBar>
            <Styled.Icon><BsPersonSquare/></Styled.Icon>
            <Styled.PatientInfo>
                <Styled.PatientName>{name}</Styled.PatientName>
                <Styled.PatientAge>{age} anos</Styled.PatientAge>
            </Styled.PatientInfo>
            <Styled.PatientInfo>
                <Styled.PatientContact>{contact}</Styled.PatientContact>
                {healthInsurance ? <Styled.HealthInsurance>{healthInsurance}</Styled.HealthInsurance> : <Styled.HealthInsurance $status={'sem'}>Sem Plano</Styled.HealthInsurance> }
            </Styled.PatientInfo>
            <Styled.Button onClick={handleNavigate}>Ver mais</Styled.Button>
        </Styled.PatientCard>
    )
}

PatientCardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    contact: PropTypes.string.isRequired,
    healthInsurance: PropTypes.string
}