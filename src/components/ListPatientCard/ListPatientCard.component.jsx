import PropTypes from 'prop-types';
import * as Styled from './ListPatientCard.style';
import {GrNext} from 'react-icons/gr'

export const ListPatientCardComponent = ({id, name, insurance}) => {
    return (
        <Styled.ListCard>
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