import PropTypes from 'prop-types';
import * as Styled from './ListPatientCard.style';
import {GrNext} from 'react-icons/gr';

export const ListPatientCardComponent = ({key, id, name, insurance, func}) => {

    return (
        <Styled.ListCard key={key} onClick={func}>
            <Styled.PatientInfo>{id}</Styled.PatientInfo>
            <Styled.PatientInfo>{name}</Styled.PatientInfo>
            <Styled.PatientInfo>{insurance}</Styled.PatientInfo>
            <Styled.Icon><GrNext/></Styled.Icon>
        </Styled.ListCard>
    )
};

ListPatientCardComponent.propTypes = {
    key: PropTypes.number,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    insurance: PropTypes.string,
    func: PropTypes.func.isRequired
}