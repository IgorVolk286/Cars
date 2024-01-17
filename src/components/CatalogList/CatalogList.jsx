import { useEffect } from 'react';
import {
  Card,
  List,
  Container,
  HardNorm,
  Button,
  ButtonFavorit,
} from '../CatalogList/CatalogList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetcherAllCars } from '../../redux/operations.js';
import { selectCars } from '../../redux/CarsSlice.js';

// ];
export const CatalogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcherAllCars());
  }, []);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <List>
        {cars.map(
          ({
            id,
            make,
            model,
            year,
            rentalPrice,
            address,
            type,
            mileage,
            rentalCompany,
            accessories,
          }) => {
            return (
              <Card key={id} id={id}>
                <ButtonFavorit type="button">
                  <HardNorm />
                </ButtonFavorit>
                <img
                  src="../../img/home-back.jpg"
                  alt="Grapefruit slice atop a pile of other slices"
                />
                <p> {make}</p>
                <p>{model}</p>
                <p>{year}</p>
                <p> {rentalPrice}</p>
                <p>{address}</p>
                <p>{rentalCompany}</p>
                <p>{type}</p>
                <p>{mileage}</p>
                <p>{accessories}</p>
                <Button type="button">Learn More</Button>
              </Card>
            );
          }
        )}
      </List>
    </Container>
  );
};
