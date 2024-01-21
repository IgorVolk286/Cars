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
import { nanoid } from 'nanoid';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetcherAllCars(page));
  }, [dispatch, page]);

  const filteredCars = useSelector(selectfilteredCars);
  console.log(selectfilteredCars);

  return (
    <Container>
      <List>
        {filteredCars.map(car => (
          <CarItem car={car} key={nanoid()} />
        ))}
      </List>
      <LoadMore type="button" onClick={() => setPage(page + 1)}>
        Load More
      </LoadMore>
    </Container>
  );
};
