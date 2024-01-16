import styled from 'styled-components';
import background from '../img/home-back.jpg';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  background-image: url(${background});
  background-size: cover;
  width: 1440px;
  height: 850px;
  margin: 0 auto;
`;
export const Container = styled.div`
  width: 1200px;
  padding: 0px 20px;

  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-self: center;
  width: 400px;
  height: 500px;
  padding: 20px;
  margin-left: 60px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  border-radius: 30px;
`;
export const Button = styled.button`
  width: 274px;
  margin: 0 auto;
  padding: 12px 99px;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  &:hover {
    background: #0b44cd;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
`;
