import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Container, Title, Text, Box } from "./Variable.styled";
import styled from "styled-components";

const Link = styled(NavLink)`
    display: block;
    max-width: 40px;
    margin-top: 20px;
    text-decoration: none;
    padding: 5px 15px 5px 15px;
    font-size: 18px;
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
`

const Variable = () => {
    const [variable, setVariable] = useState({})
    const location = useLocation();
    const back = location.state?.from ?? '/';
    const data = location.state.data

    useEffect(() => {
        setVariable(data)
    },[data])
    
    return (
        <Container>
            <Box>
                <Link to={back}>Back</Link>
                <Title>{variable.Name}</Title>
                <Text>Group: {variable.GroupName}</Text>
                <Text>{variable.Description}</Text>
            </Box>
        </Container>);
};

export default Variable;
