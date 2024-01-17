import { useEffect, useState } from 'react';
import {
  Card,
  List,
  Container,
  HardNorm,
  Button,
  ButtonFavorit,
  Img,
  Span,
  Title,
  TextCard,
} from '../CatalogList/CatalogList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetcherAllCars } from '../../redux/operations.js';
import { selectCars } from '../../redux/CarsSlice.js';
import { ModalCar } from 'components/Modal/Modal.jsx';
import { ModalContent } from 'components/Modal/Modalcontent.jsx';

export const CatalogList = () => {
  const [isOpen, setisOpen] = useState(false);
  const [idTarget, setidTarget] = useState('1');

  const toggleModal = e => {
    setisOpen(!isOpen);
    setidTarget(e.target.id);
  };
  console.log(idTarget);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetcherAllCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <List>
        {cars.map(
          ({
            id,
            img,
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
                <Img src={img} alt="img auto" />
                <Title>
                  <Span>{make},</Span>
                  <Span>{year}</Span>
                  <Span>{rentalPrice}</Span>
                </Title>

                <p>{model}</p>
                <p>{address}</p>
                <p>{rentalCompany}</p>
                <p>{type}</p>
                <p>{mileage}</p>
                <p>{accessories}</p>
                <Button type="button" id={id} onClick={toggleModal}>
                  Learn More
                </Button>
                {isOpen && (
                  <ModalCar toggleModal={toggleModal}>
                    <ModalContent idTarget={idTarget} />
                  </ModalCar>
                )}
              </Card>
            );
          }
        )}
      </List>
    </Container>
  );
};
