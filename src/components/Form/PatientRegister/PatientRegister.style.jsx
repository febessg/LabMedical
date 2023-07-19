import styled from 'styled-components';

export const Form = styled.div`
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(82, 129, 220, 0.25);
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 2rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap-reverse;
    gap: 0.5rem;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    flex-wrap: wrap;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 3rem;
    margin-top: 1rem;
`

export const Titles = styled.h3`
    color: #25232F;
    font-weight: 700;
    font-size: 1.3rem;
`
export const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`