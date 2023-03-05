import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import api from "services/api";
import { Container, Box, Link, List, Item } from "./Variables.styled";
import { useLocation } from "react-router-dom";

const Variables = () => {
    const [variables, setVariables] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function fetchVariables() {
            try {
                const results = await api.getVehicleVariablesList()
                setVariables(results);
            } catch (error) {
                console.log(error);
                Notiflix.Notify.failure("Connection lost!");
            }
        };
        fetchVariables();
    }, []);

    return (
        <Container>
            <Box>
                <List>
                    {variables.map(({ID, Name}) => {
                        return (
                            <Item key={ID}>
                                <Link to={`${ID}`} state={{
                                    from: location
                                }}>{Name}</Link>
                            </Item>
                        ) 
                    })}
                </List>
            </Box>
        </Container>);
};

export default Variables;
