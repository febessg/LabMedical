import styled from 'styled-components';

export const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    background-color: #159976;

`

export const Title = styled.h1`
    padding-left: 0.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    color: #FFF;
`

export const UserName = styled.p`
    color: #FFF;
`

export const ToolsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const UserPic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    border: 0;
    color: #FFF;
    font-size: 2rem;
    border-radius: 50%;

`

export const Logout = styled.button`
    background-color: transparent;
    border: 0;
    color: #FFF;
    font-size: 1.3rem;
    cursor: pointer;
`