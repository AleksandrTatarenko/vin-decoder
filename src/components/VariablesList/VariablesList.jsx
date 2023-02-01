import PropTypes from 'prop-types';
import { Container, List } from "./VariablesList.styled";
import { VariableItem } from 'components/VariableItem/VariableItem';

export const VariablesList = ({ variables }) => {

    return (
        <Container>
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
        </Container>
    );
};

VariablesList.propTypes = {
    variables: PropTypes.arrayOf(
        PropTypes.shape({ VariableId: PropTypes.number.isRequired })
    ),
};