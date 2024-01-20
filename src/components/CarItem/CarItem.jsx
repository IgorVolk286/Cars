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
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/FavoriteSlice.js';
import { delCar } from '../../redux/FavoriteSlice';
console.log(delCar);
const bn = {
  fill: 'red',
};
const bk = {
  fill: 'red',
};
export const CarItem = ({ car }) => {
  const [isOpen, setisOpen] = useState(false);
  console.log(car.id);
  const [idTarget, setidTarget] = useState('');
  const favorit = useSelector(selectFavorite);

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
    const index = favorit.findIndex(item => item.id === idCurrent);
    console.log(index);

    if (index !== -1) {
      dispatch(delCar(idCurrent));
    } else {
      dispatch(getFavoriteCar(idCurrent));
    }
  };

  return (
    <Card key={id} id={id}>
      <ButtonFavorit type="button" id={id} onClick={createFavorite}>
        <HardNorm
        // style={!favorite.find(item => item.id === id) ? { bn } : { bk }}
        />
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
