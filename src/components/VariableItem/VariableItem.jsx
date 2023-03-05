import PropTypes from 'prop-types';
import { Item, Text, Span } from './VariableItem.styled';

export const VariableItem = ({ variable, value }) => {

    return (
        <Item>
            <Text>{variable}: <Span>{value}</Span></Text>
        </Item>
    );
}

VariableItem.propTypes = {
    variable: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};