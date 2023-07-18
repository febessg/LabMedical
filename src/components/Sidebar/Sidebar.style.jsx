import styled from 'styled-components';

export const Sidebar = styled.div`
    background-color: #159976;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 15rem;
    animation: showSidebar .4s;
    z-index: 100;

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 15rem;
        }
    }

    > svg {
        position: fixed;
        color: #FFF;
        width: 24px;
        height: 24px;
        margin-top: 1rem;
        margin-left: 1rem;
        cursor: pointer;
    }
`