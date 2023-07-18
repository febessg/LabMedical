import PropTypes from 'prop-types';
import * as Styled from './SidebarItem.style';
import { useNavigate } from 'react-router-dom';

export const SidebarItemComponent = ({icon, text, path}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(path)
    }

    return (
        <Styled.Item onClick={handleNavigate}>
            <Styled.ItemIcon>{icon}</Styled.ItemIcon>
            <Styled.ItemText>{text}</Styled.ItemText>
        </Styled.Item>
    )
}

SidebarItemComponent.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
    path: PropTypes.string
}