import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    padding-left: 0.5rem ;
    border: 1px solid #FFF;
    border-radius: 10px;
    margin: 1rem;
    cursor: pointer;

    &:hover {
        border: 2px solid #FFF;
    }
`

export const ItemIcon = styled.div`
    margin-right: 0.5rem;
    color: #FFF;
    font-size: 1.5rem;
    height: 24px;
`

export const ItemText = styled.p`
    color: #FFF;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
`