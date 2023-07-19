import styled from 'styled-components';

export const Button = styled.button`
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

    opacity: ${({$active}) => {return $active ? 1 : 0.5}};

    &:disabled {
        cursor: not-allowed;
    }
`