import PropTypes from 'prop-types';
import * as Styled from './Button.style';

export const ButtonComponent = ({title, action, color}) => {
    return (
        <>
            <Styled.Button $color={color} onClick={action}>{title}</Styled.Button>
        </>
    )
};

ButtonComponent.propTypes = {
    title: PropTypes.string,
    action: PropTypes.func
}