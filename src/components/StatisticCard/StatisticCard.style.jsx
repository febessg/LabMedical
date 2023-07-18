import styled from 'styled-components';

export const StatisticCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 2px rgba(82, 129, 220, 0.25);
    width: auto;
    min-width: 200px;
    padding: 1rem;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Icon = styled.span`
    font-size: 2rem;
    color: #25232F;
`

export const Value = styled.h1`
    color: #159976;
    font-size: 3rem;
`

export const Title = styled.h4`
    color: #25232F;
    text-transform: uppercase;
`
