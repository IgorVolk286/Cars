import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/icons_553938.svg';
export const Container = styled.div`
  width: 1200px;
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const NavList = styled.ul`
  margin: 0 auto;
  gap: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Nav = styled.ul`
  margin: 0 auto;
`;
export const Header = styled.header`
  width: 1440px;
  padding: 20px 20px;
  outline: 1px solid red;
  background-color: #f0f0f0;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &.active {
    color: blue;
  }
`;

export const LogoMain = styled(Logo)`
  width: 50px;
  height: 50px;
  margin-right: 150px;
`;
