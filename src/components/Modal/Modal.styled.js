import styled from 'styled-components';
import { ReactComponent as IconX } from '../../img/x.svg';
export const OverLay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  padding: 40px 0;
`;
export const ButtonClose = styled.button`
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background: transparent;
`;

export const Modal = styled.div`
  width: 541px;
  height: 752px;
  padding: 40px;
  position: relative;
  border-radius: 24px;
  background: #fff;
`;
export const Svg = styled(IconX)`
  width: 24px;
  height: 24px;
`;
export const ButtonCall = styled.button`
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  margin: 0px;
`;
