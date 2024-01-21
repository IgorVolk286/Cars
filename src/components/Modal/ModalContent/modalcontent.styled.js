import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Img = styled.img`
  width: 469px;
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
  margin-top: 5px;
  display: flex;
  width: 100%;

  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;
export const Span = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const P = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  margin-right: 5px;
`;
export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-top: 0px;
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
export const Auto = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 8px; */
  margin-bottom: 14px;
`;
export const Decription = styled.p`
  color: #121417;
  margin-bottom: 24px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const H2 = styled.h2`
  color: #121417;
  margin-bottom: 24px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
`;
export const AutoLast = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;
export const RentItem = styled.li`
  color: #363535;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
`;
export const ButtonCall = styled.button`
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  margin: 0px;
  &:hover {
    background: #0b44cd;
  }
`;

export const Link = styled.a`
  color: #ffffff;
`;
