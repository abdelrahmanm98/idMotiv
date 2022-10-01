import Booking from '../components/Cars/Booking';

const DUMMY_DATA_CARS = [
  {
    id: 'c1',
    title: 'Energy',
    type: 'Coupe',
    Seating: '4',
    gearStick: 'Manual',
    price: '400',
    photo: 'PhotoCars/audiblack.png',
  },
  {
    id: 'c2',
    title: 'Energy',
    type: 'Coupe',
    Seating: '4',
    gearStick: 'Manual',
    price: '400',
    photo: 'PhotoCars/car2.png',
  },
  {
    id: 'c3',
    title: 'Energy',
    type: 'Coupe',
    Seating: '4',
    gearStick: 'Manual',
    price: '400',
    photo: 'PhotoCars/car3.png',
  },
  {
    id: 'c4',
    title: 'Energy',
    type: 'Coupe',
    Seating: '4',
    gearStick: 'Manual',
    price: '400',
    photo: 'PhotoCars/car4.png',
  },
];

const BookingPage = () => {
  return <Booking dataCars={DUMMY_DATA_CARS} />;
};

export default BookingPage;
