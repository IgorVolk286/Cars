import { List, Container } from '../CatalogList/CatalogList.styled.js';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/CarsSlice.js';
import { CarItem } from '../CarItem/CarItem.jsx';

export const CatalogList = () => {
  const cars = useSelector(selectCars);

  return (
    <Container>
      <List>
        {cars.map(car => (
          <CarItem car={car} />
        ))}
      </List>
      <button type="button">Load More</button>
    </Container>
  );
};
