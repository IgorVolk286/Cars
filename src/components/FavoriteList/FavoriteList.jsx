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
  P,
  Titl,
  Auto,
  ItemAuto,
} from '../FavoriteList/FavoriteList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCar } from '../../redux/operations.js';
import { selectFavorite } from '../../redux/FavoriteSlice.js';
import { ModalCar } from 'components/Modal/Modal.jsx';
import { ModalContent } from 'components/Modal/ModalContent/Modalcontent.jsx';

export const FavoriteList = () => {
  const [isOpen, setisOpen] = useState(false);
  const [idTarget, setidTarget] = useState('');
  const favorit = useSelector(selectFavorite);

  console.log(favorit);
  const createFavorite = e => {
    const idCurrent = e.currentTarget.id;
    console.log(idCurrent);
    dispatch(getFavoriteCar(idCurrent));
  };

  const toggleModal = e => {
    setisOpen(!isOpen);
    setidTarget(e.target.id);
  };

  const dispatch = useDispatch();

  return (
    <Container>
      <List>
        {favorit.map(
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
                <ButtonFavorit type="button" id={id} onClick={createFavorite}>
                  <HardNorm />
                </ButtonFavorit>
                <Img src={img} alt="img auto" />
                <Title>
                  <Titl>
                    <P>
                      {make},{/* <Span>{model},</Span> */}
                    </P>
                    <p>{year}</p>
                  </Titl>

                  <P>{rentalPrice}</P>
                </Title>
                <Auto>
                  <ItemAuto>{address.slice(19)}</ItemAuto>
                  <ItemAuto>{rentalCompany}</ItemAuto>
                  <ItemAuto>Premium</ItemAuto>
                  <ItemAuto>{type}</ItemAuto>
                  <ItemAuto>{model}</ItemAuto>
                  <ItemAuto>{id}</ItemAuto>
                  <ItemAuto>{accessories.slice(0, 1)}</ItemAuto>
                </Auto>
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
