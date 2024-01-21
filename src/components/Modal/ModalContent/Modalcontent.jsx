import {
  Wrap,
  Img,
  Title,
  Span,
  P,
  Card,
  ItemAuto,
  Auto,
  Decription,
  H2,
  AutoLast,
  Div,
  RentItem,
  ButtonCall,
  Link,
} from './modalcontent.styled';
export const ModalContent = ({ idTarget, car }) => {
  return (
    <Wrap>
      <Img src={car.img} alt="img auto" />
      <Card>
        <Title>
          <P>
            {car.make} <Span>{car.model},</Span>
          </P>

          <P>{car.year}</P>
        </Title>
        <Auto>
          <ItemAuto>{car.address.slice(20)}</ItemAuto>
          <ItemAuto>Id:{car.id}</ItemAuto>
          <ItemAuto>Year:{car.year}</ItemAuto>
          <ItemAuto>Type:{car.type}</ItemAuto>
          <ItemAuto>FuelConsumption:{car.fuelConsumption}</ItemAuto>
          <ItemAuto>EngineSize:{car.engineSize}</ItemAuto>
        </Auto>

        <Decription> {car.description}</Decription>
        <H2>Accessories and functionalities:</H2>
        <Div>
          <AutoLast>
            {car.accessories.map(item => {
              return <ItemAuto key={car.id}>{item}</ItemAuto>;
            })}
          </AutoLast>
          <AutoLast>
            {car.functionalities.map(item => {
              return <ItemAuto>{item}</ItemAuto>;
            })}
          </AutoLast>
        </Div>
        <Div>
          <H2>Rental Conditions:</H2>
          <Auto>
            <RentItem>
              Minimum age : <Span>25</Span>
            </RentItem>
            <RentItem>Valid driver’s license</RentItem>
            <br></br>
            <RentItem>Security deposite required</RentItem>
            <RentItem>
              Mileage: <Span>5,858</Span>
            </RentItem>
            <RentItem>
              Price: <Span>{car.rentalPrice}</Span>
            </RentItem>
          </Auto>
        </Div>
        <ButtonCall type="buttom">
          <Link href="tel:+380730000000">Rental Car</Link>
        </ButtonCall>
      </Card>
    </Wrap>
  );
};
