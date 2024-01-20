import { useState } from 'react';
import {
  Card,
  List,
  Container,
  HardNorm,
  Button,
  ButtonFavorit,
  Img,
  Title,
  P,
  Titl,
  Auto,
  ItemAuto,
  HardActive,
} from '../FavoriteList/FavoriteList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite, delCar } from '../../redux/FavoriteSlice.js';
import { ModalCar } from 'components/Modal/Modal.jsx';
import { ModalContent } from 'components/Modal/ModalContent/Modalcontent.jsx';

export const FavoriteList = () => {
  const [isOpen, setisOpen] = useState(false);
  const [idTarget, setidTarget] = useState('');

  const favorit = useSelector(selectFavorite);

  const dispatch = useDispatch();

  const createFavorite = e => {
    const idCurrent = e.currentTarget.id;
    const index = favorit.findIndex(item => item.id === idCurrent);
    if (index !== -1) {
      dispatch(delCar(idCurrent));
    }
  };

  const toggleModal = e => {
    setisOpen(!isOpen);
    setidTarget(e.target.id);
  };
  return (
    <Container>
      <List>
        {favorit.map(car => {
          return (
            <Card key={car.id} id={car.id}>
              <ButtonFavorit type="button" id={car.id} onClick={createFavorite}>
                {favorit.some(item => item.id === car.id) ? (
                  <HardActive />
                ) : (
                  <HardNorm />
                )}
              </ButtonFavorit>
              <Img src={car.img} alt="img auto" />
              <Title>
                <Titl>
                  <P>{car.make},</P>
                  <p>{car.year}</p>
                </Titl>

                <P>{car.rentalPrice}</P>
              </Title>
              <Auto>
                <ItemAuto>{car.address.slice(19)}</ItemAuto>
                <ItemAuto>{car.rentalCompany}</ItemAuto>
                <ItemAuto>Premium</ItemAuto>
                <ItemAuto>{car.type}</ItemAuto>
                <ItemAuto>{car.model}</ItemAuto>
                <ItemAuto>{car.id}</ItemAuto>
                <ItemAuto>{car.accessories.slice(0, 1)}</ItemAuto>
              </Auto>
              <Button type="button" id={car.id} onClick={toggleModal}>
                Learn More
              </Button>
              {isOpen && (
                <ModalCar toggleModal={toggleModal}>
                  <ModalContent idTarget={idTarget} car={car} />
                </ModalCar>
              )}
            </Card>
          );
        })}
        )
      </List>
    </Container>
  );
};
