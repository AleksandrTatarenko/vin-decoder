import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';
import { Suspense } from "react";
import { Header, Container } from 'components/Layout/Layout.styled';

const Link = styled(NavLink)`
  padding: 3px 10px 3px 10px;
  font-weght: normal;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5%;
  color: black;
  &.active {
    color: white;
    background-color: grey;
  }
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const Layout = () => {
    
    return (
        <div>
          <Header>
            <Container>
              <nav>
                <Link to='/' end>Decode VIN</Link>
                <Link to='/variables'>Vehicle variables list</Link>
              </nav>
            </Container>
          </Header>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
    );
};
