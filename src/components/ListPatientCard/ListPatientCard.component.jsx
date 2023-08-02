import PropTypes from 'prop-types';
import * as Styled from './ListPatientCard.style';
import {GrNext} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export const ListPatientCardComponent = ({id, name, insurance, path}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path)
    }

    return (
        <Styled.ListCard onClick={handleNavigate}>
            <Styled.PatientInfo>{id}</Styled.PatientInfo>
            <Styled.PatientInfo>{name}</Styled.PatientInfo>
            {insurance ? <Styled.PatientInfo>{insurance}</Styled.PatientInfo> : <Styled.PatientInfo>Sem Plano</Styled.PatientInfo>}
            <Styled.Icon><GrNext/></Styled.Icon>
        </Styled.ListCard>
    )
};

ListPatientCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    insurance: PropTypes.string,
    path: PropTypes.string.isRequired
}