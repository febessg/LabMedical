import * as Styled from './MedicalRecordItem.style';
import PropTypes from 'prop-types';

export const MedicalRecordItemComponent = ({id, title, info}) => {
    return (
        <>
            <Styled.MedicalRecordItem>
                <Styled.ItemHeader>
                    <Styled.OrderNumber>
                            {id}
                    </Styled.OrderNumber>
                    <Styled.ItemTitle>{title}</Styled.ItemTitle>
                </Styled.ItemHeader>
                <Styled.ItemContent>
                    <Styled.Info>{info}</Styled.Info>
                    <Styled.Button>Editar</Styled.Button>
                </Styled.ItemContent>
            </Styled.MedicalRecordItem>
        </>
    )
};

MedicalRecordItemComponent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    info: PropTypes.object
}