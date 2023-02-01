import PropTypes from 'prop-types';
import { Container, List, Item, Link } from './VinsList.styled';
import { nanoid } from 'nanoid';

export const VinsList = ({ vins, onClick }) => {

    const handleClick = (e) => {
        const vin = e.target.textContent;
        onClick(vin);
    }

    return (
        <Container>
            <List>
                {vins.map(vin => {
                    return (
                        <Item key={nanoid(3)}>
                            <Link onClick={handleClick}>{vin}</Link>
                        </Item>
                    );
                })}
            </List>
        </Container>
    );
};

VinsList.propTypes = {
    vins: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}