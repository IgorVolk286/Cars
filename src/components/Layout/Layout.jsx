import { Outlet } from 'react-router-dom';
import {
  Container,
  NavList,
  Nav,
  Header,
  StyledLink,
  LogoMain,
} from './Layout.styled.js';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Nav>
            <NavList>
              <li>
                <StyledLink to="/">
                  <LogoMain alt="logo auto" />
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/"> Home </StyledLink>
              </li>
              <li>
                <StyledLink to="/catalog"> Catalog </StyledLink>
              </li>
              <li>
                <StyledLink to="/favorites"> Favorite </StyledLink>
              </li>
            </NavList>
          </Nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
