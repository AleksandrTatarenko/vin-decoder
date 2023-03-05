import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "services/api";
import Notiflix from "notiflix";
import { Container, Link, Title, Text, Box } from "./Variable.styled";

const Variable = () => {
    const [variable, setVariable] = useState({})
    const location = useLocation();
    const back = location.state?.from ?? '/';
    const params = useParams();

    const createMarkup = () => {
        return { __html: `${variable.Description}` };
    };

    useEffect(() => {
        async function fetchVaribleById(id) {
            try {
                const response = await api.getVehicleVariablesList();
                const variable = response.filter(i => i.ID.toString() === id)[0];
                setVariable(variable);
            } catch (error) {
                console.log(error);
                Notiflix.Notify.failure("Connection lost!");
            }
        }
        fetchVaribleById(params.variableId);
    }, [params.variableId]);
    
    return (
        <Container>
            {variable ?
                <Box>
                    <Link to={back}>Back</Link>
                    <Title>{variable.Name}</Title>
                    <Text>Group: {variable.GroupName}</Text>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                </Box> :
                <Title>Variable with id: {params.variableId} not found! Please try another.</Title>
            }
        </Container>);
};

export default Variable;
