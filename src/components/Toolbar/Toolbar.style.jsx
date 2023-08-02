import styled from 'styled-components';

export const Toolbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    width: 100%;
    min-height: 3rem;
    padding: 0 1rem;
    background-color: #159976;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const OpenMenu = styled.button`
    height: 24px;
    background-color: transparent;
    border: 0;
    color: #FFF;
    font-size: 1.5rem;
    cursor: pointer;
`

export const Title = styled.h1`
    padding-left: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: #FFF;
    text-transform: uppercase;
    line-height: 1.3rem;
    margin: 0.5rem 0;
`

export const UserName = styled.p`
    color: #FFF;
`

export const ToolsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding-right: 1rem ;
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