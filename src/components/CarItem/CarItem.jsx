import { useState } from 'react';
import {
  Card,
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
} from 'components/CarItem/CarItem.styled';
import { ModalCar } from 'components/Modal/Modal';
import { ModalContent } from 'components/Modal/ModalContent/Modalcontent';

export const CarItem = ({ car }) => {
  const [isOpen, setisOpen] = useState(true);
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
    setidTarget(e.target.id);
    setisOpen(!isOpen);
  };

  const createFavorite = e => {};
  //   const idCurrent = e.currentTarget.id;
  //   console.log(idCurrent);
  //   dispatch(getFavoriteCar(idCurrent));
  // };
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
