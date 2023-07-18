import {BsPersonSquare} from 'react-icons/bs';
import PropTypes from 'prop-types';
import * as Styled from './PatientCard.style';

export const PatientCardComponent = ({name, age, contact, healthInsurance}) => {
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
                    <Styled.HealthInsurance>{healthInsurance}</Styled.HealthInsurance>
                </Styled.PatientInfo>
            <Styled.Button>Ver mais</Styled.Button>
        </Styled.PatientCard>
    )
}

PatientCardComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    contact: PropTypes.string.isRequired,
    healthInsurance: PropTypes.string
}