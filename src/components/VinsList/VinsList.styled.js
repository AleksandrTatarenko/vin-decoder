import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
`;

export const List = styled.ul`
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style-type: none;
`;

export const Item = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const Link = styled.a`
    font-size: 15px;
    font-weight: normal;
    border: none;
    background-color: #F8F8F8;
    @media (min-width: 480px) {
        font-size: 18px;
    }
`;
