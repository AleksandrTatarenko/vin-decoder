import styled from 'styled-components';
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 15px 0 15px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid grey;
  overflow: hidden;
`

export const Button = styled.button`
  display: inline-block;
  width: 88px;
  height: 48px;
  font-size: 18px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
  opacity: 1;
}
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;