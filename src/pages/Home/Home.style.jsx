import styled from "styled-components";

export const HomePage = styled.div`
    padding: 2rem;
`

export const Titles = styled.h2`
    color: #25232F;
    font-size: 1.5rem;
`

export const Statistics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
`

export const Search = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
    margin-top: 0.5rem;
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
export const SearchResults = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem 0;
`