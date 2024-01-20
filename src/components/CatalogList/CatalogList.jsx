import {
  List,
  Container,
  LoadMore,
} from '../CatalogList/CatalogList.styled.js';
import { useSelector } from 'react-redux';
import { selectfilteredCars } from '../../redux/CarsSlice.js';
import { CarItem } from '../CarItem/CarItem.jsx';
import { fetcherAllCars } from '../../redux/operations.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    window.scrollBy({
      top: 900,
      behavior: 'smooth',
    });
    dispatch(fetcherAllCars(page));
  }, [dispatch, page]);

  const filteredCars = useSelector(selectfilteredCars);
  console.log(filteredCars);
  return (
    <Container>
      <List>
        {filteredCars.map(car => (
          <CarItem car={car} />
        ))}
      </List>
      <LoadMore type="button" onClick={() => setPage(page + 1)}>
        Load More
      </LoadMore>
    </Container>
  );
};
