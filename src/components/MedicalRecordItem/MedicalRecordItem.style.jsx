import styled from 'styled-components';

export const MedicalRecordItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-bottom: 1rem;
    border-left: .2rem solid #159976;
    
`

export const ItemHeader = styled.div`
        position: absolute;
        top: -5rem;
        left: -1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
`

export const OrderNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background-color: #159976;
    font-size: 1.5rem;
    font-weight: 600;
    color: #FFF;
`

export const ItemTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #159976;
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(82, 129, 220, 0.25);
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem 2rem 2rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
`

export const Info = styled.div`
`

export const Button = styled.button`
    align-self: flex-end;
     padding: 8px 16px;
    border-radius: 5px;
    border: none;
    background-color: ${({$color}) => {return $color === 'red' ? '#BE2E2E' : '#159976' }} ;
    width: 5rem;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    cursor: pointer;

    color: #FFF;
    font-size: 1rem;
    font-weight: 400;
`