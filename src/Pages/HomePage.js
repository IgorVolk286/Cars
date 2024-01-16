import {
  Container,
  Wrap,
  Section,
  Title,
  Button,
  StyledLink,
} from './HomePage.styled.js';

export const HomePage = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Title>Choose you car</Title>
          <Button type="button">
            <StyledLink to="/catalog"> Catalog </StyledLink>
          </Button>
        </Wrap>
      </Container>
    </Section>
  );
};
