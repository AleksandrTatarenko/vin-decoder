import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import api from "services/api";
import { Container, List, Item } from "./Variables.styled";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
font-weight: normal;
font-size: 16px;
`;

const Variables = () => {
    const [variables, setVariables] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function fetchVariables() {
            try {
                const results = await api.getVehicleVariablesList()
                setVariables(results);
                // Notiflix.Notify.success(`Vehicle variables list successfully loaded!`);
            } catch (error) {
                console.log(error);
                Notiflix.Notify.failure("Connection lost!");
            }
        };
        fetchVariables();
    }, []);

    return (
        <Container>
            <List>
                {variables.map(({ID, Name, Description, GroupName}) => {
                    return (
                        <Item key={ID}>
                            <Link to={`${ID}`} state={{
                                from: location,
                                data: {ID, Name, Description, GroupName},
                            }}>{Name}</Link>
                        </Item>) 
                })}
            </List>
        </Container>);
};

export default Variables;
