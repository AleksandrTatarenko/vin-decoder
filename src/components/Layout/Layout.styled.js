import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 15px 15px 15px 15px;
box-shadow: 0 5px 5px grey;
`;

export const Link = styled(NavLink)`
  padding: 3px 10px 3px 10px;
  font-weght: normal;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5%;
  color: black;
  &.active {
    color: white;
    background-color: grey;
  };
  &:not(:last-child) {
    margin-right: 10px;
  };
  @media (min-width: 480px) {
    font-size: 20px;
    &:not(:last-child) {
      margin-right: 25px;
    };
  };
`;