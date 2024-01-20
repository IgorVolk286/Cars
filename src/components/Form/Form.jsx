import {
  Forma,
  Selects,
  Options,
  Button,
  Div,
  Label,
  OptionS,
} from '../Form/Form.styled';

import {
  selectBrand,
  actualBrand,
  actualPriceRenta,
} from '../../redux/FilterSlise';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const Form = () => {
  const brand = useSelector(selectBrand);
  const [selectBrands, setselectBrands] = useState(brand);
  const [selectPrice, setselectPrice] = useState();
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
  };
  return (
    <Div>
      <Forma onSubmit={submit}>
        <Label>
          Car brand
          <Selects value={selectBrands} onChange={handlBrand}>
            <OptionS selected>Enter the text</OptionS>
            {options.map(option => (
              <Options key={option} value={option}>
                {option}
              </Options>
            ))}
          </Selects>
        </Label>
        <Label>
          Price/ 1 hour
          <Selects value={selectBrand} onChange={handlPrice}>
            {optionsPrice.map(option => (
              <Options key={option} value={option}>
                {option}
              </Options>
            ))}
          </Selects>
        </Label>

        <Button type="submit"> Search </Button>
      </Forma>
    </Div>
  );
};
