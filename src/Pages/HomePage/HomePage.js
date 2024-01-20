import {
  Container,
  Wrap,
  Section,
  Title,
  Button,
  List,
  StyledLink,
  Item,
} from '../HomePage/HomePage.styled.js';

export const HomePage = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Title>OUR SERVICES</Title>
          <List>
            <Item> Bay car</Item>
            <Item> Sold your car</Item>
            <Item> Trade in</Item>
            <Item> Registration</Item>
            <Item> Insurence</Item>
          </List>
          <Button type="button">
            <StyledLink to="/catalog"> Catalog </StyledLink>
          </Button>
        </Wrap>
      </Container>
    </Section>
  );
};
