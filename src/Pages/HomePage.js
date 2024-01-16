import {
  Container,
  Wrap,
  Section,
  Title,
  Button,
  List,
  StyledLink,
} from './HomePage.styled.js';

export const HomePage = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Title>OUR SERVICES</Title>
          <List>
            <li> Bay car</li>
            <li> Sold your car</li>
            <li> Trade in</li>
            <li> Regisrtation</li>
            <li> Inshurence</li>
          </List>
          <Button type="button">
            <StyledLink to="/catalog"> Catalog </StyledLink>
          </Button>
        </Wrap>
      </Container>
    </Section>
  );
};
