import styled from 'styled-components';
import { LineWave } from 'react-loader-spinner';

export const Loaders = styled(LineWave)`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;
