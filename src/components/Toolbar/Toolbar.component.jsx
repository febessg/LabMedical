import * as Styled from './Toolbar.style';
import {PiUserCircleFill} from 'react-icons/pi'
import {FiLogOut} from 'react-icons/fi'

export const ToolbarComponent = () => {
    return(
        <Styled.Toolbar>
            <Styled.Title>Toolbar is render</Styled.Title>
            <Styled.ToolsContainer>
                <Styled.UserName>Username</Styled.UserName>
                <Styled.Icons>
                    <Styled.UserPic><PiUserCircleFill /></Styled.UserPic>
                    <Styled.Logout><FiLogOut/></Styled.Logout>
                </Styled.Icons>
            </Styled.ToolsContainer>
        </Styled.Toolbar>
    )
}