import styled from 'styled-components';

export const PatientCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 17rem;
    padding: 1rem;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(82, 129, 220, 0.25);
    gap: 1rem;
`

export const TopBar = styled.div`
    background-color: #159976;
    position: absolute;
    top: 0;
    width: 100%;
    height: 15%;
    z-index: 0;
    border-radius: 10px 10px 0 0;
`

export const Icon = styled.span`
    font-size: 5rem;
    color: #25232F;
    max-height: 80px;
    margin-bottom: 0.5rem;
    z-index: 1;
`

export const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    height: 3rem;
`

export const PatientName = styled.h2`
    color: #159976;
    text-align: center;
`

export const PatientAge = styled.h4`
    color: #9A95B1;
`

export const PatientContact = styled.h2`
    color: #25232F;
    margin-bottom: 0.5rem;
    text-align: center;
`

export const HealthInsurance = styled.h2`
    color: #25232F;
    text-align: center;
`

export const Button = styled.button`
    background-color: transparent;
    color: #25232F;
    border: 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`