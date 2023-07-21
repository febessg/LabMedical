import styled from 'styled-components';

export const ListCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;padding: 1rem 0;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(82, 129, 220, 0.25);
    cursor: pointer;

    &:hover {
        background-color: #d2d0dc65;
    }
`

export const PatientInfo = styled.p`
    color: #25232F;
    width: 33.33%;
    text-align: center;
`

export const Icon = styled.div`
    position: absolute;
    right: 1rem;
    background-color: transparent;
    border: 0;
    font-size: 1rem;
`