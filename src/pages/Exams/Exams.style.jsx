import styled from 'styled-components';

export const Exams = styled.div`
    padding: 2rem 4rem;
    width: 100%;
`

export const Title = styled.h2`
    color: #9A95B1;
    margin-bottom: 0.5rem;
`

export const SearchPatient = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
`

export const InputGroup = styled.div`
    position: relative;
    width: 100%;
`

export const InputIcon = styled.i`
      position: absolute;
      top: 1.7rem;
      right: 10px;
      transform: translateY(-50%);
      color: #9A95B1;
`

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    color: #FFF;
    background-color: #159976;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    cursor: pointer;
    height: 35px;
    padding: 0 0.5rem;
`