import { useDispatch, useSelector } from 'react-redux';
import { getByIdCar } from '../../redux/operations.js';
import { useEffect } from 'react';
import { selectCar } from '../../redux/CarsSlice.js';

export const ModalContent = ({ idTarget }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByIdCar(idTarget));
  }, [idTarget, dispatch]);

  const car = useSelector(selectCar);

  return (
    <div>
      <p> {car.make}</p>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p> {car.rentalPrice}</p>
      <p>{car.address}</p>
      <p>{car.rentalCompany}</p>
      <p>{car.type}</p>
      <p>{car.mileage}</p>
      <p>{car.accessories}</p>
    </div>
  );
};
