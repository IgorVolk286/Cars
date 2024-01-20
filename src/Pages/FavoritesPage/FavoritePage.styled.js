import background from '../../img/home-back.jpg';

import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  padding: 0px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Section = styled.section`
  background-image: url(${background});
  background-size: cover;
  width: 1440px;
  height: 850px;
  margin: 0 auto;
`;
