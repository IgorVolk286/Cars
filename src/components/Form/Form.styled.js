import styled from 'styled-components';

export const Forma = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: 18px;
`;
export const Selects = styled.select`
  display: flex;
  gap: 18px;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  background: rgba(18, 20, 23, 0.05);
  margin-top: 8px;
`;
export const Options = styled.option`
  color: rgba(18, 20, 23, 0.2);
  border-radius: 10px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Button = styled.button`
  color: #ffffff;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  &:hover {
    background: #0b44cd;
  }
`;
export const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-top: 8px;
`;
export const OptionS = styled.option`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Option = styled.option`
  color: rgba(18, 20, 23, 0.2);

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const InputLeft = styled.input`
  margin-right: 0px;
  margin-top: 8px;
  background: rgba(18, 20, 23, 0.05);
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const InputRight = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  margin-top: 8px;
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const Input = styled.div`
  display: flex;
  align-items: flex-end;
`;
