import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Container, Link } from 'components/Layout/Layout.styled';

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
