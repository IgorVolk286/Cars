import { CatalogList } from '../../components/CatalogList/CatalogList.jsx';
import { Container } from './CatalogPage.styled.js';
import { Form } from 'components/Form/Form.jsx';
export const CatalogPage = () => {
  return (
    <Container>
      <Form />
      <CatalogList />
    </Container>
  );
};
