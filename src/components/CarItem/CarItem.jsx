import { useState } from 'react';
import {
  Card,
  HardNorm,
  Button,
  ButtonFavorit,
  Img,
  Title,
  P,
  Titl,
  Auto,
  ItemAuto,
} from 'components/CarItem/CarItem.styled';
import { ModalCar } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent/Modalcontent';
import { getFavoriteCar } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const CarItem = ({ car }) => {
  const [isOpen, setisOpen] = useState(false);
  console.log(car.id);
  const [idTarget, setidTarget] = useState('');
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    rentalCompany,
    accessories,
  } = car;

  const toggleModal = e => {
    setisOpen(!isOpen);
    setidTarget(e.target.id);
  };
  const dispatch = useDispatch();
  const createFavorite = e => {
    const idCurrent = e.currentTarget.id;
    console.log(idCurrent);
    dispatch(getFavoriteCar(idCurrent));
  };

  return (
    <Card key={id} id={id}>
      <ButtonFavorit type="button" id={id} onClick={createFavorite}>
        <HardNorm />
      </ButtonFavorit>
      <Img src={img} alt="img auto" />
      <Title>
        <Titl>
          <P>{make},</P>
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
        <ModalCar toggleModal={toggleModal} idTarget={idTarget}>
          <ModalContent idTarget={idTarget} car={car} />
        </ModalCar>
      )}
    </Card>
  );
};
