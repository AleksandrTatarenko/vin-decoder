import PropTypes from 'prop-types';
import { Container, Box, List } from "./VariablesList.styled";
import { VariableItem } from 'components/VariableItem/VariableItem';

export const VariablesList = ({ variables }) => {

    return (
        <Container>
            <Box>
                <List>
                    {variables.map(({ VariableId, Variable, Value }) => {
                        return (
                            <VariableItem
                                key={VariableId}
                                variable={Variable}
                                value={Value}
                            />
                        )
                    })}
                </List>
            </Box>
        </Container>
    );
};

VariablesList.propTypes = {
    variables: PropTypes.arrayOf(
        PropTypes.shape({ VariableId: PropTypes.number.isRequired })
    ),
};