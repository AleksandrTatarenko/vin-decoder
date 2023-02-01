import styled from "styled-components";

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