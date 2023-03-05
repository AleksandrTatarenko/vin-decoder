import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    display: block;
    max-width: 300px;
    margin: 0px 10px 0px 10px;
    @media (min-width: 480px) {
        max-width: 480px;
        margin: 0px 15px 0px 15px;
    }
`;

export const Link = styled(NavLink)`
    display: block;
    max-width: 30px;
    margin-top: 20px;
    text-decoration: none;
    padding: 5px 15px 5px 15px;
    font-size: 14px;
    color: black;
    border: 1px solid;
    border-radius: 5px;
    &:hover {
        color: white;
        background-color: grey;
    };
    &:focus {
        color: white;
        background-color: grey;
    };
    @media (min-width: 480px) {
        max-width: 40px;
        font-size: 18px;
    }
`

export const Title = styled.h2`
    font-size: 16px;
    @media (min-width: 480px) {
        font-size: 20px;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    @media (min-width: 480px) {
        font-size: 16px;
    }
`;