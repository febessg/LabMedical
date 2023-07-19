import PropTypes from 'prop-types';
import * as Styled from './SidebarItem.style';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth/auth.context';
import { UserContext } from '../../contexts/User/User.context';

export const SidebarItemComponent = ({icon, text, path}) => {
    const {setAuth} = useContext(AuthContext);
    const {user} = useContext(UserContext);

    const navigate = useNavigate();

    const handleNavigate = () => {
        setAuth({
            user,
            isLogged: true
        });
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
    icon: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string
}