import styled from 'styled-components';
import { ReactComponent as IconNorm } from '../../img/normal.svg';
export const Card = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-wrap: wrap;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
`;
export const HardNorm = styled(IconNorm)`
  width: 18px;
  height: 18px;
  fill: red;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  &:hover {
    background: #0b44cd;
  }
`;
export const ButtonFavorit = styled.button`
  background: transparent;
`;
