import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Input } from 'components/InputForm/InputForm.styled';

export const InputForm = ({ onSubmit, vin }) => {
  const [decodeVin, setDecodeVin] = useState('');

    useEffect(() => {
        if (vin) {
            setDecodeVin(vin);
        }
    }, [vin]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (decodeVin === '') {
            alert('Please enter VIN!');
            return;
        }
        onSubmit(decodeVin);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setDecodeVin(e.target.value);
    };
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={decodeVin}       
              autocomplete="off"
              autoFocus
              pattern='[a-zA-Z0-9]{17}'
              placeholder="Enter VIN"
            />
            <Button type="submit">Decode</Button>
        </Form>
    </Container>
  );
};

InputForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    vin: PropTypes.string
}