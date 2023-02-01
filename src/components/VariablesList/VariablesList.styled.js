import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
`;

export const Box = styled.div`
    margin: 20px 10px 0px 10px;
    @media (min-width: 480px) {
        margin: 20px 15px 0px 15px;
    }
`

export const List = styled.ul`
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style-type: none;
`;