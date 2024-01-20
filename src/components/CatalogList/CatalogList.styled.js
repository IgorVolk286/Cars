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
  justify-content: center;
  gap: 29px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  width: 1440px;
  padding: 0px 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const HardNorm = styled(IconNorm)`
  width: 18px;
  height: 18px;
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
  position: relative;
  top: 35px;
  left: 245px;
`;
export const Img = styled.img`
  width: 410px;
  height: 270px;
  display: block;
  overflow: hidden;
  border-radius: 15px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 140px;
  margin-top: 14px;
`;
export const Span = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const TextCard = styled.param`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const P = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const Titl = styled.div`
  display: flex;
  align-items: center;
`;

export const Auto = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: flex-start;
`;
export const ItemAuto = styled.li`
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0px 6px;
`;
export const LoadMore = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  display: block;
  &:hover {
    background: #0b44cd;
  }
`;
