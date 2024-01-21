import {
  Forma,
  Selects,
  Option,
  Button,
  Div,
  Label,
  OptionS,
  InputLeft,
  InputRight,
  Input,
} from '../Form/Form.styled';

import {
  selectPriceRenta,
  selectBrand,
  actualBrand,
  actualPriceRenta,
} from '../../redux/FilterSlise';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Loader } from '../Loader/Loader.jsx';
import { selectIsLoading } from '../../redux/CarsSlice.js';
export const Form = () => {
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPriceRenta);
  const loading = useSelector(selectIsLoading);
  const [selectBrands, setselectBrands] = useState(brand);
  const [selectPrice, setselectPrice] = useState(price);
  const dispatch = useDispatch();

  const handlBrand = e => {
    setselectBrands(e.target.value);
  };
  const handlPrice = e => {
    setselectPrice(e.target.value);
  };
  const options = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const optionsPrice = [20, 30, 40, 50, 60, 70, 80, 90, 100];

  const submit = e => {
    e.preventDefault();
    dispatch(actualBrand(selectBrands));
    dispatch(actualPriceRenta(selectPrice));
    setselectBrands('');
    setselectPrice('10');
  };
  return (
    <Div>
      {loading && <Loader />}
      <Forma onSubmit={submit}>
        <Label>
          Car brand
          <Selects value={selectBrands} onChange={handlBrand}>
            <OptionS selected>Enter the text</OptionS>
            {options.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Selects>
        </Label>
        <Label>
          Price/ 1 hour
          <Selects value={selectPrice} onChange={handlPrice}>
            <OptionS selected>To $</OptionS>
            {optionsPrice.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Selects>
        </Label>
        <Input>
          <Label>
            Сar mileage / km
            <InputLeft type="text" placeholder="From" />
          </Label>
          <InputRight type="text" placeholder="To" />
        </Input>
        <Button type="submit"> Search </Button>
      </Forma>
    </Div>
  );
};
