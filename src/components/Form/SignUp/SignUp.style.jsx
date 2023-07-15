import styled from 'styled-components';

export const Form = styled.form`
    display: inline-flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    min-width: 400px;
`

export const Title = styled.legend`
    align-self: center;
    color: #159976;
    font-size: 2rem;
    font-weight: 700;
`

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 100%;
`

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    background-color: #159976;
    width: 100%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    cursor: pointer;

    color: #FFF;
    font-size: 1rem;
    font-weight: 400;

    opacity: ${({$active}) => {return $active ? 1 : 0.5}};

    &:disabled {
        cursor: not-allowed;
    }
`