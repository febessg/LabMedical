import PropTypes from 'prop-types';
import * as Styled from './ListPatientCard.style';
import {GrNext} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/auth.context';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User/User.context';

export const ListPatientCardComponent = ({id, name, insurance}) => {
    const {setAuth} = useContext(AuthContext);
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const openMedicalRecord = () => {
        setAuth({
            user,
            isLogged: true
        });
        navigate('/medical-record')
    }

    return (
        <Styled.ListCard onClick={openMedicalRecord}>
            <Styled.PatientInfo>{id}</Styled.PatientInfo>
            <Styled.PatientInfo>{name}</Styled.PatientInfo>
            <Styled.PatientInfo>{insurance}</Styled.PatientInfo>
            <Styled.Icon><GrNext/></Styled.Icon>
        </Styled.ListCard>
    )
};

ListPatientCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    insurance: PropTypes.string
}