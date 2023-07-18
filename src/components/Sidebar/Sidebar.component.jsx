import * as Styled from './Sidebar.style';
import {FaTimes} from 'react-icons/fa';

export const SidebarComponent = ({active}) => {
    const closeSidebar = () => {
        active(false)
    }
    return (
        <Styled.Sidebar>
            <FaTimes onClick={closeSidebar}/>
            <div className='Sidebar-Content'>
                
            </div>
        </Styled.Sidebar>
    )
}