import * as Styled from './Toolbar.style';
import {PiUserCircleFill} from 'react-icons/pi';
import {FiLogOut} from 'react-icons/fi';
import {HiOutlineMenu} from 'react-icons/hi';
import { useContext, useState } from 'react';
import { ToolbarContext } from '../../contexts/Toolbar/Toolbar.context';
import {SidebarComponent} from '../Sidebar/Sidebar.component';
import { useNavigate } from 'react-router-dom';

export const ToolbarComponent = () => {
    const {toolbar} = useContext(ToolbarContext);

    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    
    const navigate = useNavigate();

    const logOut = () => {
        navigate('/login')
    }

    return(
        <Styled.Toolbar>
            <Styled.LeftContainer>
                <Styled.OpenMenu onClick={handleShowSidebar}><HiOutlineMenu/></Styled.OpenMenu>
                {showSidebar && <SidebarComponent active={setShowSidebar}/>}
                <Styled.Title>{toolbar.title}</Styled.Title>
            </Styled.LeftContainer>
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