import styled from 'styled-components';
import { ReactComponent as IconDefaul } from '../../../img/37460.svg';
import background from '../../../img/home-back.jpg';

export const Defaults = styled(IconDefaul)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

export const Section = styled.section`
  background-image: url(${background});
  background-size: cover;
  width: 1440px;
  height: 850px;
  margin: 0 auto;
`;
export const Container = styled.div`
  width: 1440px;
  padding: 0px 20px;

  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 30px;
`;
