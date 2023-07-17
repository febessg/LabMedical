import * as Styled from './Toolbar.style';
import {PiUserCircleFill} from 'react-icons/pi'
import {FiLogOut} from 'react-icons/fi'
import { useContext } from 'react';
import { ToolbarContext } from '../../contexts/Toolbar/Toolbar.context';
import { useNavigate } from 'react-router-dom';

export const ToolbarComponent = () => {
    const {toolbar} = useContext(ToolbarContext);
    
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login')
    }

    return(
        <Styled.Toolbar>
            <Styled.Title>{toolbar.title}</Styled.Title>
            <Styled.ToolsContainer>
                <Styled.UserName>{toolbar.userName}</Styled.UserName>
                <Styled.Icons>
                    <Styled.UserPic><PiUserCircleFill /></Styled.UserPic>
                    <Styled.Logout onClick={logOut}><FiLogOut/></Styled.Logout>
                </Styled.Icons>
            </Styled.ToolsContainer>
        </Styled.Toolbar>
    )
}