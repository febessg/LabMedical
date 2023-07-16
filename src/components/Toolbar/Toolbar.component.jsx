import * as Styled from './Toolbar.style';
import {PiUserCircleFill} from 'react-icons/pi'
import {FiLogOut} from 'react-icons/fi'
import { useContext } from 'react';
import { ToolbarContext } from '../../contexts/Toolbar/Toolbar.context';

export const ToolbarComponent = () => {
    const {toolbar} = useContext(ToolbarContext);

    return(
        <Styled.Toolbar>
            <Styled.Title>{toolbar.title}</Styled.Title>
            <Styled.ToolsContainer>
                <Styled.UserName>{toolbar.user.name}</Styled.UserName>
                <Styled.Icons>
                    <Styled.UserPic><PiUserCircleFill /></Styled.UserPic>
                    <Styled.Logout><FiLogOut/></Styled.Logout>
                </Styled.Icons>
            </Styled.ToolsContainer>
        </Styled.Toolbar>
    )
}